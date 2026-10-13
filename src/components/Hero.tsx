import { useEffect, useState } from "react"
import { Phone, CheckCircle, Clock, Users, Star } from "lucide-react"
import siteConfig from "@/siteConfig"

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de um orçamento gratis para limpeza/mudança.`
  )

  return (
    <section
      id="topo"
      className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-16 bg-primary overflow-hidden"
    >
      {/* Padrão decorativo de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradiente decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cta/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/40 rounded-full blur-3xl" />

      <div className="container-page relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Selo */}
          <div
            className={`inline-flex items-center gap-2 bg-cta/20 text-cta border border-cta/30 rounded-full px-5 py-2 mb-6 fade-up ${
              visible ? "is-visible" : ""
            }`}
            style={{ animationDelay: "100ms" }}
          >
            <Clock size={16} className="animate-pulse" />
            <span className="font-poppins font-semibold text-sm">
              ⚡ Serviço em 24h • Sintra e Lisboa
            </span>
          </div>

          {/* H1 */}
          <h1
            className={`font-poppins font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 fade-up ${
              visible ? "is-visible" : ""
            }`}
            style={{ animationDelay: "200ms" }}
          >
            Limpezas pós-obra e mudanças{" "}
            <span className="text-cta">sem stress.</span> Em 24 horas.
          </h1>

          {/* Subtítulo */}
          <p
            className={`font-inter text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 fade-up ${
              visible ? "is-visible" : ""
            }`}
            style={{ animationDelay: "300ms" }}
          >
            Equipa própria, de confiança e com seguro. Deixamos a sua casa ou
            empresa brilhante e a sua mudança feita sem dores de cabeça.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-8 fade-up ${
              visible ? "is-visible" : ""
            }`}
            style={{ animationDelay: "400ms" }}
          >
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
            >
              <Phone size={22} />
              Orçamento gratis no WhatsApp
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-outline-light inline-flex"
            >
              <Phone size={20} />
              Ligar agora
            </a>
          </div>

          {/* Linha de confiança */}
          <div
            className={`flex flex-wrap justify-center gap-4 md:gap-8 text-white/70 text-sm md:text-base mb-12 fade-up ${
              visible ? "is-visible" : ""
            }`}
            style={{ animationDelay: "500ms" }}
          >
            <span className="flex items-center gap-2">
              <CheckCircle size={18} className="text-cta" />
              Orçamento gratis
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle size={18} className="text-cta" />
              Resposta rápida
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle size={18} className="text-cta" />
              Equipa própria
            </span>
          </div>

          {/* Barra de indicadores */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto fade-up ${
              visible ? "is-visible" : ""
            }`}
            style={{ animationDelay: "600ms" }}
          >
            {siteConfig.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
              >
                <div className="font-poppins font-extrabold text-2xl md:text-3xl text-cta">
                  {stat.value}
                </div>
                <div className="text-white/70 text-xs md:text-sm font-inter">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}