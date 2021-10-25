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

initialCards.forEach(function (element) {
  const directorElement = directorTemplate.cloneNode(true);
  directorElement.querySelector('.elements__image').src = element.link;
  directorElement.querySelector('.elements__title').textContent = element.name;
  directorsList.append(directorElement);
});
