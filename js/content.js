var Certificates = [
    {
        Title: "Google Certificate",
        Img: "../img/logo-Google.png",
        Description: "Desarrollo de Apps Móviles",
        Date: "April 17, 2020"
    },
    {
        Title: "Udemy Certificate",
        Img: "../img/logo-Udemy.png",
        Description: "SQL: Creación de Bases de Datos (De cero a profesional)",
        Date: "October 29, 2020"
    },
    {
        Title: "Udemy Certificate",
        Img: "../img/logo-Udemy.png",
        Description: "Fundamentos de Git en Cloud",
        Date: "February 26, 2021"
    },
    {
        Title: "Udemy Certificate",
        Img: "../img/logo-Udemy.png",
        Description: "HTML and CSS3 Training",
        Date: "November 23, 2020"
    },
    {
        Title: "Platzi Certificate",
        Img: "../img/logo-Platzi.png",
        Description: "Básico de JavaScript",
        Date: "March 01, 2022"
    },
]
var contentCertificates = $("#certificates");;
contentCertificates.empty();

for (let i = 0; i < Certificates.length; i++) {
    var html1 = '<section class="wow">';
    html1 += '  <header>';
    html1 += '      <img src="'+ Certificates[i].Img +'" alt="">';
    html1 += '  </header>';
    html1 += '  <main>';
    html1 += '      <li>';
    html1 += '          <h5 class="mini-subtitulos">'+ Certificates[i].Title +'</h5>';
    html1 += '      </li>';
    html1 += '      <li>'+ Certificates[i].Description +'</li>';
    html1 += '      <li>'+ Certificates[i].Date +'</li>';
    html1 += '  </main>';
    html1 += '</section>';

    contentCertificates.append(html1);
}