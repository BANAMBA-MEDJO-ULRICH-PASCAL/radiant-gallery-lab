import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  subject: z.string().min(1).max(160),
  message: z.string().min(1).max(4000),
});

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let json: unknown;
        try {
          json = await request.json();
        } catch {
          return new Response("Invalid JSON", { status: 400 });
        }

        const parsed = schema.safeParse(json);
        if (!parsed.success) {
          return new Response(
            JSON.stringify({ error: "Invalid input" }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }

        const { createClient } = await import("@supabase/supabase-js");
        const url = process.env["SUPABASE_URL"] ?? import.meta.env["VITE_SUPABASE_URL"];
        const key = process.env["SUPABASE_SERVICE_ROLE_KEY"];
        if (!url || !key) {
          return new Response("Server not configured", { status: 500 });
        }

        const supabase = createClient(url, key, {
          auth: { autoRefreshToken: false, persistSession: false },
        });

        const { error } = await supabase.from("messages").insert({
          name: parsed.data.name,
          email: parsed.data.email,
          subject: parsed.data.subject,
          message: parsed.data.message,
        });

        if (error) {
          return new Response(
            JSON.stringify({ error: "Could not save message" }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }

        return new Response(
          JSON.stringify({ ok: true }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      },
    },
  },
});
