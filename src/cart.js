const cartContainer = document.querySelector('.cart_container');

let openCartHandler = document.querySelector('.cart-icon');
const cartSection = document.querySelector('.section-cart')
const cartBg = document.querySelector('.cart_bg')
const closecart = document.querySelector('.closecart');


function getCartHeight() {
  let cart = document.querySelector('.cart');

  cartSection.classList.toggle('visible')
  cart.classList.toggle('visible')


}

openCartHandler.addEventListener('click', getCartHeight)
closecart.addEventListener('click', getCartHeight)
cartBg.addEventListener('click', getCartHeight)


// promo input start///
const promoInput = document.querySelector('[data-promoCode]');
const promoBtn = document.querySelector('.promoBtn')

const promoInputHandler = () => {
  if (promoInput.style.height) {
    promoInput.style.height = null;
  } else {
    promoInput.style.height = promoInput.scrollHeight + 'px';
  }
  promoBtn.classList.toggle('active')
}
promoBtn.addEventListener('click', promoInputHandler);
// promo input end///




// *** displaying products to the DOM start ///// //***** */

/// settimg up the products
const cartTotal = document.getElementById('totalAmount')
const cartItemText = document.querySelector('.count-text')
const cartItem = document.getElementById('cart-itemCount');
const cartMainContainer = document.querySelector('.cart_products');
const clearCart = document.querySelector('.clear-cart');
let productsDom = document.querySelector('.item_box');


let cart = [];
//  buttonsDom
let buttonsDom = [];

class Product {

  constructor(image, description, price, id) {
    this.image = image;
    this.id = id;
    this.price = price;
    this.description = description;
  }

}



// getting all products
class ProductList {

  products = [
    new Product(
      'image/all match sheo.jpg',
      'all match men shoe',
      78.99,
      'ehjejeevuy',
    ),

    new Product(
      'image/ashion young man.jpg',
      'ashion young men shoe',
      14000,
      'bbjkedk',
    ),

    new Product(
      'image/can2.jpeg',
      'canvas white',
      12000,
      'kfmfmdkjn',
    ),
    new Product(
      'image/can1.jpeg',
      'all match men shoe',
      78.99,
      'ygydhg',
    ),
    new Product(
      'image/ladies kito sandals.webp',
      'ladies kito sandals',
      4500,
      'ghsjygsuy',
    ),
    new Product(
      'image/iroko canvas.jpeg',
      'classic iroko canvas',
      10000,
      'vcsisi',
    ),
    new Product(
      'image/fire and ice.jpg',
      'fire and ice',
      18.877,
      'bsvhsyt',
    ),
    new Product(
      'image/red4.jpg',
      'fire and ice',
      20000,
      'bnbvstt',
    ),
    new Product(
      'image/tran1-sub.webp',
      'men black swed',
      34800,
      'adsawef',
    ),
    new Product(
      'image/best1.webp',
      'black oliver',
      12400,
      'bdvhfdiik',
    ),
    new Product(
      'image/red1.jpg',
      'men  canvas',
      124.78,
      'eghfvj',
    ),
    new Product(
      'image/red2.jpg',
      'swed',
      23400,
      'vbgrtsk',
    ),
    //
    new Product(
      'image/whitecan.jpeg',
      'white swedish',
      78.99,
      ' vdghvgd',
    ),
    new Product(
      'image/can4.jpeg',
      'white sneaker canvas',
      9000,
      'ghfhfj',
    ),
    new Product(
      'image/can3.jpeg',
      'sneakers black',
      3600,
      'vbgrtsk',
    ),
    new Product(
      'image/fashion men and women.jpeg',
      'sneaker',
      23400,
      'vghrtkg',
    ),

  ]

  render() {
    let display = this.products.map((item) => {
      //  let {img,desc,price} = item
      return `       
              <article class="item">
              <figure class="item_img">
                <img src="${item.image}" alt="shoe">
              </figure>
              <div class="item_details">
               <h1 class="item_name">${item.description}</h1>
               <h3 class="item_price">
                 <span>N</span>${item.price}
               </h3>
               <div class="item_rating">
                 <svg>
                   <use xlink:href="image/sprite.svg#icon-star1"></use>
                 </svg>
                 <svg>
                   <use xlink:href="image/sprite.svg#icon-star1"></use>
                 </svg>
                 <svg>
                   <use xlink:href="image/sprite.svg#icon-star1"></use>
                 </svg>
                 <svg>
                   <use xlink:href="image/sprite.svg#icon-star1"></use>
                 </svg>
                 <svg>
                   <use xlink:href="image/sprite.svg#icon-star1"></use>
                 </svg>
               </div>
 
               <button class="item_button" data-id="${item.id}">
                 add to cart
               </button>
              </div>
            </article>
          `
    }).join('');
    productsDom.innerHTML = display
  }


