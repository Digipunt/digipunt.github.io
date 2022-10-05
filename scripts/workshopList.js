console.log('workshopList loaded');

const workshopList = [
  // WORKSHOP 1
  {
    value: 'word',
    titel: 'Microsoft Word voor beginners',
    datum: '11, 12 & 13 oktober',
    tijd: '14u tot 16u',
    locatie: 'Vlaamsekaai 10',
    inschrijving: 'https://forms.office.com/r/6CnCb7zk0R',
    info: {
      beschrijving:
        'Wil je graag kennismaken met Word of leren werken met een tekstverwerkingsprogramma? Dan is de lessenreeks Word (Office) iets voor jou.',
      onderwerpen: [
        'het lint leren kennen',
        'een document opmaken',
        'een tabel & afbeelding invoegen en aanpassen',
        'sjablonen gebruiken',
        'een flyer maken',
      ],
      extra:
        'In de les gebruik ik Word Online dat gratis toegankelijk is via een Microsoft account. Dit is een beperktere versie maar geschikt voor basisgebruik. Gebruik je een ander tekstverwerkingsprogramma, dan kun je ook deelnemen. Hou er wel rekening mee dat iconen, omschrijvingen en opties kunnen verschillen. Deze lessenreeks is geschikt voor mensen met weinig tot geen kennis van Word.',
    },
    status: 'volzet of # plaatsen beschikbaar',
  },

  // WORKSHOP 2
  {
    value: 'android',
    titel: '  Basis Android',
    datum: '18, 19 & 20 oktober',
    tijd: '14u tot 16u',
    locatie: 'Vlaamsekaai 10',
    inschrijving: 'placeholder link',
    info: {
      beschrijving:
        'Op populair verzoek organiseert Silvie ook een 3 daagse lessenreeks over basisgebruik van een smartphone/tablet (android).',
      onderwerpen: [
        'iconen op het startscherm',
        'apps installeren & verwijderen',
        'de zoekfunctie gebruiken',
        'toestel personaliseren: achtergrond & beltoon aanpassen',
        'toestel up to date houden',
      ],
      extra:
        'Op dag 3 is er voldoende tijd over voor verdieping. Deze lessenreeks is geschikt voor mensen met weinig tot geen ervaring met hun toestel.',
    },
    status: 'volzet of # plaatsen beschikbaar',
  },
  // WORKSHOP 3
  {
    value: 'google',
    titel: 'Google Apps: GMail, Drive & Photos',
    datum: '25, 26 & 27 oktober',
    tijd: '14u tot 16u',
    locatie: 'Vlaamsekaai 10',
    inschrijving: 'https://forms.office.com/r/bVQf2TJuym',
    info: {
      beschrijving:
        "Voel je jou onzeker als je bezig bent met jouw Gmail, opslagruimte (Drive), of verdwaal je tussen jouw foto's in Google Foto's? Wil je jouw gegevens meer structuur geven, maar je weet niet hoe. Dan is de lessenreeks Google: Gmail, Drive en Google Foto`s iets voor jou.",
      onderwerpen: [
        'mails organiseren & labelen',
        'bijlagen toevoegen & opslaan',
        'phishing herkennen',
        'mails opruimen',
        'mappen maken in Drive',
        'bestanden selecteren & verplaatsen',
        'opslag beheren',
        "collage maken met Google Foto's",
      ],
      extra: '',
    },
    status: 'volzet of # plaatsen beschikbaar',
  },
];
