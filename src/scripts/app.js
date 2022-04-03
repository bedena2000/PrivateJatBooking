// Dom Elements
const navigationLinks = Array.from(document.querySelectorAll(".header-navigation__link"));
const burgerMenu = document.querySelector(".header-burger");
const asideMenu = document.querySelector(".aside");
const background = document.querySelector(".background");
const headerLinkAll = document.querySelectorAll(".header-navigation__link");
const asideLinkAll = document.querySelectorAll(".aside-menu__link");

// Event Listener

navigationLinks.forEach((link) => {
	link.addEventListener("click", (event) => {
		// Delete all active class
		deleteActiveClass();
		link.classList.add("active");
	});
});

burgerMenu.addEventListener("click", (event) => {
	asideMenu.classList.toggle("aside-show");
	background.classList.toggle("background-show");
});

background.addEventListener("click", (event) => {
	asideMenu.classList.toggle("aside-show");
	background.classList.toggle("background-show");
});

// Functions
const deleteActiveClass = () => {
	navigationLinks.forEach((item) => {
		item.classList.remove("active");
	});
};

const asideShowing = () => {
	asideMenu.classList.toggle("aside-show");
	background.classList.toggle("background-show");
};

headerLinkAll.forEach((item, index) => {
	if(index === 0) {
		item.addEventListener("click", (event) => {
			event.preventDefault();
		});
	} else if (index === 1) {
		item.addEventListener("click", (event) => {
			event.preventDefault();
			document.querySelector(".book-flight").scrollIntoView({block: "center"});
		});
	} else if (index === 2) {
		item.addEventListener("click", (event) => {
			event.preventDefault();
			document.querySelector(".private-jet").scrollIntoView({block: "center"});
		});
	} else if (index === 3) {
		item.addEventListener("click", (event) => {
			event.preventDefault();
			document.querySelector(".specification").scrollIntoView({block: "center"});
		});
	} else if (index === 4) {
		item.addEventListener("click", (event) => {
			event.preventDefault();
			document.querySelector(".charters").scrollIntoView({block: "center"});
		});
	} else if (index === 5) {
		item.addEventListener("click", (event) => {
			event.preventDefault();
			document.querySelector(".membership").scrollIntoView({block: "center"});
		});
	}
});

asideLinkAll.forEach((item, index) => {
	if(index === 0) {
		item.addEventListener("click", (event) => {
			event.preventDefault();
		});
	} else if (index === 1) {
		item.addEventListener("click", (event) => {
			event.preventDefault();
			document.querySelector(".book-flight").scrollIntoView({block: "center"});
			asideShowing();
		});
	} else if (index === 2) {
		item.addEventListener("click", (event) => {
			event.preventDefault();
			document.querySelector(".private-jet").scrollIntoView({block: "center"});
			asideShowing();
		});
	} else if (index === 3) {
		item.addEventListener("click", (event) => {
			event.preventDefault();
			document.querySelector(".specification").scrollIntoView({block: "center"});
			asideShowing();
		});
	} else if (index === 4) {
		item.addEventListener("click", (event) => {
			event.preventDefault();
			document.querySelector(".charters").scrollIntoView({block: "center"});
			asideShowing();
		});
	} else if (index === 5) {
		item.addEventListener("click", (event) => {
			event.preventDefault();
			document.querySelector(".membership").scrollIntoView({block: "center"});
			asideShowing();
		});
	}
});



