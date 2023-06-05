const primaryHeader = document.querySelector(".header");
const scrollWatcher = document.querySelector("#scrollWatcher");

scrollWatcher.setAttribute("data-scroll-watcher", "");

const navObserver = new IntersectionObserver(
  (entries) => {
    primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
  }
);

navObserver.observe(scrollWatcher);

const navList = document.querySelectorAll(".pri-nav ul li a")

for (let i = 0; i < navList.length; i++) {
  navList[i].onclick = () => {
    toggleActivePage(i);
  }
}

function toggleActivePage(page) {
  navList.forEach((link) => {
    link.classList.remove("active");
  })
  navList[page].classList.add("active")
}

const container = document.querySelector(".container")
container.addEventListener('scroll', () => {
  const containerheight = document.querySelector(".container").offsetHeight;
  const scrollHeight = document.querySelector(".container").scrollTop;
  let page = Math.round(scrollHeight / containerheight);
  toggleActivePage(page);

  if (socialsList.classList.contains("socials__open")) {
    if (0 < page < 3) {
      socialsToggle();
    }
  }

  if (socialsList.classList.contains("socials__closed")) {
    if (page === 0 || page === 3) {
      socialsToggle();
    }
  }
})

const socialsList = document.querySelector(".socials__list")

function socialsToggle() {
  socialsList.classList.toggle("socials__open")
  socialsList.classList.toggle("socials__closed")
}