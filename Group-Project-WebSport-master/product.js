let search = new URLSearchParams(window.location.search).get("id")
const getProduct = async () =>{
    try{
        const response = await axios.get(`https://6102d7aa79ed680017482359.mockapi.io/productdetail?id=${search}`)
        console.log(response)
        document.getElementById("row").innerHTML = response.data.map((detail)=> 
        `<div class="col bg-yell">
        <img src="${detail.prdImageUrl}" alt=""> 
      </div>
      <div class="col bg-blue">
        <h5>Nike F.C. Women's Tie-Dye Football Shirt</h5>
        <h2 class="red-text">${detail.prdname}</h2> 
        <h7>Size</h7>                                 
        <div class="dropdown">
          
          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Please Select</button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">S</a>
            <a class="dropdown-item" href="#">M</a>
            <a class="dropdown-item" href="#">L</a>
            <a class="dropdown-item" href="#">XL</a>
            <a class="dropdown-item" href="#">XXL</a>
            <a class="dropdown-item" href="#">XXXL</a>
          </div>
        </div>
        <div class="Addtobag">
          <button>Add To Bag</button>
        </div>
        <div class="Details">
          <h2>Product Details</h2>
        <p>asdakjsdnsjklanf ldsnakl;nmklndkljgnbl pojodfgklsmdl;fjisdh </p>
          <button>Show More Details</button>
        </div>`
        ).join("")
    }catch (e){
        console.log('error', e)
    }
}
getProduct()