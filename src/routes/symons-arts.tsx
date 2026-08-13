import { createFileRoute } from "@tanstack/react-router";
import caneca from "@/assets/symons-hero-caneca.jpg";
import camiseta from "@/assets/symons-camiseta.jpg";
import boneGarrafa from "@/assets/symons-bone-garrafa.jpg";
import acessorios from "@/assets/symons-acessorios.jpg";
import atelie from "@/assets/symons-atelie.jpg";

export const Route = createFileRoute("/symons-arts")({
  component: SymonsArts,
  head: () => ({
    meta: [
      { title: "Symon's Arts — Canecas e Brindes Personalizados Premium" },
      {
        name: "description",
        content:
          "Symon's Arts personaliza canecas, camisetas, bonés, garrafinhas, canetas, mousepads e chaveiros com acabamento premium. Peça única ou brinde corporativo.",
      },
      { property: "og:title", content: "Symon's Arts — Personalizados Premium" },
      {
        property: "og:description",
        content:
          "Canecas, camisetas, bonés, garrafinhas, canetas, mousepads e chaveiros personalizados com acabamento de alto padrão.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/symons-arts" }],
  }),
});

const WHATSAPP_NUMBER = "5548988336968";
const WHATSAPP =
  "https://wa.me/" + WHATSAPP_NUMBER +
  "?text=" +
  encodeURIComponent("Olá Symon's Arts! Gostaria de um orçamento de personalizados.");

const produtos = [
  {
    nome: "Canecas Personalizadas",
    tag: "Best seller",
    texto:
      "Cerâmica premium 325ml, sublimação total ou aplicação em dourado. Versões branca, preta interna, mágica e mate.",
    detalhes: ["Cerâmica AAA 325ml", "Sublimação HD 360°", "Apta micro-ondas e lava-louças"],
    img: caneca,
  },
  {
    nome: "Camisetas Personalizadas",
    tag: "Vestuário",
    texto:
      "Malha penteada 30.1 com DTF ou silk de alta durabilidade. Do uniforme de equipe à coleção autoral.",
    detalhes: ["Malha penteada 30.1", "DTF, silk ou bordado", "Do PP ao GG2 · infantil e baby look"],
    img: camiseta,
  },
  {
    nome: "Bonés & Garrafas",
    tag: "Linha diária",
    texto:
      "Bonés com bordado computadorizado e garrafas térmicas em inox com gravação a laser permanente.",
    detalhes: ["Bordado 3D ou plano", "Inox 500ml parede dupla", "Gravação a laser que não sai"],
    img: boneGarrafa,
  },
  {
    nome: "Mesa & Escritório",
    tag: "Corporativo",
    texto:
      "Mousepads costurados, canetas metálicas gravadas e chaveiros em acrílico, metal ou couro sintético.",
    detalhes: ["Mousepad speed 3mm", "Caneta metal com laser", "Chaveiro metal, acrílico ou couro"],
    img: acessorios,
  },
];

const catalogo = [
  { nome: "Caneca cerâmica", nota: "325ml · branca, preta ou mágica" },
  { nome: "Caneca inox térmica", nota: "Mantém 6h quente" },
  { nome: "Camiseta", nota: "DTF, silk ou bordado" },
  { nome: "Moletom & regata", nota: "Peso pleno, unissex" },
  { nome: "Boné", nota: "Aba curva ou reta, bordado" },
  { nome: "Garrafinha squeeze", nota: "Tritan ou inox" },
  { nome: "Caneta metálica", nota: "Gravação a laser" },
  { nome: "Mousepad", nota: "Retangular ou gamer XL" },
  { nome: "Chaveiro", nota: "Metal, acrílico ou couro" },
  { nome: "Ecobag", nota: "Algodão cru 100%" },
  { nome: "Almofada", nota: "Fronha + enchimento" },
  { nome: "Kit presente", nota: "Caixa rígida montada" },
];

