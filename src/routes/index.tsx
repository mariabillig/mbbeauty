import { createFileRoute, Link } from "@tanstack/react-router";
import retrato from "@/assets/maria-billig.jpg.asset.json";
import { BookingForm } from "@/components/BookingForm";
import { Galeria } from "@/components/Galeria";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  TELEFONE_EXIBICAO,
  WHATSAPP_LINK,
} from "@/lib/contato";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Maria Billig Beauty — Nanopigmentação e Micropigmentação" },
      {
        name: "description",
        content:
          "Maria Billig Beauty: nanopigmentação de sobrancelhas e micropigmentação labial com técnica refinada e mais de 8 anos de experiência.",
      },
      { property: "og:title", content: "Maria Billig Beauty" },
      {
        property: "og:description",
        content:
          "Nanopigmentação de sobrancelhas e micropigmentação labial. Beleza natural, elegante e sob medida.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const servicos = [
  {
    nome: "Nanopigmentação de Sobrancelhas",
    texto:
      "Fios desenhados um a um, respeitando o traço natural do seu rosto. Resultado leve, simétrico e discreto.",
  },
  {
    nome: "Micropigmentação Labial",
    texto:
      "Cor, contorno e uniformidade em tons pensados para a sua pele. Um lábio iluminado, todos os dias.",
  },
  {
    nome: "Manutenção & Retoque",
    texto:
      "Cuidado contínuo para preservar nitidez e cor, mantendo o resultado sempre impecável.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="surface-soft relative overflow-hidden px-6 pt-16 pb-24 md:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div>
            <p className="eyebrow">Estúdio de beleza · desde 2018</p>
            <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">
              Maria Billig
              <span className="block text-gilded italic">Beauty</span>
            </h1>
            <div className="rule-gold my-8 max-w-[7rem]" />
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Nanopigmentação de sobrancelhas e micropigmentação labial — a arte
              sutil de revelar a beleza que já é sua.
            </p>
            <a
              href="#agenda"
              className="mt-10 inline-flex items-center justify-center rounded-sm border border-gold px-10 py-4 text-xs uppercase tracking-[0.28em] transition-all duration-500 hover:bg-gold hover:text-primary-foreground"
            >
              Agendar horário
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-sm bg-blush" aria-hidden />
            <img
              src={retrato.url}
              alt="Maria Billig, especialista em nanopigmentação e micropigmentação"
              className="shadow-elegant relative w-full rounded-sm object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Quem sou</p>
          <h2 className="mt-6 text-4xl md:text-5xl">
            Cada traço carrega <span className="italic text-gilded">uma história</span>
          </h2>
          <div className="rule-gold mx-auto my-10 max-w-[5rem]" />
          <div className="space-y-6 text-base leading-loose text-muted-foreground">
            <p>
              Sou Maria Billig. Há mais de oito anos observo o mesmo instante se
              repetir: o momento em que uma mulher se olha no espelho e,
              finalmente, se reconhece.
            </p>
            <p>
              Especialista em nanopigmentação de sobrancelhas e micropigmentação
              labial, construí meu trabalho sobre a delicadeza — o traço certo, a
              cor exata, o tempo que cada rosto pede. Nada exagerado, nada igual.
            </p>
            <p>
              Meu objetivo é simples e profundo: devolver autoestima. Porque
              quando a mulher gosta do que vê, tudo ao redor muda de tom.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="surface-soft px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="eyebrow">Procedimentos</p>
            <h2 className="mt-6 text-4xl md:text-5xl">Assinatura Billig</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {servicos.map((s, i) => (
              <article
                key={s.nome}
                className="rounded-sm border border-border bg-card p-10 transition-shadow duration-500 hover:shadow-elegant"
              >
                <span className="font-display text-3xl text-gilded">
                  0{i + 1}
                </span>
                <h3 className="mt-6 text-2xl leading-snug">{s.nome}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {s.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="px-6 py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <p className="eyebrow">Agenda</p>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Reserve o seu <span className="italic text-gilded">momento</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Preencha os dados abaixo e sua solicitação será enviada
              diretamente para mim.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      <footer className="border-t border-border px-6 py-14 text-center">
        <p className="font-display text-2xl">Maria Billig Beauty</p>
        <p className="eyebrow mt-4">Sobrancelhas · Lábios · Autoestima</p>
      </footer>
    </main>
  );
}
