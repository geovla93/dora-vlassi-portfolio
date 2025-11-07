import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 flex items-center justify-center min-h-svh">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
        <div className="w-full aspect-square bg-muted rounded-xl" />
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
            About
          </h1>
          <p className="not-first:mt-6 leading-7">
            Born and raised in Corfu, Greece, I was exposed from an early age to
            various languages. My linguistic journey began at the time and
            continued throughout my studies - first, at the National
            Kapodistrian University of Athens, where I studied English Language
            & Literature, and then at Manchester Metropolitan University, where
            I obtained my Master&apos;s degree in English Studies.
          </p>
          <p className="not-first:mt-6 leading-7">
            Eager to further delve into diverse linguistic paths, I pursued a
            Diploma in Translation and specialized in legal and medical
            translation. Having over 10 years of experience as a translator and
            proofreader, my aim is to connect people across linguistic and
            cultural boundaries by providing high-quality translations.
          </p>
          <ul className="flex gap-x-2 gap-y-1 flex-wrap mt-6">
            <li>
              <Badge className="py-1 px-3 text-sm">Legal Translation</Badge>
            </li>
            <li>
              <Badge className="py-1 px-3 text-sm">Life Sciences</Badge>
            </li>
            <li>
              <Badge className="py-1 px-3 text-sm">Technical Translation</Badge>
            </li>
            <li>
              <Badge className="py-1 px-3 text-sm">Literary Translation</Badge>
            </li>
            <li>
              <Badge className="py-1 px-3 text-sm">
                Proofreading & Editing
              </Badge>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
