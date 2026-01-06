export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-24">
      <div className="mx-auto max-w-5xl px-6 py-16 grid gap-12 md:grid-cols-3">
        {/* INFO */}
        <div>
          <h3 className="font-semibold mb-3">Cucciolino Pizza & Gelato</h3>
          <p className="text-sm text-zinc-600">
            Authentic Italian pizza and artisan gelato, made fresh every day.
          </p>
        </div>

        {/* HOURS */}
        <div>
          <h4 className="font-semibold mb-3">Opening Hours</h4>
          <ul className="text-sm text-zinc-600 space-y-1">
            <li>Mon – Thu: 5:00 pm – 9:30 pm</li>
            <li>Fri – Sat: 5:00 pm – 10:00 pm</li>
            <li>Sunday: 5:00 pm – 9:00 pm</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-zinc-600">
            608 Hampton Street
            <br />
            Brighton VIC 3186
            <br />
            Australia
          </p>
        </div>
      </div>

      {/* MAP */}
      <div className="w-full h-[320px]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=608%20Hampton%20Street%20Brighton%20VIC%203186&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="text-center text-xs text-zinc-500 py-6">
        © {new Date().getFullYear()} Cucciolino Pizza & Gelato
      </div>
    </footer>
  );
}
