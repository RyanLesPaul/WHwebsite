const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

function closeMenu() {
  navigation.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.querySelector('span').textContent = '+';
}

menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.querySelector('span').textContent = isOpen ? '−' : '+';
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    menuToggle.focus();
  }
});

window.matchMedia('(min-width: 641px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
