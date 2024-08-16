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
  background-color: var(--color-khaki);
  display: flex;
}
.default1-child:hover {
  background-color: var(--color-khaki);
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: var(--br-41xl);
}
.rfq {
  flex: 1;
  position: relative;
  line-height: 11px;
  display: flex;
  font-weight: 700;
  height: auto;
  z-index: 1;
}
.rfq:hover {
  font-weight: 700;
  font-family: var(--font-calibri);
  font-size: var(--paragraph-small-regular-size);
  line-height: 11px;
  text-align: center;
  color: var(--generic-white);
  display: flex;
  flex: 1;
  height: auto;
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
  height: auto;
  gap: var(--gap-0);
  text-align: center;
  font-size: var(--paragraph-small-regular-size);
  color: var(--generic-white);
  font-family: var(--font-calibri);
}
.default1:hover {
  display: flex;
  width: 60px;
  height: auto;
  flex-direction: row;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-5xs) var(--padding-8xs)
    var(--padding-4xs);
  box-sizing: border-box;
}
</style>
