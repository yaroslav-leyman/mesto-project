// Modal Edit
const popup = document.querySelector('.popup'); // Фон попап окна
const container = document.querySelector('.popup__container'); // Само окно
const openPopupButtons = document.querySelectorAll('.profile__button-edit'); // Кнопки для показа окна
const closePopupButton = document.querySelector('.popup__close'); // Кнопка для скрытия окна
const submitBtn = document.querySelector('.popup__button'); // Кнопка сохранить

openPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popup.classList.add('active'); // Добавляем класс 'active' для фона
      container.classList.add('active'); // И для самого окна
      popup.classList.add('popup_opened');
  });
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popup.classList.remove('popup_opened'); // Убираем активный класс с фона
  container.classList.remove('popup_opened'); // И с окна
});

function closeForm(evt) {
  evt.preventDefault();
  popup.classList.remove('popup_opened');
}
submitBtn.addEventListener('click', formSubmitHandler);

const formElement = document.querySelector('.profile');
const nameInput = document.querySelector('#heading');
const jobInput = document.querySelector('#subheading');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closeForm(evt);
}
formElement.addEventListener('submit', formSubmitHandler);


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


// проходим по массиву данных и отрисовываем карточки с помощью fetchCard()
initialCards.forEach((element) => {
  fetchCard(element);
});
const testT = {};

  function fetchCard(element) {

    let directorElement = directorTemplate.cloneNode(true);
    let photo = directorElement.querySelector('.elements__image');
      photo.src = element.link;
      photo.alt = element.name;
    directorElement.querySelector('.elements__title').textContent = element.name;

    // лайки
    directorElement.querySelector('.elements__heart').addEventListener('click', function (evt) {
      evt.target.classList.toggle('elements__heart_active');
    });

    // функция удаления карточек
    const deleteCard = directorElement.querySelector('.elements__delete');
    deleteCard.addEventListener('click', function() {
      directorElement.remove();
    });

    // Попап карточки
    photo.addEventListener('click', function () {
      popupPhoto(element);
    });

    addCard(directorElement);
  }

  function addCard(directorElement) {
    directorsList.prepend(directorElement);
  }


// photo popup
function popupPhoto(el) {

  let popPhoto = document.querySelector('.popup-card');
      popPhoto.classList.add('popup-card_opened');

  let descrPopup = popPhoto.querySelector('.popup-card__description');
  let imagePopup = popPhoto.querySelector('.popup-card__image');

  descrPopup.textContent = el.name;
  imagePopup.src = el.link;
  imagePopup.alt = el.name;
  console.log(el.link);

  let popPhotoClosed = popPhoto.querySelector('.popup-card__close');

  popPhotoClosed.addEventListener('click', () => {
    popPhoto.classList.remove('popup-card_opened');
  });
}


// Modal popup-add
const popupAdd = document.querySelector('.popup-add');
const containerAdd = document.querySelector('.popup-add__container');
const openPopupButtonsAdd = document.querySelectorAll('.profile__button-add');
const closePopupButtonAdd = document.querySelector('.popup-add__close');
const submitBtnAdd = document.querySelector('.popup-add__button');

openPopupButtonsAdd.forEach((button) => {
  button.addEventListener('click', (e) => {
      e.preventDefault();
      popupAdd.classList.add('active');
      containerAdd.classList.add('active');
      popupAdd.classList.add('popup-add_opened');
  });
});

closePopupButtonAdd.addEventListener('click',() => {
  popupAdd.classList.remove('popup-add_opened');
  containerAdd.classList.remove('popup-add_opened');
});

function closeForm(evt) {
  evt.preventDefault();
  popupAdd.classList.remove('popup-add_opened');
}
submitBtnAdd.addEventListener('click', formSubmitHandler);



//Добавляем новую карточку
const photoTemplate = document.querySelector('#elements-template').content;
function formSubmitHandler (evt) {
  evt.preventDefault();

  const photoPlaceInput = document.querySelector('#mesto');
  const photoLinkInput = document.querySelector('#link');

  const newCard = {
      name: photoPlaceInput.value,
      link: photoLinkInput.value
  };

  fetchCard(newCard);
  closeForm(evt);
}
photoTemplate.addEventListener('submit', formSubmitHandler);
