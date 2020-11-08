var currentPage = window.location.href;

alert(currentPage);

const params = currentPage.split("?")[1]
const value = params.split("=")[1];

alert(value);


function updateCard(cityName){
    var county=document.getElementById("cityName")
    var cases=document.getElementById("activeCases")
    var death=document.getElementById("deaths")
    var GDP=document.getElementById("GDP")
    var pop=document.getElementById("population")
    for(int i=0; i<c)
}
<div id="list-container" class="ui relaxed divided list">
                <div>
                    <div class="ui card">
                        <div class="content">
                          <div id="cityName" class="header">Cute Dog</div>
                          <div class="description">
                            <p id="activeCases"> </p>
                            <p id="deaths"></p>
                            <p id="GDP"></p>
                            <p id="population"></p>
                          </div>
                        </div>
                      </div>
                </div>
            </div>