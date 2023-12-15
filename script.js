// ==================MENU===================

document.addEventListener('DOMContentLoaded', function () {
  let openNav = false;
  let navBarButton = document.getElementById('navBarButton');
  let navBar = document.querySelector('.nav_bar');

  navBarButton.addEventListener('click', function () {
    openNav = !openNav;
    navBar.style.display = openNav ? 'flex' : 'none';
  });
});

// ==================ENVIAR EMAIL===================

document
  .getElementById('formulario')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    enviarEmail();
  });

async function enviarEmail() {
  try {
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('telefone').value;
    const message = document.getElementById('mensagem').value;

    const response = await fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: 'Contato Trasformation',
        name: name,
        emailClient: email,
        phone: phone,
        message: message,
      }),
    });

    if (response.ok) {
      window.location.href = 'https://obrigaado-pelo-contato.vercel.app/';
      document.getElementById('nome').value = '';
      document.getElementById('email').value = '';
      document.getElementById('telefone').value = '';
      document.getElementById('mensagem').value = '';
    } else {
      console.error('Erro ao enviar e-mail:', response.statusText);
      alert('Erro ao enviar e-mail. Por favor, tente novamente.');
    }
  } catch (error) {
    console.error('Erro inesperado:', error);
    alert('Erro inesperado. Por favor, tente novamente.');
  }
}
