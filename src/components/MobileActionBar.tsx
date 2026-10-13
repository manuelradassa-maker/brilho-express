import siteConfig from "@/siteConfig"

export default function MobileActionBar() {
  const message = encodeURIComponent(
    `Olá! Gostaria de um orçamento gratis.`
  )

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-lg">
      <div className="grid grid-cols-2 gap-3 p-3">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center justify-center gap-2 min-h-[52px] bg-primary text-white rounded-xl font-poppins font-bold text-base hover:bg-secondary transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Ligar
        </a>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 min-h-[52px] bg-whatsapp text-white rounded-xl font-poppins font-bold text-base hover:bg-[#21c35a] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.6 7.5C17.3 5.3 15.5 3.5 13.3 3.2c-2.4-.3-4.6 1.5-4.9 3.8-.2 1.3.3 2.7 1.2 3.7l.8 1 1.4-1.4c.4-.4 1-.5 1.5-.3.4.1.8.4 1 .8.2.4.1.9-.2 1.3l-1.4 2.2c.4.2.8.4 1.2.5.5.1 1 .1 1.5 0 .5-.1 1-.4 1.3-.8l1.4-1.4c.4-.4.5-1 .3-1.5-.1-.5-.4-.8-.8-1-.4-.2-.9-.1-1.3.2l-1.4 1.4c-.5.5-1.3.6-1.9.3-.6-.3-1-.9-1-1.5 0-.6.3-1.2.8-1.6l1.4-1.4c.3-.3.4-.8.2-1.2-.1-.4-.5-.7-.9-.8-.4-.1-.8 0-1.2.2l-1.4 1.4c-.4.4-1 .5-1.5.3-.5-.1-.9-.5-1-.9-.2-.5-.1-1 .2-1.4l1.4-2.2c.3-.4.3-.9 0-1.3z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  )
}