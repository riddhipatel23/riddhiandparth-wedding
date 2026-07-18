import Image from 'next/image'
import { BrushStroke } from '../components/BrushStroke'

export default function StoryPage() {
  return (
    <div className="flex flex-col">

      <section className="px-6 py-24 text-center bg-white">
        <p className="text-[10px] tracking-[0.4em] uppercase mb-4 text-[var(--muted)]">How it began</p>
        <h1 className="text-7xl md:text-9xl leading-none [font-family:var(--font-script)] mb-2">
          Our Story
        </h1>
        <div className="flex justify-center mb-4">
          <BrushStroke variant="underline" className="w-56" color="#b09a78" delay={300} duration={1400} />
        </div>
        <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] opacity-60 mt-6">
          Riddhi &amp; Parth · 2017 – Forever
        </p>
      </section>

      <article className="max-w-2xl mx-auto px-6 py-20 flex flex-col gap-16">

        <div>
          <p className="text-[10px] tracking-[0.35em] uppercase mb-5 text-[var(--muted)]">Chapter One</p>
          <h2 className="text-4xl mb-4 [font-family:var(--font-script)]">The Terrible Joke</h2>
          <BrushStroke variant="underline" className="w-36 mb-8" color="#b09a78" delay={100} duration={1000} />
          <p className="text-base leading-9 mb-5 [font-family:var(--font-display)]">
            It was Diwali 2021. Somebody's cousin had thrown a party in a too-small apartment in Austin, and the diyas were lined up along the windowsill, and Parth was standing by the snacks table saying something that absolutely did not land. Riddhi laughed anyway. That was the beginning.
          </p>
          <p className="text-base leading-8 text-[var(--muted)]">
            They talked for three hours that night — about their families, about their cities, about whether dal makhani or dal tadka deserves the top spot (this remains unresolved). By the time the party ended, Parth had her number and a plan.
          </p>
        </div>

        <div className="relative h-80 overflow-hidden">
          <Image src="/photos/couple-rome.jpg" alt="Riddhi and Parth" fill className="object-cover" />
        </div>

        <div>
          <p className="text-[10px] tracking-[0.35em] uppercase mb-5 text-[var(--muted)]">Chapter Two</p>
          <h2 className="text-4xl mb-4 [font-family:var(--font-script)]">Building Something</h2>
          <BrushStroke variant="underline" className="w-36 mb-8" color="#b09a78" delay={100} duration={1000} />
          <p className="text-base leading-9 mb-5 [font-family:var(--font-display)]">
            The first year was long drives to nowhere in particular, shared playlists, and spectacularly bad pasta made in a tiny kitchen at midnight. They got hopelessly lost on a road trip through New Mexico and didn't mind even a little.
          </p>
          <p className="text-base leading-8 text-[var(--muted)]">
            It wasn't dramatic. It was the kind of love that builds quietly — in the small decisions, the comfortable silences, the way you start ordering for each other without thinking about it. By year two, they'd stopped imagining a life that didn't include the other person.
          </p>
        </div>

        <blockquote className="border-l-2 border-[var(--line)] pl-8 py-2">
          <p className="text-xl leading-9 italic text-[var(--foreground)] [font-family:var(--font-display)]">
            "I didn't know what I was looking for until I found it, and then it was obvious."
          </p>
          <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-[var(--muted)]">— Riddhi</p>
        </blockquote>

        <div>
          <p className="text-[10px] tracking-[0.35em] uppercase mb-5 text-[var(--muted)]">Chapter Three</p>
          <h2 className="text-4xl mb-4 [font-family:var(--font-script)]">Love Across the Distance</h2>
          <BrushStroke variant="underline" className="w-36 mb-8" color="#b09a78" delay={100} duration={1000} />
          <p className="text-base leading-9 mb-5 [font-family:var(--font-display)]">
            After their relationship began, life slowly took Parth and Riddhi in different directions. Riddhi moved to Los Angeles, USA, while Parth moved to Vancouver, Canada. What had started in the classrooms and computer labs of CHARUSAT now became a love story stretched across countries and cities.
          </p>
          <p className="text-base leading-8 mb-5 text-[var(--muted)]">
            Even though they were far apart, they were still connected by love, effort and the same time zone. Distance was not easy, but it never stopped them from showing up for each other. Whether it was a birthday, an anniversary or an important milestone, Parth and Riddhi always found a way to be together. They celebrated birthdays in Los Angeles, made memories at Disneyland, and never missed a single important moment in each other's lives.
          </p>
          <p className="text-base leading-8 mb-5 text-[var(--muted)]">
            Even when they were apart, they remained present for one another. Through long nights of studying, late-night calls and endless support, they became each other's comfort, motivation and home. With every visit and every goodbye, their love only grew deeper.
          </p>
          <p className="text-base leading-8 mb-5 text-[var(--muted)]">
            As they moved forward in their careers, fate slowly brought them closer in a different way. Riddhi moved to New York, and Parth moved to Toronto. After years of long distance, they were now closer than before, with only a drive or a short flight between them. Parth would take spontaneous drives to New York just to see Riddhi, while Riddhi would fly to Toronto so they could spend time together whenever possible. Even when distance tried to separate them, they always found their way back to each other.
          </p>
          <p className="text-base leading-8 text-[var(--muted)]">
            Long distance was never easy, but Parth and Riddhi handled it with patience, trust and love. From Los Angeles to Vancouver, and then from New York to Toronto, they proved that distance could test their love, but it could never weaken it. If anything, it made them stronger.
          </p>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.35em] uppercase mb-5 text-[var(--muted)]">Chapter Four</p>
          <h2 className="text-4xl mb-4 [font-family:var(--font-script)]">Rome at Golden Hour</h2>
          <BrushStroke variant="underline" className="w-36 mb-8" color="#b09a78" delay={100} duration={1000} />
          <p className="text-base leading-9 mb-5 [font-family:var(--font-display)]">
            Parth had been nervous for two weeks. He'd carried the ring through four airports and a train ride and had nearly blurted it out at dinner the night before, twice. Riddhi, for her part, suspected nothing — or claimed to suspect nothing.
          </p>
          <p className="text-base leading-8 mb-5 text-[var(--muted)]">
            It happened on a quiet evening, the kind Rome does perfectly — amber light over terracotta rooftops, a warm breeze, a view that felt like it had been arranged specifically for this moment. He asked. She said yes before he finished the sentence.
          </p>
          <p className="text-base leading-8 text-[var(--muted)]">
            They called their families from a café around the corner, split between laughing and crying, ordering a bottle of Prosecco neither of them could finish because they were too busy talking. Now, a year later, they're asking you to be there when it's official.
          </p>
        </div>

        <div className="text-center py-10 border-t border-b border-[var(--line)]">
          <p className="text-[10px] tracking-[0.35em] uppercase mb-6 text-[var(--muted)]">
            December 18 – 19, 2026 · Halol, Gujarat
          </p>
          <h3 className="text-4xl mb-4 [font-family:var(--font-script)]">Will You Join Us?</h3>
          <div className="flex justify-center mb-8">
            <BrushStroke variant="underline" className="w-32" color="#b09a78" delay={100} duration={1000} />
          </div>
          <a
            href="/rsvp"
            className="inline-block border border-[var(--foreground)] px-12 py-3 text-[10px] tracking-[0.3em] uppercase transition-all hover:bg-[var(--foreground)] hover:text-white"
          >
            RSVP Now
          </a>
        </div>

      </article>
    </div>
  )
}
