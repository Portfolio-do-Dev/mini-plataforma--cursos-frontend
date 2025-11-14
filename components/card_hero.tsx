"use client";

export default function CardHero() {
  return (
    <section 
      className="w-full h-[800px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/img_card_hero.avif')" }}
    >
      <div className="text-center px-7 max-w-7xl">
        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-8xl">
        The future of your career begins with the next line of code
        </h1>

        <p className="mt-15 text-lg font-medium text-gray-200 sm:text-xl">
          • Learn the skills the market truly demands;
        </p>
        <p className="mt-5 text-lg font-medium text-gray-200 sm:text-xl">
          • Master modern technologies and boost your career;
        </p>
        <p className="mt-5 text-lg font-medium text-gray-200 sm:text-xl">
          • Build your future with practical and applied knowledge.
        </p>

        <div className="mt-15 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-500 px-5.5 py-4.5 text-sm font-semibold text-white shadow hover:bg-indigo-400"
          >
            Get started
          </a>

          <a href="#" className="text-sm font-semibold text-white">
            Learn more →
          </a>
        </div>
      </div>
    </section>
  );
}
