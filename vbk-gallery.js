(() => {
  if (!window.vbkCarouselImages || window.vbkCarouselImages.length < 8) return;

  const selectedImages = [
    [window.vbkCarouselImages[6], "VBK har flyttat in i Aria, en arbetsplats som speglar framtiden"],
    [window.vbkCarouselImages[0], "Ola Kjellman berättar om hur VBK:s behov har förändrats sedan 1995"],
    [window.vbkCarouselImages[2], "Jonathan Söderqvist berättar om utsikten över älven"],
    [window.vbkCarouselImages[4], "Jonathan Söderqvist om hur arbetsplatsen förenklar samarbete i vardagen"],
    [window.vbkCarouselImages[7], "Ett fönster mot framtiden, avslutning på VBK:s LinkedIn-karusell"]
  ];

  cases.vbk.images = selectedImages;

  const previousStyle = document.querySelector("#vbk-gallery-layout");
  if (previousStyle) previousStyle.remove();

  const style = document.createElement("style");
  style.id = "vbk-gallery-layout";
  style.textContent = `
    .dialog-gallery-vbk {
      grid-template-columns: repeat(6, minmax(0, 1fr));
      gap: 1.15rem;
      align-items: start;
    }

    .dialog-gallery-vbk figure,
    .dialog-gallery-vbk figure:first-child {
      grid-column: span 2 !important;
      min-height: 0 !important;
      padding: 0 !important;
      overflow: hidden;
      aspect-ratio: 4 / 5;
      background: #f8f3ee !important;
      border-radius: 0.9rem;
    }

    .dialog-gallery-vbk figure:nth-child(4) {
      grid-column: 2 / span 2 !important;
    }

    .dialog-gallery-vbk figure:nth-child(5) {
      grid-column: 4 / span 2 !important;
    }

    .dialog-gallery-vbk img,
    .dialog-gallery-vbk figure:first-child img {
      width: 100%;
      height: 100% !important;
      max-height: none !important;
      object-fit: cover !important;
      object-position: center !important;
    }

    @media (max-width: 820px) {
      .dialog-gallery-vbk {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .dialog-gallery-vbk figure,
      .dialog-gallery-vbk figure:first-child,
      .dialog-gallery-vbk figure:nth-child(4),
      .dialog-gallery-vbk figure:nth-child(5) {
        grid-column: auto !important;
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
