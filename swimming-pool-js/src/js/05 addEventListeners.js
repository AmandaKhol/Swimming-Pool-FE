searchButton.addEventListener('click', handleSearch);
formElement.addEventListener('submit', handleForm);

function addEventListenerStreets() {
  const poolStreets = document.querySelectorAll('.js-street');
  for (const street of poolStreets) {
    street.addEventListener('click', handleStreet);
  }
}

function addEventListenenerHours() {
  const streetHours = document.querySelectorAll('.js-hour');
  for (const hour of streetHours) {
    hour.addEventListener('click', handleSchedule);
  }
}
