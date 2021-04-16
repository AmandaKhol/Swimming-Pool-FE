'use strict';

//Global variables

const centerSelect = document.querySelector('.js-select');
const formElement = document.querySelector('.js-center-form');
const searchButton = document.querySelector('.js-search');
const streetList = document.querySelector('.js-street-list');
const hoursList = document.querySelector('.js-hours');
const streetItem = document.querySelector('.js-street');

let pool = '-';
const centers = [
  {
    id: 'al',
    name: 'Aluche',
    streets: [
      {
        id: '1',
        hours: ['10:30', '12:00', '13:30'],
      },
      {
        id: '2',
        hours: ['11:00', '12:30', '14:00'],
      },
    ],
  },
  {
    id: 'ch',
    name: 'Carabanchel',
    streets: [
      { id: '3', hours: ['15:00', '16:30', '18:00'] },
      { id: '4', hours: ['15:30', '17:00', '18:30'] },
    ],
  },
  {
    id: 'vk',
    name: 'Vallecas',
    streets: [
      { id: '5', hours: ['18:30', '20:00', '21:30'] },
      { id: '6', hours: ['18:00', '19:30', '21:00'] },
    ],
  },
];

// Fetch to API TVMaze

// function getDataFromApi() {
//   fetchToApiAndRenderResults();
// }

// function fetchToApiAndRenderResults() {
//   console.log('fetch');
//   fetch('/centers.json')
//     .then((response) => response.json())
//     .then(console.log)
//     .then((data) => {
//       const centersData = data;
//       /*       for (const dataItem of showsData) {
//         shows.push(dataItem.show);
//       } */
//       /* shows = data; */

//       console.log(centersData);
//       /*       if (shows.length === 0) {
//         renderErrorMessage('no hay resultados para tu búsqueda');
//       } */
//     });
//   // .catch((error) => {
//   //   renderErrorMessage('Servicio temporalmente no disponible');
//   // });
// }

// Renders

function renderPoolStreetList(streets) {
  for (const street of streets) {
    const streetItem = createPoolStreetItem(street);
    streetList.appendChild(streetItem);
  }
}

function renderStreetHoursList(hours) {
  for (const hour of hours) {
    const hourItem = createHour(hour);
    hoursList.appendChild(hourItem);
  }
}

//HTML tags creation for each Element of the web

function createSportCenterOption(center) {
  let sportCenterOption = document.createElement('option');
  sportCenterOption.appendChild(document.createTextNode(center.name));
  sportCenterOption.value = center.id;
  return sportCenterOption;
}
function addSportCenterOption() {
  for (const center of centers) {
    const newCenter = createSportCenterOption(center);
    centerSelect.add(newCenter);
  }
  return centerSelect;
}

function createPoolStreetItem(street) {
  let streetItem = document.createElement('li');
  streetItem.classList.add('pool__street--id', 'js-street');
  streetItem.dataset.id = street.id;
  let streetItemId = document.createTextNode(street.id);
  streetItem.appendChild(streetItemId);
  return streetItem;
}

function createHour(hour) {
  const hourItem = document.createElement('li');
  hourItem.classList.add('pool__street--hour', 'js-hour');
  const hourItemText = document.createTextNode(hour);
  hourItem.appendChild(hourItemText);
  return hourItem;
}

searchButton.addEventListener('click', handleSearch);
formElement.addEventListener('submit', handleForm);

function addEventListenerStreets() {
  const poolStreets = document.querySelectorAll('.js-street');
  for (const street of poolStreets) {
    street.addEventListener('click', handleStreet);
  }
}

function handleForm(ev) {
  ev.preventDefault();
}

function handleSearch() {
  streetList.innerHTML = '';
  hoursList.innerHTML = '';
  const centerId = centerSelect.value;
  pool = centers.find((center) => center.id === centerId);
  renderPoolStreetList(pool.streets);
  addEventListenerStreets();
}

function handleStreet(ev) {
  hoursList.innerHTML = '';
  const streetId = ev.currentTarget.dataset['id'];
  const street = pool.streets.find((street) => street.id === streetId);

  const streetHours = street.hours;
  renderStreetHoursList(streetHours);
}

//Inicialization

function run() {
  /* 
  getDataFromApi(); */
  addSportCenterOption();
}

run();

//# sourceMappingURL=main.js.map
