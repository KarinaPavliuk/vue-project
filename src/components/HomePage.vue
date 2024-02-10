<template>
  <div class="homePage">
    <h2>Home</h2>
    <input type="text" />
    <p>Filter</p>
    <ul>
      <li>Product</li>
      <li>Product</li>
      <li>Product</li>
    </ul>
    {{ info }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
    };
  },
  methods: {},
  mounted() {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => (this.info = response));
  },
};
</script>

<style></style>
