<template>
  <div class="t-head">
    <div class="order-number-column">
      <div class="div1">單號</div>
    </div>
    <div class="div2">款號</div>
    <div class="deadline">Deadline</div>
    <div class="sent-vender">Sent Vender</div>
    <div class="sent-vender">Reply Vender</div>
    <div class="confirem-vender">Confirem Vender</div>
    <div class="status">Status</div>
    <div class="status">Quotation Record</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "THead",
  });
</script>
<style scoped>
  .div1 {
    flex: 1;
    position: relative;
    line-height: 24px;
    font-weight: 500;
  }
  .order-number-column {
    width: 155px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }
  .div2 {
    width: 155px;
    position: relative;
    line-height: 24px;
    font-weight: 500;
    text-align: left;
    display: inline-block;
    flex-shrink: 0;
  }
  .deadline {
    flex: 1;
    position: relative;
    line-height: 24px;
    font-weight: 500;
    text-align: left;
    display: inline-block;
    min-width: 52px;
  }
  .sent-vender {
    width: 125px;
    position: relative;
    line-height: 24px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .confirem-vender {
    width: 160px;
    position: relative;
    line-height: 24px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .status {
    width: 145px;
    position: relative;
    line-height: 24px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .t-head {
    align-self: stretch;
    border-radius: var(--border-radius);
    background-color: var(--color-lavender);
    border-bottom: 1px solid var(--neutral-200);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) var(--padding-9xs) var(--padding-11xs);
    row-gap: 20px;
    text-align: center;
    font-size: var(--paragraph-medium-medium-size);
    color: var(--color-black);
    font-family: var(--paragraph-small-regular);
  }
</style>
