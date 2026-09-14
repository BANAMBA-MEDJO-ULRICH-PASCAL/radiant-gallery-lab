export function BackgroundOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="caustic absolute -top-40 -right-32 size-[560px] rounded-full bg-[#2E6E6A]/45 blur-3xl" />
      <div
        className="caustic absolute top-1/3 -left-40 size-[520px] rounded-full bg-[#3C8480]/35 blur-3xl"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="caustic absolute bottom-0 right-1/4 size-[460px] rounded-full bg-[#5C9A8E]/25 blur-3xl"
        style={{ animationDelay: "-8s" }}
      />
      <div className="floaty absolute -top-10 right-10 size-40 rounded-full bg-white/20 backdrop-blur-lg ring-1 ring-white/30" />
      <div className="floaty-slow absolute top-[70%] left-8 size-28 rounded-full bg-white/20 backdrop-blur-lg ring-1 ring-white/30" />
    </div>
  );
}
