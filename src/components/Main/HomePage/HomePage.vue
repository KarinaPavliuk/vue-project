<template>
  <div class="homePage">
    <input v-model="query" @keyup.enter="searchProducts(query)" type="text" />

    <div>
      <label for="sort-select">Sort:</label>
      <select
        v-model="option"
        @change="sort(option)"
        name="sort"
        id="sort-select"
      >
        <option value="title">Sort by title</option>
        <option value="rating">Sort by rating</option>
      </select>
    </div>

    <ul>
      <li v-for="product in products" @click="openProductPage(product.id)">
        <img :src="product.thumbnail" alt="" />
        <p>{{ product.title }}</p>
        <p>{{ product.rating }}</p>
        <p>{{ product.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      option: null,
      products: null,
      productId: 1,
    };
  },
  methods: {
    getPosts() {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => (this.products = data.products));
    },
    searchProducts(productName) {
      fetch(`https://dummyjson.com/products/search?q=${productName}`)
        .then((res) => res.json())
        .then((data) => (this.products = data.products));
    },
    sort(option) {
      if (option === "title") {
        return this.products.sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );
      } else if (option === "rating") {
        return this.products.sort((a, b) => b.rating - a.rating);
      }
    },
    openProductPage: function (productId) {
      console.log("id", productId);
      this.productId = productId;
      console.log("this.id", this.productId);
      this.$emit("clickOnproduct", this.productId);
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style scoped>
img {
  height: 50px;
}
</style>
