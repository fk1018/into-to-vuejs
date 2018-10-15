Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      productType: 'Socks',
      brand: 'Vue Master',
      selectedVariant: 0,
      inventory: 100,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      classObject: {
        activeClass: true,
        errorClass: false,
      },
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: './assets/green-socks.png',
          variantQuantity: 0,
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: './assets/blue-socks.png',
          variantQuantity: 10,
        },
      ],
      cart: 0,
    };
  },
  computed: {
    title() {
      return `${this.brand} ${this.productType}`;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      return this.premium ? 'Free' : '2.99';
    },
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart');
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
  },
  template: `
    <div class='product'>
      <div class='product-image'>
        <img :src='image' />
      </div>

      <div class='product-info'>
        <h1>{{ title }}</h1><!-- computed properties are cached until its dependencies changes making computed properties more efficient than a method -->

        <p v-if='inventory > 10'>In Stock</p>
        <p v-else-if='inventory < 10 && inventory > 0'> Almost out of Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>

        <ul>
          <li v-for='detail in details'>{{ detail }}</li>
        </ul>

        <div v-for='(variant, index) in variants'
          class='color-box'
          :key=' variant.variantId'
          :style='{ backgroundColor: variant.variantColor }'
          :class='classObject'
          @mouseover='updateProduct(index)'> <!-- use key attribute to help vue keep track of the nodes -->
        </div>

        <button 
          :disabled='!inStock'
          :class='{ disabledButton: !inStock }'
          @click='addToCart'>Add to Cart
        </button>

      </div><!-- .product-info -->
    </div><!-- .product -->
  `,
});

const app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: 0,
  },
  methods: {
    updateCart() {
      this.cart += 1;
    },
  },
});
