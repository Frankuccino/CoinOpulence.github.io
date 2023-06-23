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

// NEW
window.addEventListener("load", function() {
  const form = document.getElementById('mailForm');
  const message = document.querySelector('#mailMessage');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    message.classList.remove('error');
    message.innerText = "Please wait...";
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      message.innerText = "Mail registered! Thank you!";
      setTimeout(exitMail, 5000);
    })
    .catch(err => {
      message.innerText = "Mail already exists"
      message.classList.add('error');
    })
  });
});