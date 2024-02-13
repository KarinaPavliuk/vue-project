<template>
  <div class="backdrop">
    <div class="modal">
      <form class="modal-form" action="submit" @submit.prevent="handleSubmit">
        <button class="close-button" type="button" @click="close">x</button>

        <p>
          <label for="title">Title</label>
          <input
            name="title"
            type="text"
            :value="product.title"
            placeholder="Title"
            id="title"
          />
        </p>
        <p>
          <label for="brand">Brand</label>
          <input
            name="brand"
            type="text"
            :value="product.brand"
            placeholder="Brand"
            id="brand"
          />
        </p>
        <p>
          <label for="description">Description</label>
          <input
            name="description"
            type="text"
            :value="product.description"
            placeholder="Description"
            id="description"
          />
        </p>
        <p>
          <label for="rating">Rating</label>
          <input
            name="rating"
            type="text"
            :value="product.rating"
            placeholder="Rating"
            id="rating"
          />
        </p>
        <p>
          <label for="price">Price</label>
          <input
            name="price"
            type="text"
            :value="product.price"
            placeholder="Prise"
            id="price"
          />
        </p>
        <button class="submit-button" type="submit" @click="close">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { bus } from "../../../main.js";

export default {
  data() {
    return {
      product: null,
    };
  },
  methods: {
    close() {
      bus.$emit("close");
    },
    handleSubmit(event) {
      this.product.title = event.target.elements.title.value;
      this.product.brand = event.target.elements.brand.value;
      this.product.description = event.target.elements.description.value;
      this.product.rating = event.target.elements.rating.value;
      this.product.price = event.target.elements.price.value;
    },
  },

  created() {
    bus.$on("product", (data) => {
      this.product = data;
    });
  },
};
</script>

<style scoped>
p {
  display: flex;
  width: 100%;
  align-items: center;
}
label {
  width: 90px;
  display: flex;
  padding: 9px 4px 9px 4px;
  background-color: rgb(222 189 243);
  align-items: center;
  justify-content: center;
  border-radius: 8px 0 0 8px;
  z-index: 99;
}
input {
  width: calc(100% - 90px);
  padding: 8px;
  font-size: 16px;
  border-radius: 0 8px 8px 0;
  border: 1px solid #b7b6b6;
  outline-color: gray;
  z-index: 100;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(93, 78, 102, 0.75);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 538px;
  height: 340px;
  background-color: #fcfcfc;
  border-radius: 4px;
  padding: 24px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.modal-form {
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 0.5em;
}
.close-button {
  margin-left: auto;
}
.submit-button {
  margin: 0 auto;
}
</style>
