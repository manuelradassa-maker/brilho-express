import { useState } from "react"
import { Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react"
import { siteConfig } from "../siteConfig"

export default function Contact() {
  const [form, setForm] = useState({ nome: "", telemovel: "", servico: "", mensagem: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Olá, sou ${form.nome}. Telefone: ${form.telemovel}. Serviço: ${form.servico}. Mensagem: ${form.mensagem}`
    const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
  }

  return (
    <section id="contacto" className="py-12 md:py-16 bg-white" aria-labelledby="contact-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-[#FF9F1C] font-semibold text-sm uppercase tracking-wider mb-2">Orçamento Grátis</span>
          <h2 id="contact-title" className="text-3xl font-bold text-[#0B2545]">Peça o seu orçamento hoje</h2>
          <p className="text-gray-600 mt-2">Resposta em minutos. Sem compromisso.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-3 bg-gray-50 rounded-2xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#0B2545] mb-1">Nome *</label>
                <input type="text" required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent" placeholder="O seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0B2545] mb-1">Telemóvel *</label>
                <input type="tel" required value={form.telemovel} onChange={(e) => setForm({ ...form, telemovel: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent" placeholder="910 000 000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0B2545] mb-1">Serviço *</label>
                <select required value={form.servico} onChange={(e) => setForm({ ...form, servico: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent">
                  <option value="">Selecione...</option>
                  <option value="Limpeza Pós-Obra">Limpeza Pós-Obra</option>
                  <option value="Limpeza Profunda">Limpeza Profunda</option>
                  <option value="Limpeza Comercial">Limpeza Comercial</option>
                  <option value="Mudança Residencial">Mudança Residencial</option>
                  <option value="Mudança Comercial">Mudança Comercial</option>
                  <option value="Montagem e Desmontagem">Montagem e Desmontagem</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0B2545] mb-1">Mensagem</label>
                <textarea rows={4} value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent resize-none" placeholder="Descreva o seu projeto..." />
              </div>
              <button type="submit" className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 rounded-lg transition flex items-center justify-center gap-2 shadow-lg">
                <Send className="w-5 h-5" /> Enviar por WhatsApp
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="bg-[#0B2545] text-white rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4">Contacto Direto</h3>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 mb-4 text-white/90 hover:text-white">
                <Phone className="w-5 h-5 text-[#FF9F1C]" />
                <div>
                  <p className="text-xs text-white/70">Telefona</p>
                  <p className="font-semibold">{siteConfig.phoneDisplay}</p>
                </div>
              </a>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mb-4 text-white/90 hover:text-white">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <div>
                  <p className="text-xs text-white/70">WhatsApp</p>
                  <p className="font-semibold">{siteConfig.whatsappDisplay}</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF9F1C] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-white/70">Morada</p>
                  <p className="font-semibold">{siteConfig.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-[#FF9F1C]" />
                <h3 className="font-bold text-[#0B2545]">Horário</h3>
              </div>
              {siteConfig.hoursDetail.map((h, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-gray-600">{h.day}</span>
                  <span className="font-medium text-[#0B2545]">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
