(() => {
  if (!window.vbkCarouselImages || window.vbkCarouselImages.length !== 8) return;

  cases.vbk.images = window.vbkCarouselImages.map((src, index) => [
    src,
    `Bild ${index + 1} i VBK:s LinkedIn-karusell`
  ]);

  const style = document.createElement("style");
  style.textContent = `
    .dialog-gallery-vbk {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 1rem;
      align-items: start;
    }

    .dialog-gallery-vbk figure,
    .dialog-gallery-vbk figure:first-child {
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
      width: 100%;
      height: 100%;
      max-height: none;
      object-fit: cover;
      object-position: center;
    }

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
