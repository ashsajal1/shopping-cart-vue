<template>
  <div>
    <Cart :cartItem="cartItem" @update-cart="updateCartItems" />
    <!-- <h4>{{ cartItem }}</h4> -->
    <h3>{{ cartItem.length }}</h3>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}
        <div class="img-div">
          <img class="product-image" :src='product.imgUrl'>
        </div>
        <button @click="addToCart(product)">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Cart from './components/Cart.vue'
// localStorage.remove("cart")

let cart = [];

try {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
} catch (error) {
  console.log("error happened while getting cart from localstorage", error)
}

export default {
  components: {
    Cart,
  },

  data() {
    return {
      products: [
        { id: 0, name: "item 1", price: 10, imgUrl: "https://i.ibb.co/xfXzqkW/hamed-darzi-Psz62-UPYx1-E-unsplash.jpg" },
        { id: 1, name: "item 2", price: 70, imgUrl: 'https://i.ibb.co/KzcdckF/mediamodifier-7c-ERndk-Oy-Dw-unsplash.jpg' },
        { id: 2, name: "item 3", price: 40, imgUrl: 'https://i.ibb.co/1T2kmHf/ryan-hoffman-6-Nub980b-I3-I-unsplash.jpg' },
        { id: 3, name: "item 4", price: 50, imgUrl: 'https://i.ibb.co/6tgjB7Y/pexels-david-bartus-297933.jpg' },
      ],

      cartItem: cart,
    }
  },

  methods: {
    addToCart(product) {
      this.cartItem.push(product)
      localStorage.setItem('cart', JSON.stringify(this.cartItem))
    },

    updateCartItems(newCartItems) {
      this.cartItem = newCartItems
    }
  }
}
</script>


<style>
/* Style for product images */
.img-div {
  width: 100px;
  height: 100px;
}

.product-image {
  object-fit: cover;
  max-width: 200px;
  height: auto;
  margin-right: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}


/* Style for the products list */
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}

.product-image {
  max-width: 100px;
  margin-right: 20px;
}

/* Style for the add to cart button */
button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
}

/* Style for the shopping cart */
.cart {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.cart h4 {
  margin-top: 0;
  margin-bottom: 10px;
}

.cart ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.cart li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}

.cart .product-image {
  max-width: 50px;
  margin-right: 20px;
}

.cart button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
}

/* Style for the checkout button */
.checkout-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}
</style>