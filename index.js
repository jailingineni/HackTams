$('#dropdown').dropdown();

var city1 = {
    "name":"Dallas",
    "count":10000
}

var allCities = [];

allCities.push(city1);


function addListValues(){

    for(var l = 0; l< allCities.length; l++){

        var city = allCities[l];
        var name = city["name"];
        var count = city["count"]
        
        var item = `<div class="item">
    <i class="large github middle aligned icon"></i>
                       <div class="content">
                           <a class="header">${name}</a>
                           <div class="description">${count}</div>
                       </div>
                   </div>`
    
    
        document.getElementById("list-container").insertAdjacentHTML('beforeend',item );
    }

    
}

