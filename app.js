document.addEventListener('DOMContentLoaded', () => {
  const btnInstagram = document.getElementById('btn-instagram');
  const btnLinkedin = document.getElementById('btn-linkedin');
  const btnGithub = document.getElementById('btn-github');
  const btnMail = document.getElementById('btn-mail');
  const btnwhatsapp = document.getElementById("btnwhatsapp");
  const btnllamada = document.getElementById("btnllamada");

  btnInstagram.addEventListener('click', () => {
    window.open('https://www.instagram.com/nanoantelo/', '_blank');
  });

  btnLinkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/matias-antelo/', '_blank');
  });

  btnGithub.addEventListener('click', () => {
    window.open('https://github.com/matias-antelo', '_blank');
  });
  btnMail.addEventListener('click', () => {
    window.location.href = 'contacto.html';
  });
  btnwhatsapp.addEventListener("click", () => {
    window.open("https://wa.me/541166087811", "_blank");
  });
  btnllamada.addEventListener("click", () => {
    window.location.href = "tel:+5491166087811";
  });

});


