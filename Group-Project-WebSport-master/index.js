const getProduct = async () =>{
    try{
        const response = await axios.get('https://6102d7aa79ed680017482359.mockapi.io/productlist')
        document.getElementById("row").innerHTML = response.data.map((product)=> 
        `<div class="col-lg-3 col-md-4 col-sm-6">
            <div class="card">
                <img src="${product.prdImageUrl}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${product.prdname}</h5>
                        <div class="price-btn">
                            <p class="card-text">${product.prdPrice} THB</p>
                            <button type="button" class="btn btn-dark" id="myBtn" onclick="location.href = 'product.html?id=${product.id}';"><span>Add</span></button>
                        </div>
                    </div>
            </div>
        </div>`
        ).join("")
    }catch (e){
        console.log('error', e)
    }
}
getProduct()