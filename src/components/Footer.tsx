import { Heart, Phone, MessageCircle, MapPin, Clock } from "lucide-react"
import { siteConfig } from "../siteConfig"

export default function Footer() {
  return (
    <footer className="bg-[#0B2545] text-white/80 py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">{siteConfig.name}</h3>
            <p className="text-sm text-white/70 mb-4">
              {siteConfig.tagline}. Serviço profissional, equipa própria e orçamento gratis.
            </p>
            <div className="flex gap-3">
              <a href={`tel:${siteConfig.phone}`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF9F1C] transition">
                <Phone className="w-5 h-5" />
              </a>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-90 transition">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Serviços</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.services.map((s, i) => (
                <li key={i}><a href="#servicos" className="hover:text-[#FF9F1C]">{s.title}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-[#FF9F1C]" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[#FF9F1C]">{siteConfig.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 mt-0.5 text-[#25D366]" />
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9F1C]">{siteConfig.whatsappDisplay}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#FF9F1C]" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-[#FF9F1C]" />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Zonas Servidas</h4>
            <p className="text-sm text-white/70">{siteConfig.zones.join(", ")}</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/60">
          <p className="flex items-center justify-center gap-1">
            Feito com <Heart className="w-4 h-4 text-[#FF9F1C]" /> em Portugal
          </p>
          <p className="mt-1">© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
