nav_button = document.querySelector(".navbar-button");
nav_items_box = document.querySelector(".navbar-items");

nav_button.addEventListener("click", () => {
	nav_items_box.classList.toggle("toggle");
	nav_button.classList.toggle("toggle");
});

nav_button.addEventListener(
	"click",
	() => {
		nav_items_box.classList.add("transition-duration");
	},
	{ once: true }
);
