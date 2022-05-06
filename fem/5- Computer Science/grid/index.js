window.onload = () => {
  const colors = ['#ff7d7d', '#ffc158', '#a6eaa6', '#94c1ff', '#c380c3'];
  const grid = document.getElementById('grid');

  for (let i = 0; i < 5; i++) {
    const item = document.createElement('div');

    setTimeout(() => {
      grid.appendChild(item);

      item.classList.add('grid-item');
      item.id = `grid-item-${i}`
      item.style.backgroundColor = colors[i];
      item.innerHTML = `<p>${i}</p>`;
    }, 1000 * (i + 1));
  }
};
