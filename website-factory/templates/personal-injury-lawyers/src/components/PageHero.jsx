/**
 * PageHero — centered band, smaller than the home Hero, no form. Shared
 * shell for the six generic interior pages.
 */
export default function PageHero({ title, intro }) {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-10 md:py-14 text-center">
        <h1 className="font-heading text-3xl md:text-5xl font-extrabold leading-display-tight tracking-display mb-3">
          {title}
        </h1>
        {intro ? (
          <p className="text-silver text-base md:text-lg max-w-prose mx-auto">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}
