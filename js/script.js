const navbarNav = document.querySelector(".navbar-nav")
const hamburger = document.querySelector("#hamburger-menu")
const searchForm = document.querySelector(".search-form")
const searchBox = document.querySelector("#search-box")
const searchButton = document.querySelector("#search-button")
const shoppingCart = document.querySelector(".shopping-cart")
const shoppingCartButton = document.querySelector("#shopping-cart-button")
const itemDetailModal = document.querySelector("#item-detail-modal")
const itemDetailButton = document.querySelectorAll(".item-detail-button")
const closeButton = document.querySelector(".close-icon")

const modalContainer = document.querySelector(".modal-container")

// ketika hamburger menu di-klik
hamburger.onclick = () => {
  navbarNav.classList.toggle("active")
}

// klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", (e) => {
  if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
    navbarNav.classList.remove("active")
  }

  if (!searchForm.contains(e.target) && !searchButton.contains(e.target)) {
    searchForm.classList.remove("active")
  }

  if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active")
  }

  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none"
  }
})

searchButton.onclick = (e) => {
  e.preventDefault()
  searchForm.classList.toggle("active")
  if (searchForm.classList.contains("active")) {
    searchBox.focus()
  }
}

shoppingCartButton.onclick = (e) => {
  e.preventDefault()
  shoppingCart.classList.toggle("active")
}

itemDetailButton.forEach((item) => {
  item.onclick = (e) => {
    e.preventDefault()
    itemDetailModal.style.display = "flex"
  }
})

closeButton.onclick = (e) => {
  e.preventDefault()
  itemDetailModal.style.display = "none"
}
