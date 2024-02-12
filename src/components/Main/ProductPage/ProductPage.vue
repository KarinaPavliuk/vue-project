<template>
  <div class="productPage">
    <h2>Product Page</h2>
    <div v-if="product">
      <img :src="product.images[0]" alt="" />
      <p>{{ product.id }}</p>
      <p>{{ product.title }}</p>
      <p>Brand: {{ product.brand }}</p>
      <p>{{ product.description }}</p>
      <p>Rating: {{ product.rating }}</p>
      <p>Price: {{ product.price }} $</p>
    </div>
    <button>Update product</button>
    <button @click="handleDeleteClick(product.id)">Delete product</button>
  </div>
</template>

<script>
import { bus } from "../../../main.js";

export default {
  // props: {
  //   productId: {
  //     type: Number,
  //     required: false,
  //     default: 1,
  //   },
  // },
  data() {
    return { product: null, productId: null };
  },
  methods: {
    getSingleProduct(id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => (this.product = data));
    },
    handleDeleteClick: function (id) {
      this.$emit("deleteProduct", id);
      bus.$emit("deleteProduct", id);
    },
  },
  created() {
    bus.$on("clickOnProduct", (data) => (this.productId = data));
  },
  mounted() {
    this.productId && this.getSingleProduct(this.productId);
  },
  // updated() {
  //   this.getSingleProduct(this.productId);
  // },
};
</script>

<style scoped>
img {
  height: 200px;
}
</style>
