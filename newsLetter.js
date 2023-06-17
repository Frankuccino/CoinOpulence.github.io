const mailContainer = document.querySelector('#mail-container');
const mailSubmit = document.querySelector('#mailSubmit');
const mailClose = document.querySelector('#mailClose');

function exitMail() {
    mailContainer.style.display = 'none';
}

mailClose.addEventListener('click', exitMail);

mailSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    exitMail();
})

function openMail() {
    mailContainer.style.display = 'block';
}

setTimeout(openMail, 5000);

window.addEventListener("load", function() {
  const form = document.getElementById('mailForm');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      exitMail();
    })
  });
});