class CovidInfo{
    constructor(counties, activecases, deaths, GDP, population){
        this.counties = counties;
        this.activecases = activecases;
        this.deaths = deaths;
        this.GDP = GDP;
        this.population = population;
    }
    }

    var covidinfos = [new CovidInfo('Austin', 6, 10, 1271624, 30032),
                      new CovidInfo('Bexar', 54441, 1427, 97527759, 2003554),
                      new CovidInfo('Brazoria', 755, 188, 15588622, 374264),
                      new CovidInfo('Collin', 1445, 199, 599117532, 1034730),
                      new CovidInfo('Dallas',	10476, 1318, 241375801, 2635516),
                      new CovidInfo('Denton',	974, 181, 28354188, 887207),
                      new CovidInfo('El Paso',	24899, 683, 28974082, 839238),
                      new CovidInfo('Harris', 27545, 2865, 361353488, 4713325),
                      new CovidInfo('Hudspeth', 34, 3, 149878, 4886),
                      new CovidInfo('King', 0, 0, 208452, 272),
                      new CovidInfo('Liberty', 2322, 59, 1898796, 88219),
                      new CovidInfo('Newton', 190, 14,508661, 13595),
                      new CovidInfo('Trinity', 211, 8, 233490, 14651),
                      new CovidInfo('Willacy', 56, 58, 870911, 21358),
                      new CovidInfo('Zavala', 12, 19, 945577, 11840)];

function sortArray(sortorder){
    switch(sortorder){
        case 'Active Case':
            covidinfos.sort((a, b)=> (a.activecases > b.activecases ? -1:1));
            break;
        case 'Deaths':
            covidinfos.sort((a, b)=> (a.deaths > b.deaths ? -1:1));
            break;
        case 'GDP':
            covidinfos.sort((a, b)=> (a.GDP > b.GDP ? -1:1));
            break;
        case 'Population':
            covidinfos.sort((a, b)=> (a.population > b.population ? -1:1));
            break;
        default:
        covidinfos.sort((a, b)=> (a.counties > b.counties ? -1:1));
        break;
    }
}
function updateCard(cityName){
    document.getElementById("displays").style="display:block"
    var county=document.getElementById("cityName")
    var cases=document.getElementById("activeCases")
    var death=document.getElementById("deaths")
    var GDPs=document.getElementById("GDP")
    var pop=document.getElementById("population")
    for(var i=0; i<covidinfos.length;i++){
        if(cityName==covidinfos[i].counties){
            county.innerHTML=covidinfos[i].counties
            cases.innerHTML="Active Cases: " + covidinfos[i].activecases
            death.innerHTML= "Covid Deaths: " + covidinfos[i].deaths
            GDPs.innerHTML="GDP: "+ covidinfos[i].GDP
            pop.innerHTML="Population: "+ covidinfos[i].population
        }
    }
}
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
