// Dom Elements
const navigationLinks = Array.from(document.querySelectorAll(".header-navigation__link"));

navigationLinks.forEach((link) => {
	link.addEventListener("click", (event) => {
		// Delete all active class
		deleteActiveClass();
		link.classList.add("active");
	});
});


// Functions
const deleteActiveClass = () => {
	navigationLinks.forEach((item) => {
		item.classList.remove("active");
	});
};