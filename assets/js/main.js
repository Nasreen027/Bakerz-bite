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

// ///////////
////Brownies///
/////////////

$.getJSON("./data/brownies.json", function(data){
    browniesContainer.html(makeProductGrid("Brownies",data))
})

// ///////////
////Grab And Go//
/////////////

$.getJSON("./data/grab-and-go.json", function(data){
    grabAndGoContainer.html(makeProductGrid("Grab And Go", data))
})

// /////////
////Biscuits///
////////////

$.getJSON("./data/biscuits.json", function(data){
    biscuitsContainer.html(makeProductGrid("Biscuits", data))
})

// ////////
///Savoury//
///////////

$.getJSON("./data/savoury.json", function(data){
    savouryContainer.html(makeProductGrid("Savoury", data))
})

