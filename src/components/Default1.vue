<template>
  <div class="default2">
    <img class="default2-child" loading="lazy" alt="" src="/rectangle-6.svg" />
    <b class="rfq-sent">RFQ Sent</b>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Default1",
  });
</script>
<style scoped>
  .default2-child {
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
  .rfq-sent {
    width: 63px;
    position: relative;
    line-height: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    min-width: 63px;
    z-index: 1;
  }
  .default2 {
    width: 85px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) var(--padding-3xs) var(--padding-8xs);
    box-sizing: border-box;
    position: relative;
    text-align: center;
    font-size: var(--paragraph-small-regular-size);
    color: var(--generic-white);
    font-family: var(--font-calibri);
  }
</style>
