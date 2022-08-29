const URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DES_BY_NAME = "ZA";
let FiltroArray = [];

function comparacion(a,b){
    return a.name.localeCompare(b.name)
}

function sortAndShowCategories(criterio, array){
    if (criterio === ORDER_ASC_BY_NAME){
        FiltroArray = array.sort(comparacion)
    }
    if (criterio === ORDER_DES_BY_NAME){
        FiltroArray = array.reverse(comparacion)
    }
    document.getElementById("info").innerHTML = "" 
    showinfo(FiltroArray)
}

document.addEventListener("DOMContentLoaded", function (e) {
fetch(URL)
.then( res => res.json())
.then(data => {
    FiltroArray = data.products
    showinfo(FiltroArray)
})

document.getElementById("sortAsc").addEventListener("click", function(){
    sortAndShowCategories(ORDER_ASC_BY_NAME, FiltroArray);
});
document.getElementById("sortDesc").addEventListener("click", function(){
    sortAndShowCategories(ORDER_DES_BY_NAME, FiltroArray);
});

})


function showinfo(array){
    array.forEach(element => {
        var elementHTML = ` 
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="${element.image}" alt="imagen producto" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex justify-content-between">
                        <div>
                            <h4>${element.name}</h4>
                            <p>${element.description}</p>
                        </div>
                        <small>${element.soldCount}</small>
                    </div>
                </div>
            </div>
        </div>`
        document.getElementById("info").innerHTML += elementHTML;
    });
}
