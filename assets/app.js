document.querySelectorAll('[data-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.filter;
    document.querySelectorAll('.course-card').forEach((card) => {
      card.hidden = target !== 'todas' && card.dataset.periodo !== target;
    });
    document.querySelectorAll('[data-filter]').forEach((item) => item.setAttribute('aria-pressed', item === button));
  });
});
