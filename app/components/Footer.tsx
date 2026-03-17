import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative z-50 isolate text-[#b42f26]"
      style={{
        backgroundImage: `
      linear-gradient(rgba(202,220,242,0.45), rgba(202,220,242,0.45)),
      url('/iconsss/picsAzzurra2.png')
    `,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      {/* TOP */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-24 items-start">
          {/* LOGO */}
          <div className="flex items-start justify-center lg:justify-start">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 self-start lg:-mt-5">
              <Image
                src="/logocucc1x.png"
                alt="Cucciolino Pizza & Gelato logo"
                fill
                sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 240px"
                className="object-contain"
                priority
              />
            </div>
          </div>
          {/* INFO: 2 COLONNE SU MOBILE, 1 COLONNA SU LG (per restare coerente col grid a 3) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:col-span-2 lg:grid-cols-2 lg:gap-16">
            {/* LOCATION */}
            <div className="flex flex-col text-center sm:text-left">
              <h4 className="font-oswald text-2xl sm:text-3xl scale-y-[1.45] tracking-[0.16em] uppercase">
                LOCATION
              </h4>
              <p className="font-sofiapro mt-6 sm:mt-8 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                <span className="font-bold">608</span> Hampton Street <br />
                Brighton VIC <span className="font-bold">3186</span> <br />
                Australia
              </p>
            </div>

            {/* CONTACTS */}
            <div className="flex flex-col text-center sm:text-left">
              <h4 className="font-oswald text-2xl sm:text-3xl scale-y-[1.45] tracking-[0.16em] uppercase">
                CONTACTS
              </h4>

              <div className="font-sofiapro mt-6 sm:mt-8 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                <a
                  href="tel:(03) 9121 6598"
                  className="hover:underline underline-offset-4 font-bold"
                >
                  (03) 9121 6598
                </a>
                <br />
                <a
                  href="mailto:admin@cucciolino.com.au"
                  className="hover:underline underline-offset-4 break-all sm:break-normal"
                >
                  admin@cucciolino.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#b42f26]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-4 font-montserrat">
          <div className="flex flex-col items-center text-center space-y-1 leading-tight">
            <Link
              href="/privacy-policy"
              className="underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="underline underline-offset-4"
            >
              Terms & Conditions
            </Link>

            <p suppressHydrationWarning>
              © {new Date().getFullYear()} Cucciolino Pizza &amp; Gelato
            </p>

            <p className="text-[#2e3192] text-sm font-sofiapro">
              Design by{" "}
              <a
                href="https://davidecolosio.myportfolio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Davide Colosio
              </a>
            </p>

            <p className="text-[#2e3192] text-sm font-sofiapro">
              Develop{" "}
              <a
                href="https://simobaraofficial.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Simone Baravelli
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
