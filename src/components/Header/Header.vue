<template>
  <div class="header">
    <h1>Header</h1>
    <button type="button">Create</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.header {
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
</style>
