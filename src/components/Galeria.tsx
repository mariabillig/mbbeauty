import antesDepois1 from "@/assets/antes-depois-1.jpg.asset.json";
import antesDepois2 from "@/assets/antes-depois-2.jpg.asset.json";
import antesDepois3 from "@/assets/antes-depois-3.jpg.asset.json";
import nanoDepois from "@/assets/nano-depois.jpg.asset.json";
import labial1 from "@/assets/labial-1.jpg.asset.json";
import labial2 from "@/assets/labial-2.jpg.asset.json";

const fotos = [
  {
    src: antesDepois1.url,
    alt: "Antes e depois de nanopigmentação de sobrancelhas, fios definidos",
    legenda: "Antes & depois",
  },
  {
    src: antesDepois2.url,
    alt: "Antes e depois de nanopigmentação com desenho simétrico das sobrancelhas",
    legenda: "Antes & depois",
  },
  {
    src: antesDepois3.url,
    alt: "Mapeamento facial e resultado da nanopigmentação de sobrancelhas",
    legenda: "Mapeamento & resultado",
  },
  {
    src: nanoDepois.url,
    alt: "Resultado de nanopigmentação de sobrancelhas fio a fio",
    legenda: "Fio a fio",
  },
  {
    src: labial1.url,
    alt: "Resultado de micropigmentação labial com cor uniforme e natural",
    legenda: "Lip blush",
  },
  {
    src: labial2.url,
    alt: "Lábios após micropigmentação labial com contorno definido",
    legenda: "Lip blush",
  },
];

export function Galeria() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {fotos.map((f, i) => (
        <figure
          key={`${f.legenda}-${i}`}
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
