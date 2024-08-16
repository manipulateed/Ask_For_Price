<template>
  <div class="btn-new">
    <img class="left-icon" alt="" src="/left-icon.svg" />
    <a class="label">Patrick Lin</a>
    <img class="left-icon" alt="" src="/left-icon.svg" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "BTNNew",
  });
</script>
<style scoped>
  .left-icon {
    height: 20px;
    width: 20px;
    position: relative;
    display: none;
    min-height: 20px;
  }
  .label {
    text-decoration: none;
    position: relative;
    line-height: 20px;
    font-weight: 500;
    color: inherit;
    display: inline-block;
    min-width: 81px;
    white-space: nowrap;
  }
  .btn-new {
    border-radius: var(--btn-radius);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-5xl);
    gap: var(--gap-3xs);
    text-align: center;
    font-size: var(--paragraph-medium-medium-size);
    color: var(--neutral-700);
    font-family: var(--paragraph-small-regular);
  }
</style>
