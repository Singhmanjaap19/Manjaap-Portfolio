// <script>
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');

  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });


  const name ="Manjaap Singh FRONT-END Developer."; // Change to your name
  const nameElement = document.getElementById("animated-name");
  let i = 0;

  function typeName() {
    if (i < name.length) {
      nameElement.textContent += name.charAt(i);
      i++;
      setTimeout(typeName, 150);
    }
  }

  window.addEventListener("DOMContentLoaded", typeName);

