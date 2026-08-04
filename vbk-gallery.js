(() => {
  const sprite = "vbk-carousel-sprite.avif?v=20260804-1515";
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

  cases.vbk.images = altTexts.map((alt) => [sprite, alt]);

  const style = document.createElement("style");
  style.textContent = `
    .dialog-gallery-vbk {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 1rem;
      align-items: start;
    }

    .dialog-gallery-vbk figure,
    .dialog-gallery-vbk figure:first-child {
      position: relative;
      grid-column: auto;
      min-height: 0;
      padding: 0;
      overflow: hidden;
      aspect-ratio: 4 / 5;
      background: #f8f3ee !important;
      border-radius: 0.9rem;
    }

    .dialog-gallery-vbk img,
    .dialog-gallery-vbk figure:first-child img {
      position: absolute;
      width: 400%;
      height: 200%;
      max-width: none;
      max-height: none;
      object-fit: fill;
      object-position: initial;
    }

    .dialog-gallery-vbk figure:nth-child(1) img { left: 0; top: 0; }
    .dialog-gallery-vbk figure:nth-child(2) img { left: -100%; top: 0; }
    .dialog-gallery-vbk figure:nth-child(3) img { left: -200%; top: 0; }
    .dialog-gallery-vbk figure:nth-child(4) img { left: -300%; top: 0; }
    .dialog-gallery-vbk figure:nth-child(5) img { left: 0; top: -100%; }
    .dialog-gallery-vbk figure:nth-child(6) img { left: -100%; top: -100%; }
    .dialog-gallery-vbk figure:nth-child(7) img { left: -200%; top: -100%; }
    .dialog-gallery-vbk figure:nth-child(8) img { left: -300%; top: -100%; }

    @media (max-width: 1050px) {
      .dialog-gallery-vbk { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    }

    @media (max-width: 760px) {
      .dialog-gallery-vbk { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }

    @media (max-width: 480px) {
      .dialog-gallery-vbk { grid-template-columns: 1fr; }
    }
  `;
  document.head.append(style);
})();
