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
const searchContainer = $("#search-container")

const productCategories = {
    CAKES:"cakes",
    BISCUITS:"biscuits",
    BREAD:"bread",
    BROWNIES:"brownies",
    BUNSANDRUSK:"buns-and-rusk",
    CUPCAKES:"cup-cakes",
    DESSERTSANDPASTRY:"desserts-and-pastry",
    GRABANDGO:"grab-and-go",
    PUFFSANDHITEA:"puffs-and-hi-tea",
    SAVOURY:"savoury",
    TARTSANDCOOKIES:"tarts-and-cookies"
}

const products = $.getJSON("./data/products.json", function(data){

    const cakes = data.filter((item) => item.category===productCategories.CAKES)
    const biscuits = data.filter((item) => item.category===productCategories.BISCUITS)
    const bread = data.filter((item) => item.category === productCategories.BREAD)
    const brownies = data.filter((item)=> item.category === productCategories.BROWNIES)
    const bunsAndRusk = data.filter((item)=> item.category === productCategories.BUNSANDRUSK)
    const cupCakes = data.filter((item)=> item.category === productCategories.CUPCAKES)
    const dessertsAndPastry = data.filter((item)=> item.category === productCategories.DESSERTSANDPASTRY)
    const grabAndGo = data.filter((item)=> item.category === productCategories.GRABANDGO)
    const puffsAndHiTea = data.filter((item)=> item.category === productCategories.PUFFSANDHITEA)
    const savoury = data.filter((item)=> item.category === productCategories.SAVOURY)
    const tartsAndCookies = data.filter((item)=> item.category === productCategories.TARTSANDCOOKIES)

    

    cakesContainer.html(makeProductGrid("Cakes",cakes, "cakes2.jpg"))
    biscuitsContainer.html(makeProductGrid("Biscuits",biscuits, data))
    breadContainer.html(makeProductGrid("Breads And Artisanal Breads",bread, data))
    browniesContainer.html(makeProductGrid("Brownies", brownies, data))
    bunsAndRuskContainer.html(makeProductGrid("Buns And Rusk", bunsAndRusk, data))
    cupCakesContainer.html(makeProductGrid("Cupcakes", cupCakes, data))
    dessertsAndPastryContainer.html(makeProductGrid("Desserts And Pastry", dessertsAndPastry, data))
    grabAndGoContainer.html(makeProductGrid("Grab And Go", grabAndGo, data))
    puffsAndHiTeaContainer.html(makeProductGrid("Puffs And Hi Tea", puffsAndHiTea, data))
    savouryContainer.html(makeProductGrid("Savoury", savoury, data))
    tartsAndCookiesContainer.html(makeProductGrid("Tarts And Cookies", tartsAndCookies, data))


    //searching products
    $(document).on("click", "#submit", function(){
        let value = $("#search").val()
        console.log(value);

        const findProducts = data.filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase())
        })
        searchContainer.html(makeProductGrid(`Search results for "${value}"`, findProducts, data))
        $("#root").toggle();
    })
    

    // console.log(findProducts)

})
//  function find(data){
//     let inp = document.getElementById("search").value;
//     let find = data.filter((item)=>{
//         return item.name.toLowerCase().includes(inp.toLowerCase())
//     })
//  }







// //////////////
/////Cup Cakes//
////////////////

// $.getJSON("./data/cup-cakes.json", function(data){
//     cupCakesContainer.html(makeProductGrid("Cup Cakes",data))
// })

// //////////////
////Brownies///
////////////////

// $.getJSON("./data/brownies.json", function(data){
//     browniesContainer.html(makeProductGrid("Brownies",data))
// })

// //////////////
////Grab And Go//
//////////////////

// $.getJSON("./data/grab-and-go.json", function(data){
//     grabAndGoContainer.html(makeProductGrid("Grab And Go", data))
// })

// /////////////
////Biscuits///
////////////////

// $.getJSON("./data/biscuits.json", function(data){
  
// })

// ////////////
///Savoury/////
///////////////

// $.getJSON("./data/savoury.json", function(data){
//     savouryContainer.html(makeProductGrid("Savoury", data))
// })


// ///////////////////////////////
//////Bread And Artisanal Bread///
/////////////////////////////////

// $.getJSON("./data/bread.json", function(data){
   
// })

// ///////////////////////
/////Buns And Rusk////////
/////////////////////////

// $.getJSON("./data/buns-and-rusk.json", function(data){
//     bunsAndRuskContainer.html(makeProductGrid("Buns And Rusk", data))
// })

////////////////////////////
/////Desserts And Pastry///
///////////////////////////

// $.getJSON("./data/desserts-and-pastry.json", function(data){
//     dessertsAndPastryContainer.html(makeProductGrid("Desserts And Pastry", data))
// })

// //////////////////////
////Tarts And Cookies/////
////////////////////////

// $.getJSON("./data/tarts-and-cookies.json", function(data){
//     tartsAndCookiesContainer.html(makeProductGrid("Tarts And Cookies",data))
// })



