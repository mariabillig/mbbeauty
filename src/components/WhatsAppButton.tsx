const WHATSAPP_CONTATO = `https://wa.me/5548988336968?text=${encodeURIComponent(
  "Olá Maria! Vim pelo site e gostaria de conversar.",
)}`;

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_CONTATO}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Maria Billig no WhatsApp"
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full border border-gold bg-background/95 px-4 py-3 shadow-elegant backdrop-blur transition-all duration-500 hover:bg-gold hover:text-primary-foreground sm:right-8 sm:bottom-8"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 text-gold transition-colors duration-500 group-hover:text-primary-foreground"
        aria-hidden
      >
        <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.96L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 1.67a8.23 8.23 0 1 1-4.2 15.3l-.3-.18-3.08.89.9-3-.2-.31a8.23 8.23 0 0 1 6.88-12.7Zm-3.53 4.1c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.95.14.19 2 3.2 4.94 4.36 2.45.97 2.95.78 3.48.73.53-.05 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.33-.28-.14-1.72-.85-1.98-.94-.27-.1-.46-.14-.65.14-.19.28-.75.94-.92 1.13-.17.19-.34.21-.62.07a7.6 7.6 0 0 1-2.23-1.38 8.4 8.4 0 0 1-1.54-1.92c-.16-.28-.02-.43.12-.57.13-.13.28-.34.43-.5.14-.17.19-.29.28-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.56-.89-2.13-.23-.56-.47-.48-.65-.49l-.74-.06Z" />
      </svg>
      <span className="hidden text-[0.65rem] uppercase tracking-[0.25em] sm:inline">
        Fale comigo
      </span>
    </a>
  );
}
