
$('#dropdown').dropdown();

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
                      new CovidInfo('Harris', 27545, 2865, 361353488, 4713325),
                      new CovidInfo('Hudspeth', 34, 3, 149878, 4886),
                      new CovidInfo('King', 0, 0, 208452, 272),
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
            covidinfos.sort((a, b)=> (a.GDP > b.dGDP ? -1:1));
            break;
        case 'Population':
            covidinfos.sort((a, b)=> (a.population > b.population ? -1:1));
            break;
        default: 
        covidinfos.sort((a, b)=> (a.counties > b.counties ? -1:1));
        break;
    }
}

function handleCity(name){

    //do work
    alert(name)
}