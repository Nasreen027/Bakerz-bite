const rootContainer = $("#root")
const defaultImageUrl = ("./assets/images/")
const offersContainer = $("#offers-container")
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
const merchandiseContainer = $("#merchandise-container")
const cartContainer = $("#cart-container")
const cartCountContainer = $("#cart-count")
const cartMainButton = $("#cart-main-button")


const productCategories = {
    OFFERS:"offers",
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
    TARTSANDCOOKIES:"tarts-and-cookies",
    MERCHANDISE :"merchandise"
}

const products = $.getJSON("./data/products.json", function(data){

    const offers = data.filter((item)=> item.category === productCategories.OFFERS )
    const cakes = data.filter((item) => item.category === productCategories.CAKES)
    const biscuits = data.filter((item) => item.category === productCategories.BISCUITS)
    const bread = data.filter((item) => item.category === productCategories.BREAD)
    const brownies = data.filter((item)=> item.category === productCategories.BROWNIES)
    const bunsAndRusk = data.filter((item)=> item.category === productCategories.BUNSANDRUSK)
    const cupCakes = data.filter((item)=> item.category === productCategories.CUPCAKES)
    const dessertsAndPastry = data.filter((item)=> item.category === productCategories.DESSERTSANDPASTRY)
    const grabAndGo = data.filter((item)=> item.category === productCategories.GRABANDGO)
    const puffsAndHiTea = data.filter((item)=> item.category === productCategories.PUFFSANDHITEA)
    const savoury = data.filter((item)=> item.category === productCategories.SAVOURY)
    const tartsAndCookies = data.filter((item)=> item.category === productCategories.TARTSANDCOOKIES)
    const merchandise = data.filter((item)=>item.category===productCategories.MERCHANDISE)
    let carthtml = localStorage.getItem("cart")||"[]"
    carthtml = JSON.parse(carthtml)
    carthtml = carthtml.map((item)=>JSON.parse(item))
    let cartCount = carthtml.length
    // console.log(carthtml)

    

    offersContainer.html(makeProductGrid("Offers", offers, "#A47A49"))
    cakesContainer.html(makeProductGrid("Cakes",cakes, " #A47A49"))
    biscuitsContainer.html(makeProductGrid("Biscuits",biscuits, "#C690A8"))
    breadContainer.html(makeProductGrid("Breads And Artisanal Breads",bread, "#9BAD45"))
    browniesContainer.html(makeProductGrid("Brownies", brownies, "#D6781C"))
    bunsAndRuskContainer.html(makeProductGrid("Buns And Rusk", bunsAndRusk, "#66bb6a" ))
    cupCakesContainer.html(makeProductGrid("Cupcakes", cupCakes, "#D476A7"))
    dessertsAndPastryContainer.html(makeProductGrid("Desserts And Pastry", dessertsAndPastry, "#4C4331"))
    grabAndGoContainer.html(makeProductGrid("Grab And Go", grabAndGo, "#A96854"))
    puffsAndHiTeaContainer.html(makeProductGrid("Puffs And Hi Tea", puffsAndHiTea, "#28805C"))
    savouryContainer.html(makeProductGrid("Savoury", savoury, "#0E2E46"))
    tartsAndCookiesContainer.html(makeProductGrid("Tarts And Cookies", tartsAndCookies, "#f2c12e"))
    merchandiseContainer.html(makeProductGrid("Merchandise", merchandise, "#227F8A"))
    cartContainer.html(makeCartGrid("Cart", carthtml, "#074842"))
    cartCountContainer.html(cartCount)


    //searching products
    $(document).on("keyup", "#search", function(){
        let value = $("#search").val()
        // console.log(value);

        const findProducts = data.filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase())
        })
        searchContainer.html(makeProductGrid(`Search results for "${value}"`, findProducts, data))
        $("#root").toggle();
    })
    // console.log(findProducts)
})
/// cart///
$(document).on("click", "#cart-main-button", function(){
    $("#cart-container").fadeIn();
    $("#root").toggle();
    $("#search").toggle();
})