var animalsCategory = document.querySelector("#animals-category")
var texturesCategory = document.querySelector("#textures-category")
var natureCategory = document.querySelector("#nature-category")
var animalsCategoryHeading = document.querySelector(".animals-category-heading")
var texturesCategoryHeading = document.querySelector(".textures-category-heading")
var natureCategoryHeading = document.querySelector(".nature-category-heading")
var animalsImgCards = document.querySelector(".animals-img-cards")
var texturesImgCards = document.querySelector(".textures-img-cards")
var natureImgCards = document.querySelector(".nature-img-cards")


animalsCategory.addEventListener("click",()=>{
    animalsImgCards.style.display = "grid"
    texturesImgCards.style.display = "none"
    natureImgCards.style.display = "none"
    animalsCategoryHeading.classList.add("active");
    texturesCategoryHeading.classList.remove("active");
    natureCategoryHeading.classList.remove("active");
})

texturesCategory.addEventListener("click",()=>{
    animalsImgCards.style.display = "none"
    texturesImgCards.style.display = "grid"
    natureImgCards.style.display = "none"
    animalsCategoryHeading.classList.remove("active");
    texturesCategoryHeading.classList.add("active");
    natureCategoryHeading.classList.remove("active");
})

natureCategory.addEventListener("click",()=>{
    animalsImgCards.style.display = "none"
    texturesImgCards.style.display = "none"
    natureImgCards.style.display = "grid"
    animalsCategoryHeading.classList.remove("active");
    texturesCategoryHeading.classList.remove("active");
    natureCategoryHeading.classList.add("active");
})