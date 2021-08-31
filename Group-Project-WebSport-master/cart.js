var Get = {};
const gettocart = () => {
  Get = JSON.parse(localStorage.getItem("add"));
};

const ShowData = () => {
  try {
    Get.map((products) => {
      console.log(products);
      document.getElementById("getproduct").innerHTML += `
          <div class="row" id="row">
                    <div class="col img-cart">
                       <img src="${products.pic}" alt="">
                    </div>
                    <div class="col img-cart2">
                        <h3 class="red-text">${products.price} THB</h3>
                        <h3 class="textname">${products.name}</h3>
                        <div class="row cart-drop">
                            <div class="col siz">
                                <h7>Size</h7>                                 
                                <div class="dropdown">
                                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Please Select</button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">S</a>
                                        <a class="dropdown-item" href="#">M</a>
                                        <a class="dropdown-item" href="#">L</a>
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="col quan">
                                <h7>Quantity</h7>                                 
                                <div class="dropdown2">
                                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"> 1  </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">1</a>
                                        <a class="dropdown-item" href="#">2</a>
                                        <a class="dropdown-item" href="#">3</a>
                                        <a class="dropdown-item" href="#">4</a>
                                        <a class="dropdown-item" href="#">5</a>
                                        <a class="dropdown-item" href="#">6</a>
                                    </div>
                                </div>
                            </div>
                            <div class="row remove">
                                <div class="col remove">
                                   <a href="">Remove this item</a>
                              </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
          
          
          
           
        `;
    });
  } catch (error) {
    console.log("error :>> ", error);
  }
};
gettocart();
ShowData();
console.log(Get);
