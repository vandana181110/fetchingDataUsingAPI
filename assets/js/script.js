

window.onload = function(){
    var product = document.getElementById('product');
    fetch('https://fakestoreapi.com/products' , {method :'GET'})
    .then(function(res){
        return (res.json())
    })
    .then(function(data){
        console.log(data);
        for(let i=0;i<data.length;i++){
            // console.log(data[i])
            let pdata = data[i]
            // console.log(pdata.image)
            let pcard = `<div class='col-md-3'>
                          <div class='card'>
                            <img src='${pdata.image}' class='img-fluid'>
                            <div class='card-body'>
                              <h5 class='card-title'>${pdata.title}</h5>
                              <p class='card-text'>${pdata.description}</p>
                            </div>
                          </div>
                        </div>`
                        product.innerHTML +=pcard;
        }
    })
    .catch(function(err){
        console.log(err.msg)
    })
}