const processo = [
  {
    passo: "01",
    titulo: "Briefing",
    texto: "Você conta a ideia, o volume e a data. Em até 2h devolvemos um orçamento fechado.",
  },
  {
    passo: "02",
    titulo: "Arte",
    texto: "Nosso estúdio cria ou ajusta o layout em alta resolução e envia o mockup para aprovação.",
  },
  {
    passo: "03",
    titulo: "Produção",
    texto: "Impressão, prensa e gravação feitas na casa, com conferência peça por peça.",
  },
  {
    passo: "04",
    titulo: "Entrega",
    texto: "Embalagem protegida, envio para todo o Brasil ou retirada no ateliê.",
  },
];

const diferenciais = [
  { titulo: "Cor fiel", texto: "Perfil de cor calibrado: o vermelho da sua marca sai vermelho." },
  { titulo: "Sem pedido mínimo", texto: "Uma peça única tem o mesmo cuidado de um lote de mil." },
  { titulo: "Arte inclusa", texto: "Ajuste de layout e mockup sem custo extra no orçamento." },
  { titulo: "Prazo real", texto: "Data combinada é data cumprida — inclusive em urgências." },
];

const depoimentos = [
  {
    texto:
      "Fizemos 300 canecas para o evento anual. Acabamento impecável e chegou dois dias antes do prazo.",
    autor: "Renata M.",
    cargo: "Marketing · Grupo Vértice",
  },
  {
    texto:
      "Pedi uma camiseta única de presente e me trataram como se fosse o maior pedido do mês.",
    autor: "Diego A.",
    cargo: "Cliente",
  },
  {
    texto:
      "Kits de boas-vindas para os novos colaboradores: caneca, caneta, chaveiro e ecobag. Virou padrão da empresa.",
    autor: "Camila S.",
    cargo: "RH · Nortec",
  },
];

const faq = [
  {
    q: "Qual o prazo de produção?",
    a: "De 2 a 5 dias úteis para pedidos pequenos e de 7 a 12 dias úteis para lotes corporativos, contados da aprovação da arte.",
  },
  {
    q: "Existe quantidade mínima?",
    a: "Não. Produzimos desde uma peça única até tiragens de milhares de unidades.",
  },
  {
    q: "Preciso enviar a arte pronta?",
    a: "Não é obrigatório. Se você tiver o arquivo, ótimo; se não, nosso estúdio desenvolve o layout junto com você.",
  },
  {
    q: "Vocês entregam fora da cidade?",
    a: "Sim, enviamos para todo o Brasil com embalagem reforçada e código de rastreio.",
  },
];

