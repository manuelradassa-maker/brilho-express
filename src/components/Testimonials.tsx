import { Star } from "lucide-react"
import { siteConfig } from "../siteConfig"

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-gray-50" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 id="testimonials-title" className="text-3xl font-bold text-[#0B2545]">
            O que dizem os nossos clientes
          </h2>
          <p className="text-gray-600 mt-2">
            Mais de 500 serviços concluídos com avaliação 5.0
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {siteConfig.testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-[#FF9F1C] text-[#FF9F1C]" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-auto border-t border-gray-100 pt-4">
                <p className="font-semibold text-[#0B2545] text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">
                  {t.location} &middot; {t.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={`https://www.google.com/maps?q=${encodeURIComponent(
              siteConfig.name
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#0B2545] font-semibold hover:underline"
          >
            <Star className="w-4 h-4" />
            Ver avaliações no Google
          </a>
        </div>
      </div>
    </section>
  )
}