//Объявления переменных
// Popup Edit
const popupEdit = document.querySelector('.popup'); // Фон попап окна
const containerEdit = document.querySelector('.popup__container'); // Само окно
const openPopupButtons = document.querySelector('.profile__button-edit'); // Кнопки для показа окна
const closePopupButton = document.querySelector('.popup__close'); // Кнопка для скрытия окна
const submitBtn = document.querySelector('.popup__button'); // Кнопка сохранить

// Profile
const formElement = document.querySelector('.profile');
const nameInput = document.querySelector('#heading');
const jobInput = document.querySelector('#subheading');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');
const profileEditForm = document.querySelector('.popup__main-container');

// Popup addCard
const popupAddCard = document.querySelector('.popup-add');
const containerAddCard = document.querySelector('.popup-add__container');
const openPopupButtonsAdd = document.querySelector('.profile__button-add');
const closePopupButtonAdd = document.querySelector('.popup-add__close');
const submitBtnAdd = document.querySelector('.popup-add__button');
const cardAddForm = document.querySelector('.popup-add__main-container');
const cardTemplate = document.querySelector('#elements-template').content;

//initial cards
const directorsList = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// проходим по массиву данных и отрисовываем карточки с помощью createCard()
initialCards.forEach((element) => {
  createCard(element);
});



// Функции
// Функция открытия попапа
function openModalWindow(modalWindow) {
  modalWindow.classList.add('popup-card_opened');
}

//Функция закрытия попапа
function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup-card_opened');
}

// Функция создания новой карточки
function createCard(card) {
  const elementCard = cardTemplate.querySelector('.new-card__element').cloneNode(true);

  elementCard.querySelector(".new-card__title").textContent = card.name;
  elementCard.querySelector(".new-card__image").src = card.link;
  elementCard.querySelector(".new-card__image").alt = card.name;

  // лайк карточки
  elementCard.querySelector('.new-card__heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('new-card__heart_active');
  });

  // удаление карточек
  const deleteCard = elementCard.querySelector('.new-card__delete');
  deleteCard.addEventListener('click', function() {
    elementCard.remove();
  });

  // зум карточки
  const photo = elementCard.querySelector('.new-card__image');
  photo.addEventListener('click', function () {
    popupPhoto(card);
  });
  elementCard.querySelector('.new-card__title').textContent = card.name;

  return elementCard;
}

// Функция загрузки карточек на сайт
function uploadCard(array, directorsList) {
  array.forEach((card) => directorsList.prepend(createCard(card)));
}

// Функция добавления карточки
function addNewCardHandler (evt) {
  evt.preventDefault();

  const photoPlaceInput = document.querySelector('#mesto');
  const photoLinkInput = document.querySelector('#link');

  directorsList.prepend(createCard({
    name: photoPlaceInput.value,
    link: photoLinkInput.value
  }));

  createCard(directorsList);
  closeModalWindow(popupAddCard);
}
cardAddForm.addEventListener('submit', addNewCardHandler);

// Функция зума карточки
function popupPhoto(el) {

  const popPhoto = document.querySelector('.popup-card');
      openModalWindow(popPhoto);

  const descrPopup = popPhoto.querySelector('.popup-card__description');
  const imagePopup = popPhoto.querySelector('.popup-card__image');

  descrPopup.textContent = el.name;
  imagePopup.src = el.link;
  imagePopup.alt = el.name;

  popPhoto.addEventListener('click', () => {
    closeModalWindow(popPhoto);
  });
}

// Функция сохранения информации в профиле
function profileEditFormSubmit (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closeModalWindow(popupEdit);
}
profileEditForm.addEventListener('submit', profileEditFormSubmit);

// Вызов фукциий
uploadCard(initialCards, directorsList);



// Обработчики
// Обработчик открытия окна добавления карточки
openPopupButtonsAdd.addEventListener('click',() => {
  openModalWindow(popupAddCard);
});

// Обработчик открытия окна редактирования
openPopupButtons.addEventListener('click',() => {
  openModalWindow(popupEdit);

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

// Обработчик закрытия окна добавления карточки
closePopupButtonAdd.addEventListener('click',() => {
  closeModalWindow(popupAddCard);
});

// Обработчик закрытия окна редактирования
closePopupButton.addEventListener('click',() => {
  closeModalWindow(popupEdit);
});
