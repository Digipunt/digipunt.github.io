console.log('index loaded');

window.onload = function () {
  let workshopEl = document.getElementById('workshop');
  let locationEl = document.getElementById('location');

  // WORKSHOPS GENEREREN OP PAGINA VOLGENS SCRIPTS/WORKSHOPS.JS
  if (workshopList.length == 0) {
    console.log('no workshops');
    // WORKSHOP ITEM AANMAKEN
    let workshopItem = document.createElement('div');
    workshopItem.classList.add('workshop-item');

    // TITEL WORKSHOP
    let workshopTitel = document.createElement('h1');
    workshopTitel.innerHTML = 'Op dit ogenblik staan er geen workshops gepland';
    workshopItem.appendChild(workshopTitel);

    // BESCHRIJVING WORKSHOP
    let workshopBeschrijving = document.createElement('p');
    workshopBeschrijving.innerHTML =
      'Toekomstige workshops worden hier aangekondigd.';
    workshopItem.appendChild(workshopBeschrijving);

    workshopEl.appendChild(workshopItem);
  }
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

    // LOCATIE WORKSHOP
    let workshopLocatie = document.createElement('p');
    workshopLocatie.innerHTML = workshopList[i].locatie;
    workshopItem.appendChild(workshopLocatie);

    // INSCHRIJVEN WORKSHOP
    let workshopInschrijving = document.createElement('p');
    workshopInschrijving.innerHTML = workshopList[i].inschrijving;
    workshopItem.appendChild(workshopInschrijving);

    // BESCHRIJVING WORKSHOP
    let workshopBeschrijving = document.createElement('p');
    workshopBeschrijving.innerHTML = workshopList[i].info.beschrijving;
    workshopItem.appendChild(workshopBeschrijving);

    // EXTRA INFO WORKSHOP
    let workshopExtra = document.createElement('p');
    workshopExtra.innerHTML = workshopList[i].info.extra;
    workshopItem.appendChild(workshopExtra);

    // BUTTONS DIV
    // let buttonsDiv = document.createElement('div');
    // buttonsDiv.classList.add('buttons-div');

    // LINK INSCHRIJVING
    // let workshopInschrijving = document.createElement('a');
    // workshopInschrijving.href = workshopList[i].inschrijving;
    // workshopInschrijving.innerHTML = 'nu inschrijven';
    // workshopInschrijving.classList.add('inschrijven');
    // buttonsDiv.appendChild(workshopInschrijving);

    // let kerstBoodschap = document.createElement('p');
    // kerstBoodschap.innerHTML = `Dierbare klanten, in de loop van het komende jaar organiseren we opnieuw workshops, hou deze pagina dus zeker in de gaten!`;
    // workshopItem.appendChild(kerstBoodschap);
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

    // WIJKKANTOOR RABOT
    if (locations[i].type == 'rabot') {
      let locationDayOne = document.createElement('h3');
      let locationDayTwo = document.createElement('h3');
      let locationDayOneHours = document.createElement('p');
      let locationDayTwoHours = document.createElement('p');
      locationDayOne.innerHTML = Object.keys(rabotUren)[0];
      locationDayTwo.innerHTML = Object.keys(rabotUren)[1];
      locationDayOneHours.innerHTML = rabotUren.dinsdag;
      locationDayTwoHours.innerHTML =
        rabotUren.donderdag.am + '<br>' + rabotUren.donderdag.pm;
      locationItem.appendChild(locationDayOne);
      locationItem.appendChild(locationDayOneHours);
      locationItem.appendChild(locationDayTwo);
      locationItem.appendChild(locationDayTwoHours);
    }

    // BUURTHUIS SCHELDEOORD
    if (locations[i].type == 'buurthuis') {
      let locationDayOne = document.createElement('h3');
      let locationDayOneHours = document.createElement('p');
      locationDayOne.innerHTML = Object.keys(buurtHuisuren)[0];
      locationDayOneHours.innerHTML = buurtHuisuren.maandag;
      locationItem.appendChild(locationDayOne);
      locationItem.appendChild(locationDayOneHours);
    }

    // DE SERRE
    if (locations[i].type == 'de serre') {
      let locationDayOne = document.createElement('h3');
      let locationDayTwo = document.createElement('h3');
      let locationDayOneHours = document.createElement('p');
      let locationDayTwoHours = document.createElement('p');
      locationDayOne.innerHTML = Object.keys(serreUren)[0];
      locationDayOneHours.innerHTML = serreUren.dinsdag;
      locationDayTwo.innerHTML = Object.keys(serreUren)[1];
      locationDayTwoHours.innerHTML =
        serreUren.vrijdag.am + '<br>' + serreUren.vrijdag.pm;
      locationItem.appendChild(locationDayOne);
      locationItem.appendChild(locationDayOneHours);
      locationItem.appendChild(locationDayTwo);
      locationItem.appendChild(locationDayTwoHours);
    }

    // EETCAFE TOREKE
    if (locations[i].type == 'toreke') {
      let locationDays = document.createElement('h3');
      let locationHours = document.createElement('p');
      locationDays.innerHTML = torekeUren.dagen;
      locationHours.innerHTML =
        torekeUren.uren.am + '<br>' + torekeUren.uren.pm;
      locationItem.appendChild(locationDays);
      locationItem.appendChild(locationHours);
    }

    // POPUP
    if (locations[i].type == 'popup') {
      let locationDays = document.createElement('h3');
      let locationHours = document.createElement('p');
      locationDays.innerHTML = Object.keys(popupUren)[0];
      locationHours.innerHTML = popupUren.maandag;
      locationItem.appendChild(locationDays);
      locationItem.appendChild(locationHours);
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
