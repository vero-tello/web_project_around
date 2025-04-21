const template = document.querySelector("#template").content;
const cards = document.querySelector(".galery");
const buttonDelete = document.querySelector(".card__delete-button");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__about");
const editButton = document.querySelector(".profile__button");
const popupElement = document.querySelector(".popup");
const popupCloseButton = popupElement.querySelector(".popup__close");
const formElement = document.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__input-name");
const jobInput = formElement.querySelector(".popup__input-job");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

initialCards.forEach((card) => {
  const clon = template.cloneNode(true);
  const image = clon.querySelector(".card__image");
  const buttonDelete = clon.querySelector(".card__delete-button");
  const name = clon.querySelector(".card__name");
  const buttonLike = clon.querySelector(".card__like-button");

  image.src = card.link;
  image.alt = card.name;
  name.textContent = card.name;

  cards.appendChild(clon);
});

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

buttonDelete.addEventListener("click", function () {
  card.remove();
});

buttonLike.addEventListener("click", () => {
  buttonLike.classList.toggle("card__like-button");
});
