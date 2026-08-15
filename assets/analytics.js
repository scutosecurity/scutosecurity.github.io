/* Google Analytics 4 — Scuto Security
   Fonte única de verdade do rastreamento. Carregado por todas as páginas via
   <script defer src="/assets/analytics.js"> no <head>.
   Para trocar a propriedade ou adicionar tags, altere APENAS este arquivo. */
(function () {
  var GA_ID = 'G-LGFB9QLCM6';

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_ID);
})();
