const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/green-socks.png',
    inventory: 100,
    inStock: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
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
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
  },
});
