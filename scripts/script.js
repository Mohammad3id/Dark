nav_button = document.querySelector(".navbar-button");
nav_items = document.querySelectorAll(".navbar-item");
nav_items_box = document.querySelector(".navbar-items");

nav_button.addEventListener("click", () => {
	nav_items_box.classList.toggle("toggle");
});
