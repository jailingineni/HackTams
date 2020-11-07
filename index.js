
function addListValues(){

    for (var i = 0; i < 10; i++) {
        var title = "my made up title"
        var subtitle = "my other stuff"
        var item = `<div class="item">
    <i class="large github middle aligned icon"></i>
                       <div class="content">
                           <a class="header">${title}</a>
                           <div class="description">${subtitle}</div>
                       </div>
                   </div>`
    
    
        document.getElementById("list-container").insertAdjacentHTML('beforeend',item );
    
    }
    
}

