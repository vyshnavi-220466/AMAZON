 class Product{
    id;
    image;
    name;
    rating;
    pricecents;


    constructor(productdetails) {
    this.id=productdetails.id;
    this.image=productdetails.image;
    this.name=productdetails.name;
    this.rating=productdetails.rating;
    this.pricecents=productdetails.pricecents;
 }
 
 }
 const product=new Product( {id:'1',
    image:'picture1.jpg',
    name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating:{
        stars:1,
        count:87
    },
    pricecents:1090
})
 console.log(product)


 
 
 
  const object=[{
   
},
{
    id:'2',
image:'picture2.jpg',
name:'Intermediate Size Basketball',
rating:{
    stars:4,
    count:127
},
pricecents:2095
},{
    id:'3',
    image:'picture3.jpg',
    name:'Adults Plain Cotton T-Shirt - 2 Pack',
    rating:{
        stars:1,
        count:56
    },
    pricecents:799
}
,{
    id:'4',
    image:'picture4.jpg',
     name:'2 Slot Toaster - Black',
    rating:{
        stars:5,
        count:2197
    },
    pricecents:1899
},
{
    id:'5',
image:'picture5.jpg',
     name:'6 Piece White Dinner Plate Set',
    rating:{
        stars:4,
        count:37
    },
    pricecents:2067
},
{
    id:'6',
    image:'picture6.webp',
     name:'6-Piece Nonstick, Carbon Steel Oven',
    rating:{
        stars:1,
        count:175
    },
    pricecents:3499
},
{
    id:'7',
    image:'picture7.jpg',
     name:'Plain Hooded Fleece Sweatshirt',
    rating:{
        stars:1,
        count:317
    },
    pricecents:2400
},
{
    id:'8',
    image:'picture8.jpg',
     name:'Luxury Towel Set - Graphite Gray',
    rating:{
        stars:1,
        count:144
    },
    pricecents:3599
},
{
    id:'9',
    image:'picture9.jpg',
     name:'Liquid Laundry Detergent, 110 Loads,',
    rating:{
        stars:1,
        count:305
    },
    pricecents:2899
},
{
    id:'10',
    image:'picture10.jpg',
     name:'Waterproof Knit Athletic Sneakers -',
    rating:{
        stars:4,
        count:89
    },
    pricecents:3390
},
{
    id:'11',
    image:'picture11.jpg',
     name:"Women's Chiffon Beachwear Cover Up ",
    rating:{
        stars:1,
        count:235
    },
    pricecents:2070
},
{
    id:'12',
    image:'picture12.jpg',
     name:'Round Sunglasses',
    rating:{
        stars:1,
        count:30
    },
    pricecents:1560
},
{
    id:'13',
    image:'picture13.jpg',
     name:"Women's Two Strap Buckle Sandals - Tan",
    rating:{
        stars:1,
        count:562
    },
    pricecents:2499
},
{id:'14',
    image:'picture14.webp',
     name:'Blackout Curtains Set 4-Pack - Beige',
    rating:{
        stars:1,
        count:232
    },
    pricecents:4599
},
{
    id:'15',
    image:'picture15.jpg',
     name:"Men's Slim-Fit Summer Shorts",
    rating:{
        stars:4,
        count:160
    },
    pricecents:1699
},
{
    id:'16',
    image:'picture16.webp',
     name:'Electric Glass and Steel Hot Tea Water Kettle -',
    rating:{
        stars:5,
        count:846
    },
    pricecents:3074
},
{
    id:'17',
    image:'picture17.jpg',
     name:'Ultra Soft Tissue 2-Ply - 18 Box',
    rating:{
        stars:4,
        count:99
    },
    pricecents:2374
},
{
    id:'18',
    image:'picture18.webp',
     name:'Straw Lifeguard Sun Hat',
    rating:{
        stars:4,
        count:215
    },
    pricecents:2200
},
{
    id:'19',
    image:'picture19.webp',
     name:'Sterling Silver Sky Flower Stud Earrings',
    rating:{
        stars:1,
        count:52
    },
    pricecents:1799
},
{
    id:'20',
    image:'picture20.jpg',
     name:"Women's Stretch Popover Hoodie",
    rating:{
        stars:1,
        count:2465
    },
    pricecents:1374
},
{
    id:'21',
    image:'picture21.jpg',
     name:'Bathroom Bath Rug Mat 20 x 31 Inch - Grey',
    rating:{
        stars:1,
        count:119
    },
    pricecents:1250
},
{
    id:'22',
    image:'picture22.jpg',
     name:"Women's Knit Ballet Flat",
    rating:{
        stars:4,
        count:326
    },
    pricecents:2640
},
{
    id:'23',
    image:'picture23.jpg',
     name:"Men's Regular-Fit Quick-Dry Golf Polo",
    rating:{
        stars:1,
        count:2556
    },
    pricecents:1599
},
{
    id:'24',
    image:'picture24.jpg',
     name:"Trash Can with Foot Pedal - Brushed",
    rating:{
        stars:1,
        count:2286
    },
    pricecents:8300
},
{
    id:'25',
    image:'picture25.webp',
     name:"Duvet Cover Set with Zipper Closure",
    rating:{
        stars:4,
        count:456
    },
    pricecents:2399
},
{
    id:'26',
    image:'picture26.jpg',
     name:"Women's Chunky Cable Beanie - Gray",
    rating:{
        stars:5,
        count:83
    },
    pricecents:1250
},
{
    id:'27',
    image:'picture27.jpg',
     name:"Men's Classic-fit Pleated Chino Pants",
    rating:{
        stars:1,
        count:9017
    },
    pricecents:2290
},
{
    id:'28',
    image:'picture28.jpg',
     name:"Men's Athletic Sneaker",
    rating:{
        stars:4,
        count:229
    },
    pricecents:3890
},
{
    id:'29',
    image:'picture29.webp',
     name:"Men's Navigator Sunglasses Pilot",
    rating:{
        stars:3.5,
        count:42
    },
    pricecents:1690
},
{
    id:'30',
    image:'picture30.jpg',
     name:"Non-Stick Cookware Set, Pots, Pans and",
    rating:{
        stars:1,
        count:511
    },
    pricecents:6797
},
{id:'31',
    image:'picture31.jpg',
     name:"Vanity Mirror with Heavy Base - Chrome",
    rating:{
        stars:1,
        count:130
    },
    pricecents:1649
},
{
    id:'32',
    image:'picture32.webp',
     name:"Women's Fleece Jogger Sweatpant",
    rating:{
        stars:1,
        count:248
    },
    pricecents:2400
},
{id:'33',
    image:'picture33.jpg',
     name:"Double Oval Twist French Wire Earrings -",
    rating:{
        stars:1,
        count:117
    },
    pricecents:2400
},
{
    id:'34',
    image:'picture34.jpg',
     name:"Round Airtight Food Storage Containers - 5",
    rating:{
        stars:4,
        count:126
    },
    pricecents:2899
},
{
    id:'35',
    image:'picture35.jpg',
     name:"Coffeemaker with Glass Carafe and",
    rating:{
        stars:1,
        count:1211
    },
    pricecents:2250
},
{
    id:'36',
    image:'picture36.webp',
     name:"Blackout Curtains Set 42 x 84-Inch - Black, 2",
    rating:{
        stars:1,
        count:363
    },
    pricecents:3099
},
{
    id:'37',
    image:'picture37.webp',
     name:"100% Cotton Bath Towels - 2 Pack, Light Teal",
    rating:{
        stars:1,
        count:93
    },
    pricecents:2110
},
{
    id:'38',
    image:'picture38.jpg',
     name:"Waterproof Knit Athletic Sneakers - Pink",
    rating:{
        stars:4,
        count:89
    },
    pricecents:3390
},
{
    id:'39',
    image:'picture39.jpg',
     name:"Countertop Blender - 64oz, 1400 Watts",
    rating:{
        stars:4,
        count:3
    },
    pricecents:10747
},
{
    id:'40',
    image:'picture40.jpg',
     name:"10-Piece Mixing Bowl Set with Lids - Floral",
    rating:{
        stars:5,
        count:679
    },
    pricecents:3899
},
{
    id:'41',
    image:'picture41.jpg',
     name:"2-Ply Kitchen Paper Towels - 30 Pack",
    rating:{
        stars:1,
        count:1045
    },
    pricecents:5799
},
{
    id:'42',
    image:'picture200.jpg',
     name:"Men's Full-Zip Hooded Fleece Sweatshirt",
    rating:{
        stars:1,
        count:3157
    },
    pricecents:2400
},

]

