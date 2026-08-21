document.querySelectorAll('[data-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.filter;
    document.querySelectorAll('.course-card').forEach((card) => {
      card.hidden = target !== 'todas' && card.dataset.periodo !== target;
    });
    document.querySelectorAll('[data-filter]').forEach((item) => item.setAttribute('aria-pressed', item === button));
  });
});

if (window.location.pathname.endsWith('/aula-04.html')) {
  const nav = document.querySelector('header nav');
  if (nav) {
    const link = document.createElement('a');
    link.href = 'aula-04-cotton-hessel.html';
    link.textContent = 'Cotton + Hessel';
    nav.append(link);
  }
}
