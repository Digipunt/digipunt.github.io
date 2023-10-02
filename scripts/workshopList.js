console.log('workshopList loaded');

const workshopList = [
  // WORKSHOP 1
  /*
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
      extra:
        'Gelieve uw eigen toestel mee te brengen (smartphone / tablet / laptop).',
    },
    status: 'volzet of # plaatsen beschikbaar',
  },
  */
  // WORKSHOP 2
  /*
  {
    value: 'word',
    titel: 'Microsoft Word voor beginners',
    datum: '8, 9 & 10 november',
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
        'Gelieve uw eigen toestel mee te brengen (laptop). In de les gebruik ik Word Online dat gratis toegankelijk is via een Microsoft account. Dit is een beperktere versie maar geschikt voor basisgebruik. Gebruik je een ander tekstverwerkingsprogramma, dan kun je ook deelnemen. Hou er wel rekening mee dat iconen, omschrijvingen en opties kunnen verschillen. Deze lessenreeks is geschikt voor mensen met weinig tot geen kennis van Word.',
    },
    status: 'volzet of # plaatsen beschikbaar',
  },
  */
  // WORKSHOP 3
  /*
  {
    value: 'android',
    titel: '  Basis Android',
    datum: '15, 16 & 17 november',
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
        'Gelieve uw eigen toestel mee te brengen (smartphone / tablet). Op dag 3 is er voldoende tijd over voor verdieping. Deze lessenreeks is geschikt voor mensen met weinig tot geen ervaring met hun toestel.',
    },
    status: 'volzet of # plaatsen beschikbaar',
  },
  */
  // WORKSHOP 4
  /*
  {
    value: 'google',
    titel: 'Google Apps: GMail, Drive & Photos',
    datum: '22, 23 & 24 november',
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
      extra:
        'Gelieve uw eigen toestel mee te brengen. (smartphone / tablet / laptop)',
    },
    status: 'volzet of # plaatsen beschikbaar',
  },
  */
  // WORKSHOP 5
  /*   {
    value: '',
    titel: '',
    datum: '',
    tijd: '',
    locatie: '',
    inschrijving: '',
    info: {
      beschrijving: `Dierbare klanten, in de loop van het komende jaar organiseren we opnieuw workshops, hou deze pagina dus zeker in de gaten!`,
      onderwerpen: [],
      extra: '',
    },
    status: 'volzet of # plaatsen beschikbaar',
  }, */
  /*   {
    value: 'itsme',
    titel: 'Workshops itsme®',
    datum: '<strong>16 & 19 mei || 7 & 22 juni</strong>',
    tijd: '<strong>9u tot 11u</strong>',
    locatie:
      '<strong><a href="https://dezuidpoortgent.be/contact/">De Zuidpoort vzw</a> <br> Rerum-Novarumplein 25</strong>',
    inschrijving:
      'Inschrijven via <a href="digipunten@ateljeevzw.be">digipunten@ateljeevzw.be</a>',
    info: {
      beschrijving: '',
      onderwerpen: [],
      extra:
        'Om de app van itsme® te gebruiken heeft u het volgende nodig:<ul><li>Smartphone</li><li>Elektronische identiteitskaart + pincode</li><li>Geldig e-mail adres</li></ul>',
    },
    status: 'volzet of # plaatsen beschikbaar',
  }, */
  /*   {
    value: 'digiwalk',
    titel: 'Digitale Wandeling',
    datum: '<strong>29 september</strong>',
    tijd: '<strong>10u & 15u</strong>',
    locatie:
      '<strong><a href="https://goo.gl/maps/bigMxang7DGCqEDL9">SMAK Stedelijk Museum voor Actuele Kunst</a> <br> Jan Hoetplein 1</strong>',
    inschrijving: '',
    info: {
      beschrijving:
        'Op vrijdag 29/09 organiseert Digipunt een gratis digitale wandeling in het Citadelpark. We starten om 10u en 15u aan het SMAK. <br><br> We doen een route van 3 km op een rustig tempo waar er voldoende tijd is om de volgende apps te gebruiken: Komoot, Google Lens, Birdnet, Obsidentify, Wildplukwijzer en leren we ook QR codes scannen (het is aangeraden de apps al op voorhand te downloaden). <br><br> Er is geen wifi ter plaatse beschikbaar, de tocht gebeurt onder 4G/5G.<br><br> Inschrijven is verplicht en kan via <a href="digipunten@ateljeevzw.be">digipunten@ateljeevzw.be</a> met vermelding van de dag 29/09 en het uur (10u of 15u).',
      onderwerpen: [],
      extra: '',
    },
    status: 'volzet of # plaatsen beschikbaar',
  }, */
];
