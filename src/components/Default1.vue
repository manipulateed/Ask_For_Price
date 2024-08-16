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
  background-color: var(--color-mediumseagreen);
  display: flex;
}
.default2-child:hover {
  background-color: var(--color-mediumseagreen);
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: var(--br-41xl);
}
.rfq-sent {
  width: 63px;
  position: relative;
  line-height: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 63;
  font-weight: 700;
  height: auto;
  z-index: 1;
}
.rfq-sent:hover {
  font-weight: 700;
  font-family: var(--font-calibri);
  font-size: var(--paragraph-small-regular-size);
  line-height: 11px;
  text-align: center;
  color: var(--generic-white);
  display: flex;
  width: 63px;
  height: auto;
  min-width: 63;
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
  height: auto;
  gap: var(--gap-0);
  text-align: center;
  font-size: var(--paragraph-small-regular-size);
  color: var(--generic-white);
  font-family: var(--font-calibri);
}
.default2:hover {
  display: flex;
  width: 85px;
  height: auto;
  flex-direction: row;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-3xs) var(--padding-8xs);
  box-sizing: border-box;
}
</style>
