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
            <h1 className="mt-8 font-script text-6xl leading-[1.05] text-gilded md:text-8xl">
              Maria Billig
            </h1>
            <p className="mt-4 font-display text-sm uppercase tracking-[0.5em] text-muted-foreground">
              Beauty
            </p>
            <div className="rule-gold my-9 max-w-[7rem]" />
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
            <div className="frame-gold relative">
              <img
                src={retrato.url}
                alt="Maria Billig, especialista em nanopigmentação e micropigmentação"
                className="shadow-elegant w-full rounded-sm object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Sobre */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Quem sou</p>
          <h2 className="mt-6 text-4xl md:text-5xl">
            Cada traço carrega{" "}
            <span className="font-script text-5xl text-gilded md:text-6xl">uma história</span>
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
            <h2 className="mt-6 font-script text-5xl text-gilded md:text-6xl">
              Assinatura Billig
            </h2>
            <div className="ornament mt-8 text-xs">✦</div>
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
          <div className="mt-14 text-center">
            <Link
              to="/servicos"
              className="inline-flex items-center justify-center rounded-sm border border-gold px-10 py-4 text-xs uppercase tracking-[0.28em] transition-all duration-500 hover:bg-gold hover:text-primary-foreground"
            >
              Conheça cada procedimento
            </Link>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="eyebrow">Galeria</p>
            <h2 className="mt-6 text-4xl md:text-5xl">
              O olhar nos{" "}
              <span className="font-script text-5xl text-gilded md:text-6xl">detalhes</span>
            </h2>

            <div className="rule-gold mx-auto my-8 max-w-[5rem]" />
          </div>
          <div className="mt-12">
            <Galeria />
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="surface-soft px-6 py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <p className="eyebrow">Agenda</p>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Reserve o seu{" "}
              <span className="font-script text-5xl text-gilded md:text-6xl">momento</span>
            </h2>

            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Escolha a data e o horário no calendário. Sua solicitação chega
              direto para mim pelo WhatsApp {TELEFONE_EXIBICAO}.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      <footer className="border-t border-border px-6 py-16 text-center">
        <p className="font-script text-4xl text-gilded">Maria Billig Beauty</p>
        <p className="eyebrow mt-5">Sobrancelhas · Lábios · Autoestima</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs tracking-[0.24em] text-muted-foreground">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            WhatsApp {TELEFONE_EXIBICAO}
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Instagram {INSTAGRAM_HANDLE}
          </a>
        </div>
      </footer>

    </main>
  );
}
