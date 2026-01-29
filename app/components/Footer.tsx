import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-50 isolate bg-[#cadcf2] text-[#b42f26]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-14 lg:gap-40">
          <div className="relative w-52.5 h-52.5  lg:w-60 lg:h-60">
            <Image
              src="/logocucc1.png"
              alt="Cucciolino Pizza & Gelato logo"
              fill
              sizes="(max-width: 1024px) 210px, 240px"
              className="object-contain"
              priority
            />
          </div>

          <div className="flex flex-col self-start">
            <h4 className="font-oswald text-3xl scale-y-[1.45] tracking-[0.16em] uppercase">
              LOCATION
            </h4>
            <p className="font-sofiapro mt-12 text-2xl lg:text-3xl leading-snug">
              608 Hampton Street <br />
              Brighton VIC 3186 <br />
              Australia
            </p>
          </div>

          <div className="flex flex-col self-start lg:text-left">
            <h4 className="font-oswald text-3xl scale-y-[1.45] tracking-[0.16em] uppercase">
              CONTACTS
            </h4>
            <p className="font-sofiapro mt-12 text-2xl lg:text-3xl leading-snug">
              <a href="tel:+610401234567" className="hover:underline">
                +61 0401 234 567
              </a>
              <br />
              <a
                href="mailto:admin@cucciolino.com.au"
                className="hover:underline"
              >
                admin@cucciolino.com.au
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#b42f26]">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center font-montserrat">
          <div className="font-sofiapro text-sm space-y-3">
            <Link
              href="/privacy-policy"
              className="underline underline-offset-4"
            >
              Privacy Policy
            </Link>

            <p suppressHydrationWarning>
              © {new Date().getFullYear()} Cucciolino Pizza &amp; Gelato
            </p>

            <p className="text-[#2e3192]">
              Design by{" "}
              <a
                href="https://davidecolosio.myportfolio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Davide Colosio
              </a>
            </p>

            <p className="text-[#2e3192]">
              Developed by{" "}
              <a
                href="https://simobaraofficial.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
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
