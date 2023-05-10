console.log('locations loaded');

const kringwinkelUren = {
  am: '10u00 - 12u00',
  pm: '13u00 - 17u00',
  dagen: 'maandag tot vrijdag',
  extra: 'dinsdagvoormiddag gesloten',
};

const krookDagen = 'maandag tot zaterdag';

const brugsepoortUren = {
  maandag: '15u30 - 18u00',
  woensdag: '14u00 - 17u00',
  donderdag: '15u30 - 18u00',
};

const watersportbaanUren = {
  dinsdag: '15u30 - 18u00',
  zaterdag: '10u00 - 12u30',
};

const rabotUren = {
  dinsdag: '13u30 - 16u30',
  donderdag: { am: '09u00 - 12u00', pm: '13u30 - 16u30' },
};

const buurtHuisuren = {
  maandag: '13u30 - 16u30',
};

const torekeUren = {
  maandag: { am: '09u00 - 12u30', pm: '13u30 - 16u00' },
  dinsdag: { am: '09u00 - 12u30', pm: '13u30 - 16u00' },
  woensdag: { am: '09u00 - 12u30', pm: '13u30 - 16u00' },
};

const serreUren = {
  dinsdag: '13u30 - 17u00',
  vrijdag: { am: '09u00 - 12u00', pm: '13u00 - 17u00' },
};

// LOCATIONS ARRAY
const locations = [
  {
    type: 'kringwinkel',
    naam: 'Kringwinkel Vlaamsekaai',
    adres: 'Vlaamsekaai 10',
    kaart:
      'https://maps.google.com/maps?ll=51.044053,3.741561&z=17&t=m&hl=nl&gl=US&mapclient=embed&cid=8073523165221615316',
  },
  {
    type: 'kringwinkel',
    naam: 'Kringwinkel Brugsesteenweg',
    adres: 'Brugsesteenweg 354',
    kaart:
      'https://maps.google.com/maps?ll=51.068477,3.685666&z=17&t=m&hl=nl&gl=US&mapclient=embed&cid=3976486202622601959',
  },
  {
    type: 'kringwinkel',
    naam: 'Kringwinkel Getouwstraat',
    adres: 'Getouwstraat 5',
    kaart:
      'https://maps.google.com/maps?ll=51.071935,3.71407&z=17&t=m&hl=nl&gl=US&mapclient=embed&cid=2168621648512461089',
  },
  {
    type: 'kringwinkel',
    naam: 'AMAL Gent',
    adres: 'Kongostraat 42',
    kaart:
      'https://maps.google.com/maps?ll=51.060779,3.731428&z=17&t=m&hl=nl&gl=US&mapclient=embed&cid=9617621218421166756',
  },
  {
    type: 'krook',
    naam: 'Bibliotheek De Krook',
    adres: 'Miriam Makebaplein 1',
    kaart:
      'https://maps.google.com/maps?ll=51.048604,3.728687&z=17&t=m&hl=nl&gl=US&mapclient=embed&cid=11176294349727647781',
  },
  {
    type: 'rabot',
    naam: 'Wijkkantoor Rabot',
    adres: 'Griendeplein 16',
    kaart: 'https://goo.gl/maps/Lc2Cp3nMrXcUWehd7',
  },
  {
    type: 'buurthuis',
    naam: 'Buurthuis Scheldeoord',
    adres: 'Tarbotstraat 61 a',
    kaart: 'https://goo.gl/maps/WqjWeEUTXiidaQ4k9',
  },
  {
    type: 'de serre',
    naam: 'De Serre',
    adres: 'Rerum Novarumplein 10',
    kaart: 'https://goo.gl/maps/1fP35KGjx7CmPK2RA',
  },
  {
    type: 'toreke',
    naam: 'Eetcafé Toreke',
    adres: 'Vlotstraat 22',
    kaart: 'https://goo.gl/maps/nWRULCY1dGPQ2ftu5',
  },
];
