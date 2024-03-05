console.log('locations loaded');

// LOCATIONS ARRAY
const locations = [
  {
    type: 'kringwinkel',
    naam: 'Kringwinkel Vlaamsekaai',
    adres: 'Vlaamsekaai 10',
    dagen: [['maandag t.e.m. vrijdag', '10u00 - 12u00', '13u00 - 17u00']],
    info: 'Gesloten op dinsdagvoormiddag',
    kaart:
      'https://maps.google.com/maps?ll=51.044053,3.741561&z=17&t=m&hl=nl&gl=US&mapclient=embed&cid=8073523165221615316',
  },
  {
    type: 'kringwinkel',
    naam: 'Kringwinkel Brugsesteenweg',
    adres: 'Brugsesteenweg 354',
    dagen: [['maandag t.e.m. vrijdag', '10u00 - 12u00', '13u00 - 17u00']],
    info: 'Gesloten op dinsdagvoormiddag',
    kaart:
      'https://maps.google.com/maps?ll=51.068477,3.685666&z=17&t=m&hl=nl&gl=US&mapclient=embed&cid=3976486202622601959',
  },
  {
    type: 'kringwinkel',
    naam: 'Kringwinkel Getouwstraat',
    adres: 'Getouwstraat 5',
    dagen: [['maandag t.e.m. vrijdag', '10u00 - 12u00', '13u00 - 17u00']],
    info: 'Gesloten op dinsdagvoormiddag',
    kaart:
      'https://maps.google.com/maps?ll=51.071935,3.71407&z=17&t=m&hl=nl&gl=US&mapclient=embed&cid=2168621648512461089',
  },
  {
    type: 'amal',
    naam: 'AMAL Gent',
    adres: 'Kongostraat 42',
    dagen: [['maandag t.e.m. vrijdag', '09u00 - 12u00', '13u00 - 17u00']],
    info: 'Gesloten op dinsdagvoormiddag',
    kaart:
      'https://maps.google.com/maps?ll=51.060779,3.731428&z=17&t=m&hl=nl&gl=US&mapclient=embed&cid=9617621218421166756',
  },
  {
    type: 'rabot',
    naam: 'Wijkkantoor Rabot',
    adres: 'Griendeplein 16',
    dagen: [['maandag, donderdag & vrijdag', '10u00 - 12u00', '']],
    info: '',
    kaart: 'https://goo.gl/maps/Lc2Cp3nMrXcUWehd7',
  },
  {
    type: 'buurthuis',
    naam: 'Buurthuis Scheldeoord',
    adres: 'Wolterslaan 16',
    dagen: [['maandag', '', '13u30 - 17u00']],
    info: '',
    kaart: 'https://goo.gl/maps/YH9KRpn7pt2sXUGX6',
  },
  {
    type: 'de serre',
    naam: 'De Serre',
    adres: 'Rerum Novarumplein 10',
    dagen: [
      ['dinsdag', '', '13u30 - 17u00'],
      ['vrijdag', '09u00 - 12u00', '13u00 - 17u00'],
    ],
    info: '',
    kaart: 'https://goo.gl/maps/1fP35KGjx7CmPK2RA',
  },
  {
    type: 'toreke',
    naam: 'Eetcafé Toreke',
    adres: 'Vlotstraat 22',
    dagen: [
      ['maandag, donderdag & vrijdag', '', '13u00 - 16u00'],
      ['woensdag', '10u00 - 12u00', '13u00 - 16u00'],
    ],
    info: '',
    kaart: 'https://goo.gl/maps/nWRULCY1dGPQ2ftu5',
  },
];
