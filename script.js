
  document.querySelectorAll('.dropdown').forEach(dropdown => {
  const submenu = dropdown.querySelector('.submenu');

  dropdown.addEventListener('mouseenter', () => {
    submenu.style.height = `${submenu.scrollHeight}px`;
  });

  dropdown.addEventListener('mouseleave', () => {
    submenu.style.height = '0';
  });
});

document.addEventListener("scroll", function() {
  const brancoSection = document.getElementById("background-container");
  const hamburger = document.querySelector(".hamburger");
  const brancoTop = brancoSection.getBoundingClientRect().bottom;
  if (brancoTop <= 0) {
      hamburger.classList.add("bar-black");
  } else {
      hamburger.classList.remove("bar-black"); 
  }
});


function toggleMenu(btn) {
  btn.classList.toggle("change");
  const nav = document.getElementById("fullscreenNav");
  nav.classList.toggle("open");
  nav.style.height = nav.style.height === "100%" ? "0" : "100%";
}
