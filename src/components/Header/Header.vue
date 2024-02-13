<template>
  <header class="header">
    <div class="header-container container">
      <h1 class="heading" @click="handleHeadingClick">Products</h1>

      <button type="button" @click="hangleCreateClick">Create</button>
    </div>
  </header>
</template>

<script>
import { bus } from "../../main";

export default {
  data() {
    return {};
  },
  methods: {
    handleHeadingClick() {
      bus.$emit("headerClick");
    },
    hangleCreateClick() {
      bus.$emit("createClick");
    },
  },
};
</script>

<style>
.header {
  margin-bottom: 10px;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    90deg,
    rgb(222 189 243) 0%,
    rgb(149 255 197) 100%
  );
  height: 72px;
  color: white;
}

.heading {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}
</style>
