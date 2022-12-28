let cart = localStorage.getItem("cart") || "[]"
cart = JSON.parse(cart)

//add to cart
function addToCart(product) {
    cart = [...cart, product]
    localStorage.setItem("cart", JSON.stringify(cart))
}


function makeProductColumn(_product = {}){
    return ` <div class="col-md-4 col-sm-6 pd display">
    <div class="shadow-lg" style="width: 25rem;overflow:hidden">
<div class="zoom">
<a href=""><img src="${defaultImageUrl}${_product.image}" class="card-img-top w-100" style="height:20rem" alt="..."></a>
</div>
<div class="card-body container-fluid">
<h5 class="card-title">${_product.name}</h5>
<p class="card-text">${_product.price}</p>
<button class='btn-cart' data-product="${_product.name}">add to cart</button>
</div>
</div>
</div>`
}

function makeProductGrid(_title, _products=[], image){
    let gridHtml = `
      <div class="container mt-5">
      <div style='background:url(${defaultImageUrl}${image})'><h2 class="text-center">${_title}</h2></div>
      <div class="row">`

      const _columns = _products.map((item, index)=>{
        return makeProductColumn(item)
      })

      gridHtml +=  _columns.join('')

      gridHtml += ` </div>
      </div>` 

      return gridHtml


}

$(document).on("click", '.btn-cart', function() {
  const currentButton = $(this)
  const product = currentButton.attr("data-product")
  console.log(product)
  addToCart(product)
})