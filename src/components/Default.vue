<template>
  <div class="default3">
    <img class="default3-child" loading="lazy" alt="" :src="rectangle7" />
    <b class="purchase-order">Purchase Order</b>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Default",
    props: {
      rectangle7: { type: String },
    },
  });
</script>
<style scoped>
  .default3-child {
    height: 100%;
    width: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: var(--br-41xl);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .purchase-order {
    flex: 1;
    position: relative;
    line-height: 11px;
    display: inline-block;
    min-width: 92px;
    z-index: 1;
  }
  .default3 {
    width: 110px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) var(--padding-4xs) var(--padding-8xs);
    box-sizing: border-box;
    position: relative;
    text-align: center;
    font-size: var(--paragraph-small-regular-size);
    color: var(--generic-white);
    font-family: var(--font-calibri);
  }
</style>
