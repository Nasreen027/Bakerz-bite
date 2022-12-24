const rootContainer = $("#root")
const defaultImageUrl = ("./assets/images/")
const cakesContainer = $("#cakes-container")
const cupCakesContainer = $("#cupcakes-container")
const browniesContainer = $("#brownies-container")
const grabAndGoContainer = $("#grab-and-go-container")
const biscuitsContainer = $("#biscuits-container")
const savouryContainer = $("#savoury-container")
const breadContainer = $("#bread-container")
const bunsAndRuskContainer = $("#buns-and-rusk-container")
const dessertsAndPastryContainer = $("#desserts-and-pastry-container")
const tartsAndCookiesContainer = $("#tarts-and-cookies-container")
const puffsAndHiTeaContainer = $("#puffs-and-hi-tea-container")


// /////////////////
//////Cakes////////
//////////////////

$.getJSON("./data/cakes.json", function(data){
    cakesContainer.html(makeProductGrid("Cakes",data))
})

// //////////////
/////Cup Cakes//
////////////////

$.getJSON("./data/cup-cakes.json", function(data){
    cupCakesContainer.html(makeProductGrid("Cup Cakes",data))
})

// //////////////
////Brownies///
////////////////

$.getJSON("./data/brownies.json", function(data){
    browniesContainer.html(makeProductGrid("Brownies",data))
})

// //////////////
////Grab And Go//
//////////////////

$.getJSON("./data/grab-and-go.json", function(data){
    grabAndGoContainer.html(makeProductGrid("Grab And Go", data))
})

// /////////////
////Biscuits///
////////////////

$.getJSON("./data/biscuits.json", function(data){
    biscuitsContainer.html(makeProductGrid("Biscuits", data))
})

// ////////////
///Savoury/////
///////////////

$.getJSON("./data/savoury.json", function(data){
    savouryContainer.html(makeProductGrid("Savoury", data))
})


// ///////////////////////////////
//////Bread And Artisanal Bread///
/////////////////////////////////

$.getJSON("./data/bread.json", function(data){
    breadContainer.html(makeProductGrid("Breads And Artisanal Breads", data))
})

// ///////////////////////
/////Buns And Rusk////////
/////////////////////////

$.getJSON("./data/buns-and-rusk.json", function(data){
    bunsAndRuskContainer.html(makeProductGrid("Buns And Rusk", data))
})

////////////////////////////
/////Desserts And Pastry///
///////////////////////////

$.getJSON("./data/desserts-and-pastry.json", function(data){
    dessertsAndPastryContainer.html(makeProductGrid("Desserts And Pastry", data))
})

// //////////////////////
////Tarts And Cookies/////
////////////////////////

$.getJSON("./data/tarts-and-cookies.json", function(data){
    tartsAndCookiesContainer.html(makeProductGrid("Tarts And Cookies",data))
})

