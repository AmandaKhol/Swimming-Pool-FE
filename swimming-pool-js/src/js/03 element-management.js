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
