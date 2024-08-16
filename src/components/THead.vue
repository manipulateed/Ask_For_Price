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
  display: flex;
  height: auto;
}
.div1:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: left;
  color: var(--color-black);
  display: flex;
  flex: 1;
  height: auto;
}
.order-number-column {
  width: 155px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  gap: var(--gap-3xs);
  text-align: left;
}
.order-number-column:hover {
  display: flex;
  width: 155px;
  height: auto;
  flex-direction: row;
  gap: var(--gap-3xs);
  align-items: flex-start;
  justify-content: flex-start;
}
.div2 {
  width: 155px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  text-align: left;
  display: flex;
  flex-shrink: 0;
  height: auto;
}
.div2:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: left;
  color: var(--color-black);
  display: flex;
  width: 155px;
  height: auto;
}
.deadline {
  flex: 1;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  text-align: left;
  display: flex;
  min-width: 52;
  height: auto;
}
.deadline:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: left;
  color: var(--color-black);
  display: flex;
  flex: 1;
  height: auto;
  min-width: 52;
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
  height: auto;
}
.sent-vender:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: center;
  color: var(--color-black);
  display: flex;
  width: 125px;
  height: auto;
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
  height: auto;
}
.confirem-vender:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: center;
  color: var(--color-black);
  display: flex;
  width: 160px;
  height: auto;
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
  height: auto;
}
.status:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: center;
  color: var(--color-black);
  display: flex;
  width: 145px;
  height: auto;
}
.t-head {
  align-self: stretch;
  border-radius: var(--border-radius);
  background-color: var(--color-lavender);
  border-bottom: 1px solid var(--neutral-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-9xs) var(--padding-11xs);
  row-gap: 20px;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  text-align: center;
  font-size: var(--paragraph-medium-medium-size);
  color: var(--color-black);
  font-family: var(--paragraph-small-regular);
}
.t-head:hover {
  background-color: var(--color-lavender);
  display: flex;
  align-self: stretch;
  width: auto;
  height: auto;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: var(--border-radius);
  padding: var(--padding-9xs) var(--padding-9xs) var(--padding-11xs);
  box-sizing: border-box;
  row-gap: 20px;
}
</style>
