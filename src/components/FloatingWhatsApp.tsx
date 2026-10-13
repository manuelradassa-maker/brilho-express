import { useState, useEffect } from "react"
import { Phone, X } from "lucide-react"
import siteConfig from "@/siteConfig"

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Mostrar após scroll para baixo
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Ocultar no mobile se a barra fixa estiver visível
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const message = encodeURIComponent(
    `Olá! Gostaria de um orçamento gratis. Nome: [Seu nome]. Serviço: [Tipo de serviço]. Localidade: [Sua localidade]. Telemóvel: [Seu telemóvel].`
  )

  if (isMobile) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {isOpen && (
        <div className="bg-white text-text-primary rounded-xl shadow-lg px-4 py-3 max-w-[260px] animate-fade-up">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-text-secondary hover:text-primary"
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
          <p className="font-poppins font-bold text-sm mb-1">
            Peça o seu orçamento gratis
          </p>
          <p className="text-xs text-text-secondary mb-3">
            Respondemos em minutos. Sem compromisso.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-white text-sm font-poppins font-semibold px-4 py-2 rounded-lg hover:bg-[#21c35a] transition-colors"
          >
            <Phone size={16} />
            Abrir WhatsApp
          </a>
        </div>
      )}

      {/* Botão flutuante */}
      <a
        href={`https://wa.me/${siteConfig.whatsapp}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        aria-expanded={isOpen}
        className={`flex items-center justify-center w-16 h-16 rounded-full bg-whatsapp text-white shadow-whatsapp transition-all duration-300 hover:scale-110 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Phone size={32} className="animate-pulse-soft" />
      </a>
    </div>
  )
}