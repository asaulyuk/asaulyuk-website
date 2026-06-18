import Image from "next/image";
import { SocialLinks } from "@/components/social-links";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="flex flex-col md:flex-row md:min-h-screen">
        <div className="relative h-[60vh] md:h-auto md:absolute md:right-0 md:top-0 md:w-1/2 md:min-h-screen">
          <Image
            src="/images/hero.jpg"
            alt="Marko Asaulyuk — illustrated portrait against the San Francisco skyline"
            fill
            priority
            className="object-cover object-top grayscale"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-40 md:h-80 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, #0a0a0a 100%)",
            }}
            aria-hidden="true"
          />
        </div>

        <div className="flex w-full md:w-1/2 flex-col justify-center px-6 py-12 md:px-20 md:py-0 lg:px-32 md:min-h-screen">
          <h1 className="font-serif text-4xl font-medium text-foreground sm:text-5xl md:text-7xl lg:text-8xl">
            Marko Asaulyuk
          </h1>
          <p className="mt-4 md:mt-6 font-sans text-sm md:text-base tracking-wide text-muted">
            / ɑsɐuˈlʲuk /
          </p>
          <div
            className="mt-6 md:mt-10 h-px w-24 md:w-32 bg-accent"
            aria-hidden="true"
          />
          <p className="mt-6 md:mt-10 max-w-xl font-sans text-base md:text-lg leading-relaxed text-foreground/90">
            Marketing has a theory problem. Not too little of it, but too much
            buried too deep to use when it matters. Kotler holds. Ogilvy holds.
            Porter holds.
            <br />
            <br />
            What&apos;s changed is the distance between knowing the frameworks
            and acting on them under pressure. The result is dashboards full of
            data and empty of direction. That gap is what I work on.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 px-6 md:px-20 lg:px-32 py-12 md:py-24">
          <div
            className="h-px w-24 md:w-32 bg-accent"
            aria-hidden="true"
          />
          <p className="mt-8 md:mt-10 font-sans text-sm md:text-base leading-loose text-muted">
            MBA candidate,
            <br />
            San Francisco State University.
            <br />
            Ukrainian Orthodox.
            <br />
            Here to build something that lasts.
          </p>
          <div className="mt-8 md:hidden">
            <SocialLinks />
          </div>
        </div>

        <div className="hidden md:flex w-1/2 flex-col items-center pt-[7.5rem] py-24">
          <span className="font-serif text-5xl md:text-6xl font-medium text-muted/20 tracking-widest">
            MMXXVI
          </span>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>
      </section>
    </main>
  );
}
