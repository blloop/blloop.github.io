const openPopup = document.querySelectorAll('[data-open]');
const closePopup = document.querySelectorAll('[data-close]');
const overlay = document.getElementById('overlay');

// Open a popup
openPopup.forEach(button => {
  button.addEventListener('click', () => {
    const pop = document.querySelector(button.dataset.open);
    open_popup(pop);
  });
});

// Exit button to close
closePopup.forEach(button => {
  button.addEventListener('click', () => {
    const pop = document.querySelector(button.dataset.close);
    close_popup(pop);
  });
});

// Outside click to close
overlay.addEventListener('click', () => {
  const pop = document.querySelectorAll('.active');
  pop.forEach(i => {
    close_popup(i);
  });
});

function open_popup(element) {
  if (element == null) return
  element.classList.add('active');
  overlay.classList.add('active');
};

function close_popup(element) {
  if (element == null) return
  element.classList.remove('active');
  overlay.classList.remove('active');
};
