import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#76aad8] text-[#F6E6D4] mt-32">
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-14 md:grid-cols-4">
        {/* BRAND */}
        <div className="flex flex-col gap-4">
          {/* LOGO */}
          <Image
            src="/logocucc1.png"
            alt="Cucciolino Pizza & Gelato logo"
            width={140}
            height={140}
            className="object-contain h-auto"
            priority
          />

          {/* BRAND NAME */}
          <h3 className="text-2xl font-semibold tracking-tight leading-tight">
            Cucciolino <br /> Pizza & Gelato
          </h3>
        </div>

        {/* LOCATION */}
        <div>
          <h4 className="mb-4 font-semibold tracking-wide">LOCATION</h4>

          <p className="text-sm leading-relaxed mb-4">
            608 Hampton Street <br />
            Brighton VIC 3186 <br />
            Australia
          </p>

          {/* GOOGLE MAP
          <div className="w-full h-55 rounded-xl overflow-hidden border border-white/20">
            <iframe
              title="Cucciolino Pizza & Gelato Location"
              src="INCOLLA_QUI_IL_SRC_GOOGLE_MAPS"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div> */}
        </div>

        {/* SITELINKS */}
        <div>
          <h4 className="mb-4 font-semibold tracking-wide">SITELINKS</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/#whats-on" className="hover:underline">
                What’s On
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:underline">
                Food & Drinks
              </Link>
            </li>
            {/* <li>
              <Link href="/functions" className="hover:underline">
                Functions
              </Link>
            </li> */}
            <li>
              <Link href="/order" className="hover:underline">
                Order Online
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* HOURS */}
        <div>
          <h4 className="mb-4 font-semibold tracking-wide">TRADING HOURS</h4>
          <ul className="text-sm space-y-1">
            <li>Mon – Thu: 5:00 pm – 9:30 pm</li>
            <li>Fri – Sat: 5:00 pm – 10:00 pm</li>
            <li>Sunday: 5:00 pm – 9:00 pm</li>
          </ul>
        </div>
      </div>

      {/* LEGAL BAR */}
      <div className="border-t border-white/20">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm space-y-3">
          <Link href="/privacy-policy" className="underline underline-offset-4">
            Privacy Policy
          </Link>

          <p>© {new Date().getFullYear()} Cucciolino Pizza & Gelato</p>

          <p className="text-white/80">
            Restaurant Marketing by{" "}
            <a
              href="https://simobaraofficial.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              #SimoBaraWeb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
