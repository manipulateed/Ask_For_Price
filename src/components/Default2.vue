<template>
  <div class="default1">
    <img class="default1-child" loading="lazy" alt="" src="/rectangle-5.svg" />
    <b class="rfq">RFQ</b>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Default2",
  });
</script>
<style scoped>
  .default1-child {
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
  .rfq {
    flex: 1;
    position: relative;
    line-height: 11px;
    z-index: 1;
  }
  .default1 {
    width: 60px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) var(--padding-5xs) var(--padding-8xs)
      var(--padding-4xs);
    box-sizing: border-box;
    position: relative;
    text-align: center;
    font-size: var(--paragraph-small-regular-size);
    color: var(--generic-white);
    font-family: var(--font-calibri);
  }
</style>
