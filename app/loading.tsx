// app/loading.tsx
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#0F5B63]">
      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
        <Image
          src="/logocucciolino.png"
          alt="Cucciolino"
          width={900}
          height={900}
          priority
          className="w-[70vw] max-w-105 h-auto"
        />
      </div>

      {/* Loader */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="h-10 w-10 rounded-full border-2 border-white/30 border-t-white animate-spin" />
        <p className="text-white/80 text-sm tracking-widest uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}
