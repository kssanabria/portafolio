
/*const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});*/

var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".nav" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);