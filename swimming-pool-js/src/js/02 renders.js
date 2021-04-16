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
