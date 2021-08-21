let search = new URLSearchParams(window.location.search).get("id")
const getProduct = async () =>{
    try{
        const response = await axios.get(`https://6102d7aa79ed680017482359.mockapi.io/productdetail?id=${search}`)
        const item = response.data
        console.log(item)
        document.getElementById("row").innerHTML = response.data.map((detail)=> 
        `<div class="col bg-yell">
        <img src="${detail.prdImageUrl}" alt=""> 
      </div>
      <div class="col bg-blue">
        <h5>${detail.prdname}</h5>
        <h2 class="red-text">${detail.prdPrice} BATH</h2> 
        <h7>Size</h7>                                 
        <div class="dropdown">
          
          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Please Select</button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">${detail.prdSize[0]} </a>
            <a class="dropdown-item" href="#">${detail.prdSize[1]}</a>
            <a class="dropdown-item" href="#">${detail.prdSize[2]}</a>
          </div>
        </div>
        <div class="Addtobag">
          <button class="add">Add To Bag</button>
        </div>
        <div class="Details">
          <h2>Product Details</h2>
        <p>${detail.txtDetail}</p>
          <button>Show More Details</button>
        </div>`
        ).join("")
        let add = document.querySelector('.add')
        add.addEventListener('click', () => {
            console.log(add)
            add = JSON.parse(localStorage.getItem("add") || "[]");
            const bag = {
                id: item[0].id,
                name: item[0].prdname,
                price: item[0].prdPrice,
                pic: item[0].prdImageUrl,
              };
              console.log(bag); 
              add.push(bag)
              localStorage.setItem(`add`, JSON.stringify(add));
        })
    }catch (e){
        console.log('error', e)
    }
}
getProduct()
