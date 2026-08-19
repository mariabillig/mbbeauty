import { createFileRoute, Link } from "@tanstack/react-router";
import { Galeria } from "@/components/Galeria";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  TELEFONE_EXIBICAO,
  WHATSAPP_LINK,
} from "@/lib/contato";

export const Route = createFileRoute("/servicos")({
  component: Servicos,
  head: () => ({
    meta: [
      { title: "Serviços — Nanopigmentação e Micropigmentação | Maria Billig" },
      {
        name: "description",
        content:
          "Entenda cada procedimento: nanopigmentação de sobrancelhas, micropigmentação labial e manutenção. Técnica, duração, cuidados e resultados.",
      },
      { property: "og:title", content: "Serviços | Maria Billig Beauty" },
      {
        property: "og:description",
        content:
          "Nanopigmentação de sobrancelhas, micropigmentação labial e manutenção — o que é cada procedimento, passo a passo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
});

const procedimentos = [
  {
    nome: "Nanopigmentação de Sobrancelhas",
    resumo:
      "Técnica de altíssima precisão que desenha fios um a um com uma nanoagulha, imitando o pelo natural.",
    texto:
      "Diferente da micropigmentação tradicional, a nanopigmentação usa agulhas ultrafinas que depositam o pigmento de forma mais superficial e delicada. O resultado são fios nítidos, com profundidade e movimento — nada de blocos de cor ou traço marcado. Antes de começar, desenhamos juntas o mapeamento facial: simetria, altura do arco e espessura ideal para o seu rosto.",
    detalhes: [
      "Duração da sessão: 2h a 2h30",
      "Durabilidade: 12 a 18 meses",
      "Retoque incluso em até 45 dias",
      "Anestésico tópico durante todo o processo",
    ],
  },
  {
    nome: "Micropigmentação Labial",
    resumo:
      "Também chamada de lip blush: devolve cor, contorno e uniformidade aos lábios com efeito de batom translúcido.",
    texto:
      "O procedimento neutraliza manchas e o excesso de melanina, harmoniza o contorno e cria a sensação de lábios mais volumosos e iluminados — sem preenchimento. A cor é escolhida a partir do seu subtom de pele e do resultado desejado, do mais natural ao mais marcante, e vai suavizando nas primeiras semanas até o tom final.",
    detalhes: [
      "Duração da sessão: 2h a 3h",
      "Durabilidade: 1 a 2 anos",
      "Cor personalizada conforme o subtom",
      "Cicatrização média de 7 dias",
    ],
  },
  {
    nome: "Manutenção & Retoque",
    resumo:
      "O cuidado periódico que mantém o traço nítido e a cor viva, respeitando o resultado original.",
    texto:
      "Com o tempo, o pigmento clareia naturalmente pela renovação celular. Na manutenção reavaliamos o desenho, corrigimos pequenas falhas e revitalizamos a cor. É uma sessão mais curta e confortável, indicada a cada 10 a 18 meses — ou antes, se você desejar um resultado mais intenso.",
    detalhes: [
      "Duração da sessão: 1h a 1h30",
      "Indicada a cada 10 a 18 meses",
      "Avaliação prévia gratuita",
      "Válida também para trabalhos feitos por mim",
    ],
  },
  {
    nome: "Avaliação Personalizada",
    resumo:
      "Uma conversa antes de qualquer agulha: entender o seu rosto, sua rotina e o que você espera.",
    texto:
      "Analiso o formato do rosto, o tipo de pele, o histórico de procedimentos e as suas referências. Saímos com a técnica ideal, a expectativa alinhada e todos os cuidados de pré e pós definidos. Sem compromisso e sem pressa.",
    detalhes: [
      "Duração: 30 a 40 minutos",
      "Mapeamento facial demonstrativo",
      "Orientações de pré e pós-procedimento",
      "Presencial ou por videochamada",
    ],
  },
];

function Servicos() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="surface-soft px-6 pt-20 pb-20 text-center">
        <p className="eyebrow">Procedimentos</p>
        <h1 className="mt-6 text-4xl md:text-5xl">
          O que é cada{" "}
          <span className="font-script text-5xl text-gilded md:text-7xl">procedimento</span>
        </h1>
        <div className="ornament mt-8 text-xs">✦</div>
        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Técnica, tempo, durabilidade e cuidados — tudo explicado com
          transparência para você escolher com segurança.
        </p>
      </section>


      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-20">
          {procedimentos.map((p, i) => (
            <article key={p.nome} className="grid gap-10 md:grid-cols-[auto_1fr]">
              <span className="font-display text-5xl text-gilded">0{i + 1}</span>
              <div>
                <h2 className="text-3xl md:text-4xl">{p.nome}</h2>
                <p className="mt-4 text-base italic leading-relaxed text-muted-foreground">
                  {p.resumo}
                </p>
                <p className="mt-6 text-sm leading-loose text-muted-foreground">
                  {p.texto}
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {p.detalhes.map((d) => (
                    <li
                      key={d}
                      className="border-l border-gold pl-4 text-xs tracking-widest text-muted-foreground"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="surface-soft px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="eyebrow">Galeria</p>
            <h2 className="mt-6 text-4xl md:text-5xl">Resultados & bastidores</h2>
          </div>
          <Galeria />
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <p className="eyebrow">Agendamento</p>
        <h2 className="mt-6 text-4xl md:text-5xl">
          Vamos reservar o seu{" "}
          <span className="font-script text-5xl text-gilded md:text-6xl">horário</span>
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            hash="agenda"
            className="inline-flex items-center justify-center rounded-sm border border-gold px-10 py-4 text-xs uppercase tracking-[0.28em] transition-all duration-500 hover:bg-gold hover:text-primary-foreground"
          >
            Abrir agenda
          </Link>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm border border-border px-10 py-4 text-xs uppercase tracking-[0.28em] transition-colors hover:border-gold"
          >
            WhatsApp {TELEFONE_EXIBICAO}
          </a>
        </div>
        <p className="mt-6 text-xs tracking-[0.28em] text-muted-foreground">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            {INSTAGRAM_HANDLE}
          </a>
        </p>
      </section>
    </main>
  );
}