function SymonsArts() {
  return (
    <div className="theme-symons min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <a href="#topo" className="font-brand text-xl tracking-[0.14em]">
            SYMON<span className="text-crimson">'</span>S ARTS
          </a>
          <div className="hidden items-center gap-7 text-[0.66rem] uppercase tracking-[0.26em] text-muted-foreground md:flex">
            <a href="#produtos" className="transition-colors hover:text-foreground">Produtos</a>
            <a href="#processo" className="transition-colors hover:text-foreground">Processo</a>
            <a href="#catalogo" className="transition-colors hover:text-foreground">Catálogo</a>
            <a href="#contato" className="transition-colors hover:text-foreground">Contato</a>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-gold px-5 py-2 text-[0.62rem] uppercase tracking-[0.24em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Orçamento
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="topo" className="grain relative overflow-hidden px-6 pt-20 pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-crimson/10 blur-[120px]"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-[0.66rem] uppercase tracking-[0.34em] text-muted-foreground">
              Ateliê de personalizados · desde o primeiro traço
            </p>
            <h1 className="mt-7 text-[3.2rem] leading-[0.92] sm:text-7xl">
              Sua marca
              <span className="block text-gilded">impressa</span>
              <span className="block">
                em cada <span className="text-crimson">detalhe</span>
              </span>
            </h1>
            <div className="hairline-crimson my-9 max-w-[10rem]" />
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              Canecas, camisetas, bonés, garrafinhas, canetas, mousepads e chaveiros
              personalizados com acabamento de alto padrão. Da peça única ao brinde
              corporativo — tudo produzido, conferido e embalado por nós.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-crimson px-9 py-4 text-[0.68rem] uppercase tracking-[0.26em] text-foreground transition-opacity hover:opacity-85"
              >
                Pedir orçamento
              </a>
              <a
                href="#produtos"
                className="rounded-sm border border-border px-9 py-4 text-[0.68rem] uppercase tracking-[0.26em] transition-colors hover:border-gold hover:text-gold"
              >
                Ver produtos
              </a>
            </div>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["+12mil", "peças entregues"],
                ["48h", "produção expressa"],
                ["1", "peça de pedido mínimo"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-brand text-3xl text-gilded">{n}</dt>
                  <dd className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-x-6 bottom-4 top-10 rounded-sm border border-gold/25"
            />
            <img
              src={caneca}
              alt="Caneca preta personalizada com monograma dourado"
              width={1408}
              height={1600}
              loading="eager"
              className="shadow-elegant relative w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border py-4">
        <div className="flex gap-10 whitespace-nowrap px-6 text-[0.66rem] uppercase tracking-[0.34em] text-muted-foreground">
          {[
            "Canecas",
            "Camisetas",
            "Bonés",
            "Garrafinhas",
            "Canetas",
            "Mousepads",
            "Chaveiros",
            "Ecobags",
            "Kits corporativos",
          ].map((item) => (
            <span key={item} className="flex items-center gap-10">
              {item}
              <span className="text-crimson">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Sobre */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
          <img
            src={atelie}
            alt="Ateliê da Symon's Arts com prensa térmica e impressora de sublimação"
            width={1600}
            height={1000}
            loading="lazy"
            className="w-full rounded-sm border border-border object-cover"
          />
          <div>
            <p className="text-[0.66rem] uppercase tracking-[0.34em] text-muted-foreground">
              O ateliê
            </p>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Arte que <span className="text-gilded">se usa</span>
            </h2>
            <div className="hairline-crimson my-8 max-w-[8rem]" />
            <div className="space-y-5 text-sm leading-loose text-muted-foreground">
              <p>
                A Symon's Arts nasceu de uma obsessão simples: transformar objetos comuns
                em peças que as pessoas fazem questão de usar todo dia. Uma caneca não é só
                uma caneca — é a primeira coisa que alguém segura de manhã.
              </p>
              <p>
                Trabalhamos com sublimação, DTF, bordado computadorizado e gravação a laser,
                tudo dentro de casa. Isso significa controle total de cor, de acabamento e
                de prazo — sem intermediário, sem surpresa.
              </p>
              <p>
                Preto, branco e um traço de vermelho: é assim que enxergamos design. Pouco
                ruído, muito impacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="border-y border-border px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[0.66rem] uppercase tracking-[0.34em] text-muted-foreground">
              Linhas
            </p>
            <h2 className="mt-6 text-4xl md:text-5xl">O que produzimos</h2>
            <div className="hairline-crimson mt-8 max-w-[8rem]" />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {produtos.map((p) => (
              <article
                key={p.nome}
                className="group overflow-hidden rounded-sm border border-border bg-card transition-colors duration-500 hover:border-gold/50"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.nome}
                    width={1000}
                    height={1200}
                    loading="lazy"
                    className="aspect-[5/4] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="text-[0.6rem] uppercase tracking-[0.28em] text-crimson">
                    {p.tag}
                  </span>
                  <h3 className="mt-4 text-2xl">{p.nome}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
                  <ul className="mt-6 space-y-2 border-t border-border pt-5 text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {p.detalhes.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <span className="mt-[0.35rem] block h-1 w-1 shrink-0 bg-gold" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[0.66rem] uppercase tracking-[0.34em] text-muted-foreground">
              Catálogo completo
            </p>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Tudo pode ser <span className="text-gilded">seu</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {catalogo.map((c) => (
              <div
                key={c.nome}
                className="group bg-card p-7 transition-colors duration-300 hover:bg-muted"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg">{c.nome}</h3>
                  <span className="text-crimson opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </div>
                <p className="mt-2 text-xs tracking-[0.08em] text-muted-foreground">{c.nota}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section id="processo" className="border-y border-border px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[0.66rem] uppercase tracking-[0.34em] text-muted-foreground">
              Como funciona
            </p>
            <h2 className="mt-6 text-4xl md:text-5xl">Do briefing à entrega</h2>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {processo.map((p) => (
              <div key={p.passo} className="border-t border-border pt-6">
                <span className="font-brand text-4xl text-crimson">{p.passo}</span>
                <h3 className="mt-4 text-xl">{p.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[0.66rem] uppercase tracking-[0.34em] text-muted-foreground">
              Por que a Symon's
            </p>
            <h2 className="mt-6 text-4xl leading-tight md:text-5xl">
              Padrão de <span className="text-gilded">estúdio</span>
            </h2>
            <div className="hairline-crimson mt-8 max-w-[8rem]" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {diferenciais.map((d) => (
              <div key={d.titulo} className="rounded-sm border border-border bg-card p-7">
                <h3 className="text-xl">{d.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporativo */}
      <section className="border-y border-border px-6 py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="text-[0.66rem] uppercase tracking-[0.34em] text-crimson">
              Para empresas
            </p>
            <h2 className="mt-5 text-3xl md:text-4xl">Kits corporativos e brindes de evento</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Onboarding de colaboradores, feiras, congressos e campanhas internas.
              Montamos o kit completo — caneca, caneta, chaveiro, ecobag e camiseta —
              embalado em caixa rígida com a identidade da sua marca.
            </p>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-sm border border-gold px-9 py-4 text-[0.68rem] uppercase tracking-[0.26em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Falar com o comercial
          </a>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[0.66rem] uppercase tracking-[0.34em] text-muted-foreground">
              Clientes
            </p>
            <h2 className="mt-6 text-4xl md:text-5xl">Quem já vestiu a ideia</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {depoimentos.map((d) => (
              <figure key={d.autor} className="rounded-sm border border-border bg-card p-8">
                <span className="font-brand text-4xl text-crimson">“</span>
                <blockquote className="mt-2 text-sm leading-loose text-muted-foreground">
                  {d.texto}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-[0.64rem] uppercase tracking-[0.22em]">
                  {d.autor}
                  <span className="block text-muted-foreground">{d.cargo}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border px-6 py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-[0.66rem] uppercase tracking-[0.34em] text-muted-foreground">
              Dúvidas
            </p>
            <h2 className="mt-6 text-4xl">Perguntas frequentes</h2>
          </div>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {faq.map((f) => (
              <details key={f.q} className="group px-1 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base">
                  {f.q}
                  <span className="text-crimson transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="grain relative overflow-hidden px-6 py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-crimson/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[0.66rem] uppercase tracking-[0.34em] text-muted-foreground">
            Vamos criar
          </p>
          <h2 className="mt-6 text-4xl leading-tight md:text-6xl">
            Conte a ideia.
            <span className="block text-gilded">A gente imprime.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Envie o modelo, a quantidade e a data. Respondemos com orçamento fechado e
            mockup da arte no mesmo dia.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-crimson px-10 py-4 text-[0.68rem] uppercase tracking-[0.26em] text-foreground transition-opacity hover:opacity-85"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/symonsarts"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-border px-10 py-4 text-[0.68rem] uppercase tracking-[0.26em] transition-colors hover:border-gold hover:text-gold"
            >
              @symonsarts
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="font-brand text-lg tracking-[0.14em]">
            SYMON<span className="text-crimson">'</span>S ARTS
          </p>
          <p className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
            Canecas · Camisetas · Bonés · Garrafinhas · Canetas · Mousepads · Chaveiros
          </p>
        </div>
      </footer>
    </div>
  );
}