let producthtml='';

object.forEach((object) =>{
    producthtml+=`<div class="div2">
    <img src="${object.image}" alt="no" width="150px"  class="pic1">
    <p class="para">${object.name}</p>
    <img src="ratings${object.rating.stars}.png" alt="no" class="rating1">
    <p class="num">${object.rating.count}</p>
    <p class="dollar">$${((object.pricecents)/100).toFixed(2)}</p>
    <form>
    <select id="1" name="1" class="dropdown">
        <option value="1">1</option>
        <option value="1">2</option>
        <option value="1">3</option>
        <option value="1">4</option>
        <option value="1">5</option>
        <option value="1">6</option>
        <option value="1">7</option>
        <option value="1">8</option>
        <option value="1">9</option>
        <option value="1">10</option>
    </select>
    <div >

    <button class="add js-button" data-object-id="${object.id}">Add To Cart</button>
    </div>
</div>`
})

/*document.querySelector('.fullpage').innerHTML=producthtml;*/

document.querySelectorAll('.js-button').forEach((button) =>{
   button.addEventListener('click',()=>{
        console.log(button.dataset.objectId)
        const productId=button.dataset.objectId;
        let matchingItem;
       cart.forEach((item) =>{
            if(productId===item.productId){
                matchingItem=item;
        }});
        if(matchingItem){
            matchingItem.quantity+=1;
        }

        else{
        cart.push({
            productId: productId,
            quantity:1
        })
        }
    let cartquantity=0;
    cart.forEach((item) =>{
        cartquantity += item.quantity;
        console.log('3');

    })
    console.log(cartquantity);
        console.log(cart);
    }
    );
});
