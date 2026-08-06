import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/lib/contato";

// Endereço do webhook do n8n. Basta colar a URL do seu fluxo aqui
// (ou definir VITE_N8N_WEBHOOK_URL) para que os agendamentos sejam enviados.
const N8N_WEBHOOK_URL = import.meta.env["VITE_N8N_WEBHOOK_URL"] ?? "";

const services = [
  "Nanopigmentação de sobrancelhas",
  "Micropigmentação labial",
  "Retoque / manutenção",
  "Avaliação personalizada",
];

const horarios = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [date, setDate] = useState<Date | undefined>();
  const [hora, setHora] = useState<string>("");

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!date || !hora) return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const dataFormatada = format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
    const payload = {
      ...data,
      data: format(date, "yyyy-MM-dd"),
      hora,
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

    const texto = `Olá Maria! Gostaria de agendar.%0A%0ANome: ${data["nome"]}%0AWhatsApp: ${data["telefone"]}%0AServiço: ${data["servico"]}%0AData: ${dataFormatada}%0AHorário: ${hora}%0AMensagem: ${data["mensagem"] || "-"}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, "_blank");

    setStatus("sent");
    form.reset();
    setHora("");
  }

  const field =
    "w-full border-b border-input bg-transparent px-1 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <input name="nome" required placeholder="Seu nome" className={field} />
        <input name="telefone" required placeholder="WhatsApp" className={field} />
      </div>
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

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-4">Escolha a data</p>
          <div className="rounded-sm border border-border bg-card p-2">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              locale={ptBR}
              disabled={(d) => d < hoje || d.getDay() === 0}
              className={cn("pointer-events-auto")}
            />
          </div>
        </div>
        <div>
          <p className="eyebrow mb-4">Horário disponível</p>
          <div className="grid grid-cols-3 gap-2">
            {horarios.map((h) => (
              <button
                key={h}
                type="button"
                onClick={() => setHora(h)}
                disabled={!date}
                className={cn(
                  "rounded-sm border border-border px-2 py-3 text-xs tracking-widest transition-colors disabled:opacity-40",
                  hora === h
                    ? "border-gold bg-gold text-primary-foreground"
                    : "hover:border-gold",
                )}
              >
                {h}
              </button>
            ))}
          </div>
          {date && (
            <p className="mt-4 text-xs tracking-widest text-muted-foreground">
              {format(date, "EEEE, dd/MM", { locale: ptBR })}
              {hora ? ` · ${hora}` : ""}
            </p>
          )}
        </div>
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
          disabled={status === "sending" || !date || !hora}
          className="inline-flex items-center justify-center rounded-sm border border-gold px-10 py-4 text-xs uppercase tracking-[0.28em] text-foreground transition-all duration-500 hover:bg-gold hover:text-primary-foreground disabled:opacity-40"
        >
          {status === "sending" ? "Enviando" : "Solicitar horário"}
        </button>
        {!date || !hora ? (
          <p className="mt-4 text-xs tracking-widest text-muted-foreground">
            Selecione data e horário para continuar
          </p>
        ) : null}
        {status === "sent" && (
          <p className="mt-4 text-xs tracking-widest text-muted-foreground">
            Pedido enviado — em breve confirmo seu horário.
          </p>
        )}
      </div>
    </form>
  );
}
