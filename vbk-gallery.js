(() => {
  if (!window.vbkCarouselImages || window.vbkCarouselImages.length < 8) return;

  const altTexts = [
    "VBK har flyttat in i Aria, en arbetsplats som speglar framtiden",
    "Varför VBK flyttade, modernare ytor, mer flexibilitet och mer samarbete",
    "Ola Kjellman berättar om hur VBK:s behov har förändrats sedan 1995",
    "Läget betyder allt, nära Centralstationen och kajlivet",
    "Jonathan Söderqvist berättar om utsikten över älven",
    "Hållbarhet i vardagen med återbrukade möbler och tidlösa material",
    "Jonathan Söderqvist om hur arbetsplatsen förenklar samarbete i vardagen",
    "Ett fönster mot framtiden, avslutning på VBK:s LinkedIn-karusell"
  ];

  cases.vbk.images = window.vbkCarouselImages.slice(0, 8).map((src, index) => [
    src,
    altTexts[index]
  ]);

  const previousStyle = document.querySelector("#vbk-gallery-layout");
  if (previousStyle) previousStyle.remove();

  const style = document.createElement("style");
  style.id = "vbk-gallery-layout";
  style.textContent = `
    .dialog-gallery-vbk {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 1rem;
      align-items: start;
    }

    .dialog-gallery-vbk figure,
    .dialog-gallery-vbk figure:first-child {
      grid-column: auto !important;
      min-height: 0 !important;
      padding: 0 !important;
      overflow: hidden;
      aspect-ratio: 4 / 5;
      background: #f8f3ee !important;
      border-radius: 0.9rem;
    }

    .dialog-gallery-vbk img,
    .dialog-gallery-vbk figure:first-child img {
      width: 100%;
      height: 100% !important;
      max-height: none !important;
      object-fit: cover !important;
      object-position: center !important;
    }

    @media (max-width: 1000px) {
      .dialog-gallery-vbk {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    @media (max-width: 760px) {
      .dialog-gallery-vbk {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 520px) {
      .dialog-gallery-vbk {
        grid-template-columns: 1fr;
      }
    }
  `;
  document.head.append(style);
})();
