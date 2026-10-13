import { useEffect, useState } from "react"
import * as LucideIcons from "lucide-react"
import siteConfig from "@/siteConfig"

type IconName = keyof typeof LucideIcons

export default function Services() {
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
    const el = document.getElementById("servicos")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de um orçamento gratis para {serviço}.`
  )

  return (
    <section
      id="servicos"
      className="py-16 md:py-24 bg-bg-light"
    >
      <div className="container-page">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-poppins font-extrabold text-3xl md:text-5xl text-primary mb-4">
            Os nossos serviços
          </h2>
          <p className="font-inter text-text-secondary text-lg">
            Tudo o que precisa para a sua obra acabar bem e a sua mudança
            correr melhor.
          </p>
        </div>

        {/* Grelha de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {siteConfig.services.map((service, index) => {
            const IconComponent = LucideIcons[service.icon as IconName] as React.FC<{ size?: number; className?: string }>
            return (
              <div
                key={index}
                className={`card p-6 fade-up ${visible ? "is-visible" : ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-bg-light mb-4">
                  <IconComponent size={28} className="text-primary" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-primary mb-3">
                  {service.title}
                </h3>
                <p className="font-inter text-text-secondary text-base mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="badge bg-accent/20 text-accent">
                    Orçamento gratis
                  </span>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage.replace(
                      "{serviço}",
                      service.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cta font-poppins font-semibold text-sm hover:underline flex items-center gap-1"
                  >
                    Pedir orçamento →
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Como funciona */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft">
          <h3 className="font-poppins font-extrabold text-2xl md:text-3xl text-primary text-center mb-8">
            Como funciona
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                icon: "Send",
                title: "Envie fotos ou descreva",
                description: "Mande fotos do espaço ou descreva o seu projeto no WhatsApp.",
              },
              {
                step: "2",
                icon: "FileText",
                title: "Receba o orçamento",
                description: "Em minutos recebe um orçamento detalhado e sem compromisso.",
              },
              {
                step: "3",
                icon: "CalendarCheck",
                title: "Marcamos e executamos",
                description: "Agendamos para a data que precisar e executamos em 24h.",
              },
            ].map((item, i) => {
              const IconComponent = LucideIcons[item.icon as IconName] as React.FC<{ size?: number; className?: string }>
              return (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cta/10 text-cta font-poppins font-extrabold text-2xl mb-4 mx-auto">
                    {item.step}
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-bg-light mb-3 mx-auto">
                    <IconComponent size={22} className="text-primary" />
                  </div>
                  <h4 className="font-poppins font-bold text-lg text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="font-inter text-text-secondary text-sm">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}