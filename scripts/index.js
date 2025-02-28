let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__about");
let editButton = document.querySelector(".profile__button");

let popupElement = document.querySelector(".popup");
let popupCloseButton = popupElement.querySelector(".popup__close");
let formElement = document.querySelector(".popup__form");
let nameInput = formElement.querySelector(".popup__input-name");
let jobInput = formElement.querySelector(".popup__input-job");

function openPopup() {
  popupElement.classList.add("popup_open");

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  popupElement.classList.remove("popup_open");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup();
}

editButton.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleProfileFormSubmit);
