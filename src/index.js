const app = new Vue({
  el: '#app',
  data: {
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
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
  },
});
