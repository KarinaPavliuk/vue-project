<template>
  <div class="productPage">
    <h2>Product Page</h2>
    <div v-if="product">
      <img :src="product.images[0]" alt="" />
      <p>{{ productId }}</p>
      <p>{{ product.title }}</p>
      <p>Brand: {{ product.brand }}</p>
      <p>{{ product.description }}</p>
      <p>Rating: {{ product.rating }}</p>
      <p>Price: {{ product.price }} $</p>
    </div>
    <button>Update product</button>
    <button>Delete product</button>
  </div>
</template>

<script>
export default {
  props: {
    productId: {
      type: Number,
      required: false,
      default: 1,
    },
  },
  data() {
    return { product: null };
  },
  methods: {
    getSingleProduct(productId) {
      fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => (this.product = data));
    },
  },
  mounted() {
    this.getSingleProduct(this.productId);
  },
  updated() {
    this.getSingleProduct(this.productId);
  },
};
</script>

<style scoped>
img {
  height: 200px;
}
</style>
