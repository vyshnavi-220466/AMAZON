

import {cart} from '/cart.js';
import {object} from '/amazon.js';
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
const today=dayjs();
 const deliverydate=today.add(7,'days');
 console.log(deliverydate.format('dddd, MMMM D'));
 
hello();
 let cartsummary;
cart.forEach((item) => {
    let productId=item.productId;
    let matchingproduct;
    object.forEach((product) =>{
        if(product.id===productId){
            matchingproduct=product;
        }
    })
    console.log(matchingproduct);
   
    cartsummary+=
    `<div class="whole">
    <div class="div5">
        <p class="delivery">Delivery date:Thursday, December 18</p>
            <div class="div2">
                <img src="${matchingproduct.image}" alt="no" class="pic1">
                <div class="para">
                <p>${matchingproduct.name}</p>
                <p>$${(matchingproduct.pricecents/100).toFixed(2)}</p>
                <p>Quantity:${item.quantity}<span class="update">Update </span><span class="update deleteoption" data-product-id="${matchingproduct.id}">Delete</span></p>
                </div>
                </div>
                <div class="div3">
                    <p class="delioption">Choose a delivery option:</p>
                    <div class="radio">
                    <input type="radio" name="radio-${matchingproduct.id}"  value="1" class="radiobutton">
                    <p class="para1">Thursday, December 18<br><span class="free">FREE -Shipping</span></p>
                    </div>
                    <div class="radio">
                    <input type="radio" class="radiobutton" name="radio-${matchingproduct.id}" value="2">
                    <p class="para1">Friday, December 12<br><span class="free">$4.99-Shipping</span></p>
                    
                    </div>
                    <div class="radio">
                    <input type="radio" name="radio-${matchingproduct.id}" class="radiobutton">
                    <p class="para1">Wednesday, December 10<br><span class="free">$9.99-Shipping</span></p>
                    </div>
                </div>
            </div>
    
    `
    
});
console.log(cartsummary);
/*document.querySelector('.whole').innerHTML=cartsummary;*/

document.querySelectorAll('.deleteoption')
.forEach((link) => {
    link.addEventListener('click', () =>{
        console.log('hello')
    console.log( link.dataset.productId);
       console.log('hi')
       console.log(productId);
    })

})