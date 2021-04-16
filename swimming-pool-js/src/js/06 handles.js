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
  street = pool.streets.find((street) => street.id === streetId);

  const streetHours = street.hours;
  renderStreetHoursList(streetHours);
  addEventListenenerHours();
}

function handleSchedule(ev) {
  restartMessage();
  const hour = ev.currentTarget.innerHTML;
  bookingDetails.appendChild(createMessage(pool, street, hour));
}
