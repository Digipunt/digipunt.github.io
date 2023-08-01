// vars
const uriData = 'https://data.stad.gent/api/records/1.0/search/?dataset=locaties-digitaal-talentpunten-gent&q=&rows=-1&facet=gemeente&facet=rolstoel_t&facet=wijk&facet=wifi&timezone=Europe%2FBrussels';

// start
loadJSON(uriData, myData, 'jsonp');

function myData(data) {
    if (typeof data === 'object' && data.hasOwnProperty('records')) {
        const records = data.records;
        showLocations(records);
    }
}

function showLocations(records) {
    let locationEl = document.getElementById('location-v2');

    records.forEach(record => {

        const f = record.fields;
        const opeingHours = f.openingsur && f.openingsur.trim() !== '' ? f.openingsur.split(';').map(item => `<li>${item}</li>`).join('') : '';
        const email = `<a href="mailto:${f.e_mail}">${f.e_mail}</a>`;
        const uriMap = `https://www.google.com/maps/search/${f.locatie}/@${f.geo_point_2d[0]},${f.geo_point_2d[1]}`;

        const htmlOpeningHours = opeingHours == '' ? opeingHours : `
        <div>
            <b>Openingsuren:</b></br>
            <ul class="no-bullets">
                ${opeingHours}
            </ul>
        </div>
        `

        const html = `
        <div class="col">
            <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">${f.locatie}</h5>
                <p class="card-text">${f.straat} ${f.huisnr}, ${f.postcode} ${f.gemeente}</p>
                
                <p class="card-text">
                    E-mail: ${email}</br>
                    Begeleider: ${f.begeleider}
                </p>
                ${htmlOpeningHours}
            </div>
            <div class="card-footer">
                <a href="${uriMap}" class="btn btn-default text-center w-100" target="_blank">
                    <i class="fas fa-map-marker-alt"></i>
                </a>
            </div>
            </div>
        </div>      
        `

        locationEl.innerHTML += html;
    });

}

/***********
 * Helpers *
 ***********/

function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(JSON.parse(xhr.responseText));
            }
            else {
                error(xhr);
            }
        }
    };
    xhr.open('GET', path, true);
    xhr.send();
}