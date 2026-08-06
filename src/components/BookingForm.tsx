import { useState } from "react";

// Endereço do webhook do n8n. Basta colar a URL do seu fluxo aqui
// (ou definir VITE_N8N_WEBHOOK_URL) para que os agendamentos sejam enviados.
const N8N_WEBHOOK_URL = import.meta.env["VITE_N8N_WEBHOOK_URL"] ?? "";
const WHATSAPP_NUMBER = "5500000000000";

const services = [
  "Nanopigmentação de sobrancelhas",
  "Micropigmentação labial",
  "Retoque / manutenção",
  "Avaliação personalizada",
];

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = {
      ...data,
      enviadoEm: new Date().toISOString(),
      origem: typeof window !== "undefined" ? window.location.origin : "",
    };

    setStatus("sending");

    if (N8N_WEBHOOK_URL) {
      try {
        await fetch(N8N_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
          body: JSON.stringify(payload),
        });
      } catch {
        // segue para o WhatsApp mesmo assim
      }
    }

    const texto = `Olá Maria! Gostaria de agendar.%0A%0ANome: ${data["nome"]}%0AWhatsApp: ${data["telefone"]}%0AServiço: ${data["servico"]}%0APreferência de data: ${data["data"]}%0AMensagem: ${data["mensagem"] || "-"}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, "_blank");

    setStatus("sent");
    form.reset();
  }

  const field =
    "w-full border-b border-input bg-transparent px-1 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <input name="nome" required placeholder="Seu nome" className={field} />
        <input name="telefone" required placeholder="WhatsApp" className={field} />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <select name="servico" required defaultValue="" className={field}>
          <option value="" disabled>
            Escolha o procedimento
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <input name="data" type="date" required className={field} />
      </div>
      <textarea
        name="mensagem"
        rows={3}
        placeholder="Conte um pouco sobre o que você deseja (opcional)"
        className={field}
      />
      <div className="pt-2 text-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-sm border border-gold px-10 py-4 text-xs uppercase tracking-[0.28em] text-foreground transition-all duration-500 hover:bg-gold hover:text-primary-foreground disabled:opacity-60"
        >
          {status === "sending" ? "Enviando" : "Solicitar horário"}
        </button>
        {status === "sent" && (
          <p className="mt-4 text-xs tracking-widest text-muted-foreground">
            Pedido enviado — em breve confirmo seu horário.
          </p>
        )}
      </div>
    </form>
  );
}
