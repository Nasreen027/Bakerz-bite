function makeProductColumn(_product = {}){
    return ` <div class="col-md-4 col-sm-6 pd display">
    <div class="shadow-lg" style="width: 25rem;overflow:hidden">
<div class="zoom">
<a href=""><img src="${defaultImageUrl}${_product.image}" class="card-img-top w-100" style="height:20rem" alt="..."></a>
</div>
<div class="card-body container-fluid">
<h5>${_product.name}</h5>
</div>
</div>
</div>`
}

function makeProductGrid(_title, _products=[]){
    let gridHtml = `
      <div class="container mt-5">
      <h2 class="text-center">${_title}</h2>
      <div class="row">`

      const _columns = _products.map((item, index)=>{
        return makeProductColumn(item)
      })

      gridHtml +=  _columns.join('')

      gridHtml += ` </div>
      </div>` 

      return gridHtml


}