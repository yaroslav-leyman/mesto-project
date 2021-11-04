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

// Popup addCard
const popupAddCard = document.querySelector('.popup-add');
const containerAddCard = document.querySelector('.popup-add__container');
const openPopupButtonsAdd = document.querySelector('.profile__button-add');
const closePopupButtonAdd = document.querySelector('.popup-add__close');
const submitBtnAdd = document.querySelector('.popup-add__button');

//initial cards
const directorsList = document.querySelector('.elements');
const directorTemplate = document.querySelector('.elements__element');

const deleteCards = document.querySelectorAll('.elements__element');
deleteCards.forEach( e => e.remove() ); // Удаление старых карточек

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
  modalWindow.classList.add('popup_opened');
}

//Функция закрытия попапа
function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup_opened');
}

// Функция создания новой карточки
function createCard(element) {

  const directorElement = directorTemplate.cloneNode(true);
  const photo = directorElement.querySelector('.elements__image');
    photo.src = element.link;
    photo.alt = element.name;
  directorElement.querySelector('.elements__title').textContent = element.name;

  // лайк карточки
  directorElement.querySelector('.elements__heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__heart_active');
  });

  // удаление карточек
  const deleteCard = directorElement.querySelector('.elements__delete');
  deleteCard.addEventListener('click', function() {
    directorElement.remove();
  });

  // Зум карточки
  photo.addEventListener('click', function () {
    popupPhoto(element);
  });

  addCard(directorElement);
}

function addCard(directorElement) {
  directorsList.prepend(directorElement);
}

// Функция добавления карточки в контейнер
const photoTemplate = document.querySelector('#elements-template').content;
function addNewCardHandler (evt) {
  evt.preventDefault();

  const photoPlaceInput = document.querySelector('#mesto');
  const photoLinkInput = document.querySelector('#link');

  const newCard = {
      name: photoPlaceInput.value,
      link: photoLinkInput.value
  };

  createCard(newCard);
  closePopUpForm(evt);
}
photoTemplate.addEventListener('submit', addNewCardHandler);

// Функция зума карточки
function popupPhoto(el) {

  const popPhoto = document.querySelector('.popup-card');
      popPhoto.classList.add('popup-card_opened');

  const descrPopup = popPhoto.querySelector('.popup-card__description');
  const imagePopup = popPhoto.querySelector('.popup-card__image');

  descrPopup.textContent = el.name;
  imagePopup.src = el.link;
  imagePopup.alt = el.name;

  const popPhotoClosed = popPhoto.querySelector('.popup-card__close');

  popPhotoClosed.addEventListener('click', () => {
    popPhoto.classList.remove('popup-card_opened');
  });
}
// Функция сохранения карточки
function closePopUpForm(evt) {
  evt.preventDefault();
  popupAddCard.classList.remove('popup-add_opened');
}
submitBtnAdd.addEventListener('click', addNewCardHandler);



// Обработчики
// Обработчик открытия окна добавления карточки
openPopupButtonsAdd.addEventListener('click',() => {
  popupAddCard.classList.add('popup-add_opened');
  containerAddCard.classList.add('popup-add_opened');
});

// Обработчик открытия окна редактирования
openPopupButtons.addEventListener('click',() => {
  popupEdit.classList.add('popup_opened');
  containerEdit.classList.add('popup_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  nameInput.parentNode.classList.remove('form_is-invalid');
  jobInput.parentNode.classList.remove('form_is-invalid');
});

// Обработчик закрытия окна добавления карточки
closePopupButtonAdd.addEventListener('click',() => {
  popupAddCard.classList.remove('popup-add_opened');
  containerAddCard.classList.remove('popup-add_opened');
});

// Обработчик закрытия окна редактирования
closePopupButton.addEventListener('click',() => {
  popupEdit.classList.remove('popup_opened');
  containerEdit.classList.remove('popup_opened');
});

// Обработчик работы кнопки сохранить
submitBtn.addEventListener('click', editProfileHandler);
function editProfileHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupEdit.classList.remove('popup_opened');
}
formElement.addEventListener('submit', editProfileHandler);
