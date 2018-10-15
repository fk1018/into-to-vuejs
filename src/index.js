const app = new Vue({
  el: '#app',
  data: {
    productType: 'Socks',
    brand: 'Vue Master',
    image: './assets/green-socks.png',
    inventory: 100,
    inStock: true,
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
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/blue-socks.png',
      },
    ],
    cart: 0,
  },
  computed: {
    title() {
      return `${this.brand} ${this.productType}`;
    },
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
  },
});
