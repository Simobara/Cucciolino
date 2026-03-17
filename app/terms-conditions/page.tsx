export default function TermsAndConditions() {
  return (
    <main className="mx-auto max-w-4xl px-6 mt-10 pt-24 pb-20">
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-14">
        Terms & Conditions
      </h1>

      <div className="space-y-10 text-[15px] leading-relaxed text-[#76aad8]">
        {/* INTRO */}
        <p>
          Welcome to <strong>Cucciolino Pizza &amp; Gelato</strong>. By
          accessing or using our website, you agree to be bound by these Terms
          &amp; Conditions. If you do not agree, please do not use this website.
        </p>

        {/* 1 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Website purpose</h2>
          <p>
            1.1. This website is provided for informational purposes only,
            including displaying our menu, location, and general business
            information.
          </p>
          <p>
            1.2. We do not process orders or payments directly through this
            website.
          </p>
          <p>
            1.3. Any orders, bookings, or payments may be processed through
            third-party platforms, which operate under their own terms and
            conditions.
          </p>
        </section>

        {/* 2 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">2. Third-party services</h2>
          <p>
            2.1. Our website may contain links or integrations with third-party
            services (such as ordering or booking platforms).
          </p>
          <p>
            2.2. We are not responsible for the content, accuracy, policies, or
            practices of these third-party services.
          </p>
          <p>
            2.3. Any transactions, payments, or interactions conducted through
            third-party platforms are governed by their own terms and conditions
            and privacy policies.
          </p>
        </section>

        {/* 3 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">3. Accuracy of information</h2>
          <p>
            3.1. We aim to ensure that all information on this website is
            accurate and up to date, however we do not guarantee that all
            content is free from errors or omissions.
          </p>
          <p>
            3.2. Menu items, pricing, availability, and opening hours may change
            at any time without notice.
          </p>
        </section>

        {/* 4 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4. Intellectual property</h2>
          <p>
            4.1. All content on this website, including text, images, branding,
            and design, is the property of Cucciolino Pizza &amp; Gelato unless
            otherwise stated.
          </p>
          <p>
            4.2. You may not reproduce, distribute, or use any content without
            prior written permission.
          </p>
        </section>

        {/* 5 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5. Limitation of liability</h2>
          <p>
            5.1. To the maximum extent permitted by law, we are not liable for
            any loss, damage, or inconvenience arising from your use of this
            website.
          </p>
          <p>
            5.2. We do not guarantee that the website will always be available,
            secure, or free from errors or viruses.
          </p>
          <p>
            5.3. We are not responsible for any loss or damage resulting from
            transactions made through third-party platforms.
          </p>
        </section>

        {/* 6 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">6. Acceptable use</h2>
          <p>
            6.1. You agree to use this website only for lawful purposes and in a
            way that does not infringe the rights of others.
          </p>
          <p>
            6.2. You must not misuse the website, attempt to gain unauthorized
            access, or interfere with its operation.
          </p>
        </section>

        {/* 7 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">7. Links to other websites</h2>
          <p>
            7.1. Our website may contain links to external websites for your
            convenience.
          </p>
          <p>
            7.2. We do not endorse and are not responsible for the content or
            practices of any linked websites.
          </p>
        </section>

        {/* 8 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">8. Changes to these Terms</h2>
          <p>8.1. We may update these Terms &amp; Conditions at any time.</p>
          <p>
            8.2. Changes will take effect immediately upon being published on
            this website.
          </p>
        </section>

        {/* 9 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">9. Governing law</h2>
          <p>
            9.1. These Terms &amp; Conditions are governed by the laws of
            Victoria, Australia.
          </p>
        </section>

        {/* 10 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">10. Contact us</h2>
          <p>
            If you have any questions about these Terms &amp; Conditions, please
            contact us at:
          </p>
          <p className="pl-4">
            Cucciolino Pizza &amp; Gelato
            <br />
            608 Hampton Street
            <br />
            Brighton VIC 3186
            <br />
            Email:{" "}
            <a href="mailto:admin@cucciolino.com.au" className="underline">
              admin@cucciolino.com.au
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
