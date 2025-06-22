// menu
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// banner (slide)
let banners = document.querySelectorAll(".banner-area a");
let counters = document.querySelectorAll(".banner-counter-item");
let currentBanner = 0;
let bannerInterval;

counters.forEach((item, key) => {
  item.addEventListener("click", () => {
    currentBanner = key;
    showBanner(key);
    restartBannerTimer();
  });
});
restartBannerTimer();

function showBanner(n) {
  for (let banner of banners) {
    banner.classList.remove("active");
  }
  for (let counter of counters) {
    counter.classList.remove("active");
  }

  banners[n].classList.add("active");
  counters[n].classList.add("active");
}

function restartBannerTimer() {
  clearInterval(bannerInterval);
  bannerInterval = setInterval(nextBanner, 3000);
}

function nextBanner() {
  if (currentBanner + 1 >= banners.length) {
    currentBanner = 0;
  } else {
    currentBanner++;
  }
  showBanner(currentBanner);
}
