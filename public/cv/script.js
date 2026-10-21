// Bouton d'impression et alerte si le contenu ne tient plus sur une page A4.

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('.page');
  const warning = document.querySelector('[data-overflow-warning]');

  document.querySelector('[data-print]').addEventListener('click', () => window.print());

  // La feuille a une hauteur fixe : si son contenu est plus haut, il serait coupé à l'impression.
  const checkOverflow = () => {
    const isOverflowing = page.scrollHeight > page.clientHeight || page.scrollWidth > page.clientWidth;

    page.classList.toggle('is-overflowing', isOverflowing);
    warning.hidden = !isOverflowing;
  };

  // Les images modifient la hauteur du contenu une fois chargées.
  window.addEventListener('load', checkOverflow);
  checkOverflow();
});