  getBagBtns() {
    let btns = [...document.querySelectorAll('.item_button')];

    buttonsDom = btns;
    btns.forEach((btn) => {
      let id = btn.dataset.id;
      let inCart = cart.find(item => item.id === id);
      if (inCart) {
        btn.innerText = "In Cart";
        btn.disabled = true;
        btn.style.background = '#c84406';
      }

      btn.addEventListener('click', (ev) => {
        ev.target.innerText = 'In Cart';
        ev.target.disabled = true;
        ev.target.style.background = '#c84406';

        // get product from products
        let cartItem = { ...Storage.getProduct(id), amount: 1 };
        // add product to cart
        cart = [...cart, cartItem];
        // save cart in local storage
        Storage.saveCart(cart);
        //set cart values
        this.setCartValues(cart)

        this.addCartItem(cartItem)
        // display cart item

      });

    });
  }





  setCartValues(cart) {
    let tempTotal = 0;
    let itemsTotal = 0;

    cart.map(item => {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount
    })
    cartTotal.innerHTML = 'N' + parseFloat(tempTotal.toFixed());
    cartItem.innerText = itemsTotal;
    cartItemText.innerText = 'You have'
  }

  addCartItem(item) {

    let article = document.createElement('article')
    article.className = 'cart_prod'
    article.innerHTML = `
            <div class="cart_prod--img">
            <img src="${item.image}" alt="">
          </div>
          <div class="cart_prod--detail">
            <div class="cart_prod--box">
              <h1>${item.description}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  iure!</p>
              <div class="cart_prod--quantity">
                <div>
                  <span>size</span>
                  <select name="size" id="">
                  <option value="5.5">5.5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8.9">8.9</option>
                  </select>
                </div>
                <div class="">
                  <span>quantity</span>
                  <select name="quantity" data-id=${item.id} class="quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="4">5</option>
                  <option value="4">6</option>
                  <option value="4">7</option>
                  <option value="4">8</option>
                  <option value="4">9</option>
                  <option value="4">10</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="cart_prod--delect">
                <svg>
                  <use xlink:href="image/sprite.svg#icon-heart1"></use>
                </svg>
                <svg class="removeItem" data-id=${item.id}>
                  <use xlink:href="image/sprite.svg#icon-trashcan"></use>
                </svg>
            </div>
          </div>
          <div class="cart_prod--price">
             N${item.price}
          </div>
            `
    cartMainContainer.prepend(article);
    let cartMessage = document.querySelector('.cart-message');
    cartMessage.classList.add('visible')
    setTimeout(() => cartMessage.classList.remove('visible'), 2000)
  }

  setUpApp() {
    cart = Storage.getCart();
    this.setCartValues(cart);
    this.populateCart(cart);
  }

  populateCart(cart) {
    cart.forEach(item => this.addCartItem(item))
  }


  cartLogic() {
    clearCart.addEventListener('click', () => {
      this.clearCart()
    })

    cartMainContainer.addEventListener('click', ev => {
      if (ev.target.classList.contains('removeItem')) {
        let removeItem = ev.target;
        let id = removeItem.dataset.id;
        cartMainContainer.removeChild(removeItem.parentElement.parentElement.parentElement)
        this.removeItem(id);

      }
      else if (ev.target.classList.contains('quantity')) {
        let quantity = ev.target;
        let id = quantity.dataset.id;
        let tempItem = cart.find(item => item.id === id);
        // tempItem.amount += 1
        tempItem.amount = quantity.value;

        console.log(tempItem)
        // Storage.saveCart(cart);
        // this.setCartValues(cart);
      }

    })
  }

  clearCart() {
    let cartItems = cart.map(item => item.id);
    cartItems.forEach(id => this.removeItem(id));
    console.log(cartMainContainer.children);


    while (cartMainContainer.children.length > 0) {
      cartMainContainer.removeChild(cartMainContainer.children[0])
    }

  }

  removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    this.setCartValues(cart);
    Storage.saveCart(cart);
    let button = this.getSingleBtn(id);
    button.disabled = false;
    button.innerText = 'add to cart';
    button.style.background = '#000';
  }

  getSingleBtn(id) {
    return buttonsDom.find(btn => btn.dataset.id === id);
  }
}

// class Ui {


// }


class Storage {
  static saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products))
  }
  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem('products'))
    return products.find(product => product.id === id)
  }
  static saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  static getCart() {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  }
}


document.addEventListener('DOMContentLoaded', () => {
  let product = new ProductList(this.products);
  product.render()
  product.setUpApp()
  let prodItem = product.products
  // setupapp

  Storage.saveProducts(prodItem)
  product.getBagBtns()
  product.cartLogic();
})




class Filter {

  constructor() { }

  searchFilter() {
    let prodEl = new ProductList();
    let item = prodEl.products;
    let desc = item.filter((item) => {
      let description = item.description;
      //  console.log(description.includes('sneaker'))
    })

  }

}

let i = new Filter();
i.searchFilter()



// *** displaying products to the DOM end ///// //***** */






