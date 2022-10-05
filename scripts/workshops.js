console.log('workshops loaded');

window.onload = function () {
  let workshopCards = document.getElementById('workshopCards');
  for (let i = 0; i < workshopList.length; i++) {
    // ELEMENTS
    let workshopCard = document.createElement('div');
    workshopCard.id = workshopList[i].value;
    let workshopHeader = document.createElement('div');
    let workshopBody = document.createElement('div');
    let workshopTitel = document.createElement('h1');
    let workshopDate = document.createElement('h4');
    let workshopTime = document.createElement('p');
    let workshopLocation = document.createElement('p');
    let workshopMaps = document.createElement('a');
    let workshopDescription = document.createElement('p');
    let subjectHeader = document.createElement('h4');
    let workshopSubjects = document.createElement('ul');
    let workshopExtra = document.createElement('p');
    let signUp = document.createElement('a');

    // STYLING
    workshopCard.classList.add('workshopCard');
    workshopBody.classList.add('workshopBody');
    signUp.classList.add('inschrijven');

    // TEXT CONTENT
    workshopTitel.textContent = workshopList[i].titel;
    workshopDate.textContent = workshopList[i].datum;
    workshopTime.textContent = workshopList[i].tijd;
    workshopLocation.textContent = workshopList[i].locatie;

    workshopDescription.textContent = workshopList[i].info.beschrijving;
    workshopExtra.textContent = workshopList[i].info.extra;
    subjectHeader.textContent = 'Wat komt er aan bod:';
    for (let j = 0; j < workshopList[i].info.onderwerpen.length; j++) {
      let subject = document.createElement('li');
      subject.textContent = workshopList[i].info.onderwerpen[j];
      workshopSubjects.appendChild(subject);
    }

    // LINKS
    signUp.href = workshopList[i].inschrijving;
    signUp.target = '_blank';
    signUp.textContent = 'nu inschrijven';

    workshopMaps.href = 'https://goo.gl/maps/Uufdo4RNYUSxbP1e9';
    workshopMaps.target = '_blank';
    workshopMaps.textContent = 'toon op kaart';

    // FILL HEADER
    workshopHeader.appendChild(workshopTitel);
    workshopHeader.appendChild(workshopDate);
    workshopHeader.appendChild(workshopTime);
    workshopHeader.appendChild(workshopLocation);
    workshopHeader.appendChild(workshopMaps);

    // FILL BODY
    workshopBody.appendChild(workshopDescription);
    workshopBody.appendChild(subjectHeader);
    workshopBody.appendChild(workshopSubjects);
    workshopBody.appendChild(workshopExtra);
    workshopBody.appendChild(signUp);

    // FILL CARD
    workshopCard.appendChild(workshopHeader);
    workshopCard.appendChild(workshopBody);

    workshopCards.appendChild(workshopCard);
  }

  let footerContent = document.getElementById('footerContent');
  let currentYear = new Date().getFullYear();
  let footer = document.createElement('p');
  footer.textContent = `© Digipunt ${currentYear}`;
  footerContent.appendChild(footer);
};
