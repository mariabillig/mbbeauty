import sobrancelhas from "@/assets/galeria-sobrancelhas.jpg";
import labios from "@/assets/galeria-labios.jpg";
import estudio from "@/assets/galeria-estudio.jpg";
import detalhe from "@/assets/galeria-detalhe.jpg";

const fotos = [
  { src: sobrancelhas, alt: "Sobrancelhas com nanopigmentação, fio a fio natural", legenda: "Fio a fio" },
  { src: labios, alt: "Lábios após micropigmentação labial com cor uniforme", legenda: "Lip blush" },
  { src: estudio, alt: "Estúdio Maria Billig Beauty em tons de branco, dourado e rosa", legenda: "O estúdio" },
  { src: detalhe, alt: "Pigmentos e instrumentos utilizados nos procedimentos", legenda: "Os detalhes" },
];

export function Galeria() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {fotos.map((f, i) => (
        <figure
          key={f.legenda}
          className={`group relative overflow-hidden rounded-sm ${i % 2 === 1 ? "lg:mt-10" : ""}`}
        >
          <img
            src={f.src}
            alt={f.alt}
            width={900}
            height={1100}
            loading="lazy"
            className="aspect-[9/11] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/60 to-transparent p-4 text-xs uppercase tracking-[0.28em] text-background">
            {f.legenda}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
