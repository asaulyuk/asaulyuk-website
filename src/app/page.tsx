import { HeroPortrait } from "@/components/hero-portrait";
import { SocialLinks } from "@/components/social-links";

export default function Home() {
  return (
    <main className="flex h-[100dvh] overflow-hidden bg-background text-foreground">
      <section className="relative flex h-full w-full flex-col md:flex-row">
        <div className="relative h-[38dvh] shrink-0 overflow-hidden md:absolute md:right-0 md:top-0 md:z-0 md:h-full md:w-1/2">
          <HeroPortrait />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] md:h-[55%]"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(12,10,9,0.2) 25%, rgba(12,10,9,0.65) 55%, #0c0a09 85%, #0c0a09 100%)",
            }}
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute inset-x-0 hidden translate-y-1/2 select-none text-center font-serif text-5xl leading-none tracking-widest text-foreground/15 md:bottom-[3.875rem] md:block lg:bottom-[4.375rem] lg:text-6xl"
            aria-hidden="true"
          >
            MMXXVI
          </span>
        </div>

        <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden px-6 py-5 md:w-1/2 md:px-14 md:py-10 lg:px-24 lg:py-12">
          <div className="shrink-0">
            <p className="mb-2 flex items-baseline gap-3 text-sm text-muted md:mb-3 md:text-base lg:gap-4 lg:text-lg">
              <span className="font-rutenia">Марко Асаулюк</span>
              <span aria-hidden="true">·</span>
              <span className="font-serif tracking-[0.2em]">/ ɑsɐuˈlʲuk /</span>
            </p>
            <h1 className="font-serif text-[1.65rem] font-medium leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl">
              Marko ASAULYUK
            </h1>
          </div>

          <div className="mt-6 flex min-h-0 max-w-[22rem] flex-1 flex-col justify-between font-serif text-[0.9rem] leading-relaxed text-foreground/75 md:mt-8 md:text-base lg:text-lg">
            <div
              className="h-px w-20 shrink-0 bg-accent/70 md:w-28"
              aria-hidden="true"
            />
            <p>
              My work is to understand how organizations decide and contend
              under uncertainty:
            </p>
            <p>
              Where strategy meets the harder facts of risk, of incentive, and
              of who holds the knowledge.
            </p>
            <p>
              Theoretical principles proven over decades on the one hand, and
              the data set before you on the other.
            </p>
            <p>
              My focus is on the{" "}
              <em className="italic text-foreground/90">intelligence that bridges the two</em>.
            </p>
            <p className="font-rutenia text-[0.92em] text-foreground/85">
              <span className="italic">
                «Шукайте ж найперш
                <br />
                Царства Божого...»
              </span>
              <span className="ml-2 align-middle tracking-wide text-muted">
                М 6:33
              </span>
            </p>
            <div
              className="h-px w-20 shrink-0 bg-accent/70 md:w-28"
              aria-hidden="true"
            />
          </div>

          <div className="mt-6 shrink-0 md:mt-8">
            <p className="font-serif text-xs leading-loose text-muted md:text-sm lg:text-base">
              MBA candidate,
              <br />
              San Francisco State University.
              <br />
              <svg
                viewBox="-62 8 124 224"
                fill="currentColor"
                aria-hidden="true"
                className="mr-1.5 inline-block h-[1.3em] w-auto align-[-0.25em]"
              >
                <path d="M5.985561 78.82382a104.079383 104.079383 0 0 0 14.053598 56.017033 55 55 0 0 1-13.218774 70.637179A20 20 0 0 0 0 212.5a20 20 0 0 0-6.820384-7.021968 55 55 0 0 1-13.218774-70.637179A104.079383 104.079383 0 0 0-5.98556 78.82382l-1.599642-45.260519A30.103986 30.103986 0 0 1 0 12.5a30.103986 30.103986 0 0 1 7.585202 21.063301zM5 193.624749a45 45 0 0 0 6.395675-53.75496A114.079383 114.079383 0 0 1 0 112.734179a114.079383 114.079383 0 0 1-11.395675 27.13561A45 45 0 0 0-5 193.624749V162.5H5z" />
                <path
                  id="tryzub-wing"
                  d="M27.779818 75.17546A62.64982 62.64982 0 0 1 60 27.5v145H0l-5-10a22.5 22.5 0 0 1 17.560976-21.95122l14.634147-3.292683a10 10 0 1 0-4.427443-19.503751zm5.998315 34.353887a20 20 0 0 1-4.387889 37.482848l-14.634146 3.292683A12.5 12.5 0 0 0 5 162.5h45V48.265462a52.64982 52.64982 0 0 0-12.283879 28.037802zM42 122.5h10v10H42z"
                />
                <use href="#tryzub-wing" transform="scale(-1 1)" />
              </svg>
              Ukrainian Orthodox.
            </p>
            <div className="mt-4 md:mt-5">
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
