console.log('locations loaded');

const kringwinkelUren = {
  am: '10u00 - 12u00',
  pm: '13u00 - 17u00',
  dagen: 'maandag tot vrijdag',
  extra: 'dinsdagvoormiddag gesloten',
};

const krookDagen = 'maandag tot zaterdag';

const brugsepoortUren = {
  dinsdag: '15u30 - 18u00',
  zaterdag: '10u00 - 12u30',
};

const watersportbaanUren = {
  maandag: '15u30 - 18u00',
  woensdag: '14u00 - 17u00',
  donderdag: '15u30 - 18u00',
};

const rabotUren = {
  dinsdag: '13u30 - 16u30',
  donderdag: { am: '09u00 - 12u00', pm: '13u30 - 16u30' },
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
    naam: 'IN-Gent Kongostraat',
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
    type: 'watersportbaan',
    naam: 'Bibliotheek Watersportbaan',
    adres: 'Neermeerskaai 1b',
    kaart:
      'https://maps.google.com/maps?ll=51.043751,3.70808&z=17&t=m&hl=nl&gl=US&mapclient=embed&cid=12583762977846023198',
  },
  {
    type: 'brugsepoort',
    naam: 'Bibliotheek Brugse Poort',
    adres: 'Blazoenstraat 9',
    kaart:
      'https://maps.google.com/maps?ll=51.062615,3.697218&z=17&t=m&hl=nl&gl=US&mapclient=embed&cid=14531396637240499202',
  },
  {
    type: 'rabot',
    naam: 'Wijkkantoor Rabot',
    adres: 'Griendeplein 16',
    kaart: 'https://goo.gl/maps/Lc2Cp3nMrXcUWehd7',
  },
];
