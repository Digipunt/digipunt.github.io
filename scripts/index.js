console.log('index loaded');
console.log(workshopList);

window.onload = function () {
  let workshopEl = document.getElementById('workshop');
  let locationEl = document.getElementById('location');

  // WORKSHOPS GENEREREN OP PAGINA VOLGENS SCRIPTS/WORKSHOPS.JS
  for (let i = 0; i < workshopList.length; i++) {
    // WORKSHOP ITEM AANMAKEN
    let workshopItem = document.createElement('div');
    workshopItem.classList.add('workshop-item');

    // TITEL WORKSHOP
    let workshopTitel = document.createElement('h1');
    workshopTitel.innerHTML = workshopList[i].titel;
    workshopItem.appendChild(workshopTitel);

    // DATUM WORKSHOP
    let workshopDatum = document.createElement('p');
    workshopDatum.innerHTML = workshopList[i].datum;
    workshopItem.appendChild(workshopDatum);

    // TIJDSTIP WORKSHOP
    let workshopTijd = document.createElement('p');
    workshopTijd.innerHTML = workshopList[i].tijd;
    workshopItem.appendChild(workshopTijd);

    // BUTTONS DIV
    let buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons-div');

    // LINK INSCHRIJVING
    let workshopInschrijving = document.createElement('a');
    workshopInschrijving.href = workshopList[i].inschrijving;
    workshopInschrijving.innerHTML = 'nu inschrijven';
    workshopInschrijving.classList.add('inschrijven');
    // buttonsDiv.appendChild(workshopInschrijving);

    let kerstBoodschap = document.createElement('p');
    kerstBoodschap.innerHTML = `Dierbare klanten, graag zijn we u van dienst met ons gans Ateljeevzw Digipunten team. We wensen jullie fijne feestdagen toe. En staan ook in 2023 voor jullie klaar met hulp, advies en ondersteuning bij al jullie digitale vragen.
      <br />
      <br />
      Vanaf volgend jaar organiseren we opnieuw workshops, hou deze pagina dus zeker in de gaten!`;
    workshopItem.appendChild(kerstBoodschap);
    /* 
    // LINK MEER INFO
    let workshopInfo = document.createElement('a');
    workshopInfo.href = `./workshops.html`;
    workshopInfo.innerHTML = 'meer info';
    workshopInfo.classList.add('info');
    // workshopInfo.target = '_blank';

    buttonsDiv.appendChild(workshopInfo);
    workshopItem.appendChild(buttonsDiv);

    // TEMPORARY SIGNUP METHOD
    let tempSignup = document.createElement('h4');
    tempSignup.classList.add('temp-signup');
    tempSignup.textContent =
      'Inschrijven in het Digipunt, via mail: digipunten@ateljeevzw.be of 0490 44 65 42';
    workshopItem.appendChild(tempSignup);
 */
    // WORKSHOP ITEM TOEVOEGEN
    workshopEl.appendChild(workshopItem);
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
    let locationDays = document.createElement('h3');
    let locationHours = document.createElement('p');
    let extra = document.createElement('p');

    // KRINGWINKELS
    if (locations[i].type == 'kringwinkel') {
      locationDays.innerHTML = kringwinkelUren.dagen;
      locationHours.innerHTML =
        kringwinkelUren.am + '<br>' + kringwinkelUren.pm;
      extra.innerHTML = kringwinkelUren.extra;
    }

    // BIBS
    // KROOK
    if (locations[i].type == 'krook') {
      // do something
      locationDays.innerHTML = krookDagen;
      locationHours.innerHTML =
        kringwinkelUren.am + '<br>' + kringwinkelUren.pm;
    }

    // WATERSPORTBAAN
    if (locations[i].type == 'watersportbaan') {
      for (let key in watersportbaanUren) {
        let locationDay = document.createElement('h3');
        let locationDayHours = document.createElement('p');
        locationDay.innerHTML = key;
        locationDayHours.innerHTML = watersportbaanUren[key];
        locationItem.appendChild(locationDay);
        locationItem.appendChild(locationDayHours);
      }
    }

    // BRUGSEPOORT
    if (locations[i].type == 'brugsepoort') {
      for (let key in brugsepoortUren) {
        let locationDay = document.createElement('h3');
        let locationDayHours = document.createElement('p');
        locationDay.innerHTML = key;
        locationDayHours.innerHTML = brugsepoortUren[key];
        locationItem.appendChild(locationDay);
        locationItem.appendChild(locationDayHours);
      }
    }

    locationItem.appendChild(locationDays);
    locationItem.appendChild(locationHours);
    locationItem.appendChild(extra);

    // TOON OP KAART - LINK NAAR GOOGLE MAPS
    let locationLink = document.createElement('a');
    locationLink.href = locations[i].kaart;
    locationLink.target = '_blank';
    locationLink.innerHTML = 'toon op kaart';
    locationItem.appendChild(locationLink);

    locationEl.appendChild(locationItem);
  }

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

  let footerContent = document.getElementById('footerContent');
  let currentYear = new Date().getFullYear();
  let footer = document.createElement('p');
  footer.textContent = `Digipunt ${currentYear}`;
  footerContent.appendChild(footer);
};
