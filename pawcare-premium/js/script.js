const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menu?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

const form = document.getElementById('bookingForm');
const toast = document.getElementById('toast');

form?.addEventListener('submit', e => {
  e.preventDefault();
  toast.classList.add('show');
  form.reset();
  setTimeout(() => toast.classList.remove('show'), 4000);
});

const dateInput = document.querySelector('input[type="date"]');
if (dateInput) {
  dateInput.min = new Date().toISOString().split('T')[0];
}
