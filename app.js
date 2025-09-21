document.addEventListener('DOMContentLoaded', () => {
  const btnInstagram = document.getElementById('btn-instagram');
  const btnLinkedin = document.getElementById('btn-linkedin');
  const btnGithub = document.getElementById('btn-github');
  const btnMail = document.getElementById('btn-mail');

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
  
});


