import { useEffect, useState } from "react"
import { CheckCircle, Clock, Shield, MessageCircle } from "lucide-react"
import siteConfig from "@/siteConfig"

export default function About() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )
    const el = document.getElementById("sobre")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Clock,
      title: "Serviço em 24h",
      description: "Rapidez e pontualidade para o seu projeto.",
    },
    {
      icon: Shield,
      title: "Equipa própria e de confiança",
      description: "Não subcontratamos. A nossa equipa é formada e identificada.",
    },
    {
      icon: CheckCircle,
      title: "Materiais e produtos profissionais",
      description: "Usamos apenas produtos de alta qualidade.",
    },
    {
      icon: MessageCircle,
      title: "Orçamento gratis, sem compromisso",
      description: "Peça o seu orçamento pelo WhatsApp sem nenhuma obrigatoriedade.",
    },
  ]

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de falar com a equipa da Brilho & Mudanças Express.`
  )

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <div>
            <h2 className="font-poppins font-extrabold text-3xl md:text-5xl text-primary mb-6">
              Uma equipa de confiança, a trabalhar para si
            </h2>
            <p className="font-inter text-text-secondary text-lg mb-8 leading-relaxed">
              Na Brilho & Mudanças Express não subcontratamos. A nossa equipa é
              própria, formada e identificada, o que significa mais cuidado com
              os seus bens, mais pontualidade e resultados consistentes. Sabemos
              que deixar alguém entrar em sua casa exige confiança, e é por isso
              que tratamos cada espaço como se fosse nosso.
            </p>

            {/* 4 pontos fortes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-bg-light shrink-0">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-bold text-primary text-base">
                        {feature.title}
                      </h4>
                      <p className="font-inter text-text-secondary text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
            >
              <MessageCircle size={20} />
              Falar connosco no WhatsApp
            </a>
          </div>

          {/* Bloco visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 md:p-12 aspect-[4/3] flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative z-10 text-center text-white">
                <div className="text-6xl md:text-8xl font-poppins font-extrabold text-cta mb-2">
                  24h
                </div>
                <p className="font-poppins font-bold text-xl md:text-2xl mb-4">
                  Serviço rápido e eficiente
                </p>
                <p className="font-inter text-white/70 max-w-xs mx-auto">
                  Atendemos em 24h para Sintra, Lisboa e arredores. Orçamento
                  gratis e sem compromisso.
                </p>
              </div>
            </div>

            {/* Card flutuante */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-whatsapp/20">
                <Shield size={24} className="text-whatsapp" />
              </div>
              <div>
                <p className="font-poppins font-bold text-primary text-sm">
                  Equipa própria
                </p>
                <p className="font-inter text-text-secondary text-xs">
                  Seguro e garantia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}