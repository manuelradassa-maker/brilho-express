import { useState, useEffect } from "react"
import { Menu, X, Phone, Sparkles } from "lucide-react"
import siteConfig from "@/siteConfig"

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contacto", href: "#contacto" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Bloquear scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de um orçamento gratis.`
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#topo" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cta/20">
            <Sparkles size={22} className="text-cta" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-poppins font-bold text-lg text-white">
              Brilho & Mudanças
            </span>
            <span className="font-poppins font-extrabold text-lg text-cta">
              Express
            </span>
          </div>
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="btn-nav text-white/90 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botão CTA Desktop */}
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-cta"
        >
          Pedir Orçamento
        </a>

        {/* Botão Ligar Desktop (secundário) */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="hidden lg:inline-flex btn-nav text-white/90 hover:text-white"
        >
          <Phone size={18} />
          <span>Ligar</span>
        </a>

        {/* Menu Mobile Toggle */}
        <button
          className="md:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-white/10 animate-fade-up">
          <div className="container-page py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="btn-nav text-white/90 hover:text-white justify-start"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={20} />
              Pedir Orçamento Grátis
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-outline-light mt-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={20} />
              Ligar: {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}