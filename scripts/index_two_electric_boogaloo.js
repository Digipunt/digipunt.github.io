console.log('index.js loaded');

window.onload = function () {
  let locationEl = document.getElementById('location');

  // NOTIFICATIE TONEN OP BASIS VAN NOTICE.JS
  let notification = document.getElementById('notification');
  if (state == true) {
    let notificationTitle = document.createElement('h1');
    let notificationBody = document.createElement('p');
    notificationTitle.innerHTML = boodschap.titel;
    notificationBody.innerHTML = boodschap.inhoud;
    notification.appendChild(notificationTitle);
    notification.appendChild(notificationBody);
  } else {
    notification.style.display = 'none';
  }

  // LOCATIONS GENEREREN OP PAGINA VOLGENS LOCATIONS.JS
  for (let i = 0; i < locations.length; i++) {
    let locationItem = document.createElement('div');
    locationItem.classList.add('location-item');

    // NAAM
    let locationNaam = document.createElement('h1');
    locationNaam.innerHTML = locations[i].naam;
    locationItem.appendChild(locationNaam);

    // ADRES
    let locationAdres = document.createElement('p');
    locationAdres.innerHTML = locations[i].adres;
    locationItem.appendChild(locationAdres);

    // UREN

    // for loop to iterate through locations array days & hours
    for (let j = 0; j < locations[i].dagen.length; j++) {
      // Days
      let locationDay = document.createElement('h3');
      locationDay.innerHTML = locations[i].dagen[j][0];

      // Hours
      let locationHoursAM = document.createElement('p');
      locationHoursAM.innerHTML = locations[i].dagen[j][1];

      let locationHoursPM = document.createElement('p');
      locationHoursPM.innerHTML = locations[i].dagen[j][2];

      // Append
      locationItem.appendChild(locationDay);
      locationItem.appendChild(locationHoursAM);
      locationItem.appendChild(locationHoursPM);
    }
    // Info
    let info = document.createElement('p');
    locationItem.appendChild(info);

    // TOON OP KAART - LINK NAAR GOOGLE MAPS
    let locationLink = document.createElement('a');
    locationLink.href = locations[i].kaart;
    locationLink.target = '_blank';
    locationLink.innerHTML = 'toon op kaart';
    locationItem.appendChild(locationLink);

    locationEl.appendChild(locationItem);
  }

  let footerContent = document.getElementById('footerContent');
  let currentYear = new Date().getFullYear();
  let footer = document.createElement('p');
  footer.textContent = `Digipunt ${currentYear}`;
  footerContent.appendChild(footer);
};
