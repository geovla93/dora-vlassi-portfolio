import { ContactForm } from "./_components/contact-form";

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 flex items-center justify-center min-h-svh">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 py-20">
        <div>
          <ContactForm />
        </div>
        <div>
          <p className="text-right text-xl leading-7">
            I&apos;m always happy to <strong>connect</strong>. Reach out with
            questions, ideas, or project inquiries, and I&apos;ll get back to
            you as soon as possible.
          </p>

          <div className="flex flex-col gap-1 mt-10 items-end text-lg">
            <span>Dora Vlassi</span>
            <span>Athens, Greece</span>
            <span>
              Phone:{" "}
              <a
                href="tel:+306982379396"
                className="hover:underline underline-offset-4"
              >
                +30 698 23 79 396
              </a>
            </span>
            <span>
              <a
                href="mailto:dora.vl@hotmail.com"
                className="hover:underline underline-offset-4"
              >
                dora.vl@hotmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
