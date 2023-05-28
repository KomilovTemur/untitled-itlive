let thumbImagesDivs = document.querySelectorAll(
  ".product-images-wrapper .thumb-image"
);

let activeImage = document.querySelector(
  ".product-images-wrapper .preview-image"
);
let mobileNavgation = document.querySelector(".header .mobileNavgation");

let nextButton = document.querySelector(".preview-image-wrapper .arrows .next");
let prevButton = document.querySelector(".preview-image-wrapper .arrows .prev");
let currentIndex = 0;
let addBtn = document.querySelector(".add-btn");

function handleThumbsSrc() {
  thumbImagesDivs.forEach((thumb) => {
    let thumbImage = thumb.querySelector("img");

    let setOriginalSrc = thumbImage
      .getAttribute("src")
      .replace("-thumbnail", "");

    thumb.dataset.original = setOriginalSrc;
  });
}
handleThumbsSrc();

function showThumbsAsActive(thumbnails, previewActive) {
  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      let getOriginalSrc = thumb.dataset.original;
      previewActive.setAttribute("src", getOriginalSrc);
      removeClass(thumbnails, "active");
      thumb.classList.add("active");
    });
  });
}
showThumbsAsActive(thumbImagesDivs, activeImage);

function showAsActive() {
  activeImage.src = thumbImagesDivs[currentIndex].dataset.original;
  removeClass(thumbImagesDivs, "active");
  thumbImagesDivs[currentIndex].classList.add("active");
  imageNumber();
}
function nextImage() {
  currentIndex++;
  if (currentIndex >= thumbImagesDivs.length) {
    currentIndex = 0;
  }
  showAsActive();
}
function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = thumbImagesDivs.length - 1;
  }
  showAsActive(activeImage);
}

function imageNumber() {
  let currentImage = document.querySelector(
    ".preview-image-wrapper .count .current"
  );
  let totalImage = document.querySelector(
    ".preview-image-wrapper .count .total"
  );

  currentImage.textContent = currentIndex + 1;
  totalImage.textContent = thumbImagesDivs.length;
}
imageNumber();

function cloneSlider() {
  let elementToClone = document.querySelector(".product-images-wrapper");
  let clonedElement = elementToClone.cloneNode(true);
  let arrowsWrapper = clonedElement.querySelector(".arrows");
  let thumbsWrapper = clonedElement.querySelector(".thumbs-wrapper");

  arrowsWrapper.classList.remove("hide-for-desktop");
  thumbsWrapper.classList.remove("hide-for-mobile");
  showThumbsAsActive(thumbImagesDivs, activeImage);
  nextButton.addEventListener("click", () => {
    nextImage(activeImage);
  });
  prevButton.addEventListener("click", () => {
    prevImage(activeImage);
  });
}

function removeClass(array, className) {
  array.forEach((element) => {
    element.classList.remove(className);
  });
}

let toggleMenu = document.querySelector(".toggle-menu");
let closeMenu = document.querySelector(".close-menu");

toggleMenu.addEventListener("click", () => {
  openMobileMenu();

});

closeMenu.onclick = () => {
  closeMobileMenu()
}
function openMobileMenu() {
  mobileNavgation.classList.add("open");
}

function closeMobileMenu() {
  mobileNavgation.classList.remove("open");
}

nextButton.addEventListener("click", nextImage);

prevButton.addEventListener("click", prevImage);

let cart = document.querySelector(".cart");
let cartcontent = document.querySelector(".cart-content");
let cartList = document.querySelector(".cart-content .cart-list");
let inCart = document.querySelector(".cart .in-cart");

let cartListWrapper = document.querySelector(".cart-list-wrapper");

let productQuantity = document.querySelector(
  ".add-to-cart-form .product-quantity-num"
);

let plusBtn = document.querySelector(".add-to-cart-form .plus");
let minusBtn = document.querySelector(".add-to-cart-form .minus");

cart.addEventListener("click", (e) => {
  cart.classList.toggle("open");
});

plusBtn.addEventListener("click", () => {
  productQuantity.textContent++;
});

addBtn.addEventListener("click", () => {
  productQuantity.textContent = 0;
});

minusBtn.addEventListener("click", () => {
  if (productQuantity.textContent != 0) productQuantity.textContent--;
});
