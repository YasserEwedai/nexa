import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      <section className="py-24 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">
            Training
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
            We provide professional training programs designed to develop
            technical skills, improve knowledge, and prepare individuals for
            modern technology careers.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition">
              <h2 className="text-xl font-semibold text-white mb-3">
                Web Development
              </h2>
              <p className="text-gray-400">
                Learn modern web technologies including React, Next.js,
                JavaScript, and backend development.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition">
              <h2 className="text-xl font-semibold text-white mb-3">
                Programming
              </h2>
              <p className="text-gray-400">
                Build strong programming fundamentals using modern languages and
                development practices.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition">
              <h2 className="text-xl font-semibold text-white mb-3">
                Digital Skills
              </h2>
              <p className="text-gray-400">
                Improve your technical skills and learn tools required for the
                digital industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LanguageSwitcher />
    </main>
  );
}
