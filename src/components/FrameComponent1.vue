<template>
  <div class="parent">
    <div class="div">{{ prop }}</div>
    <div class="all-rfq">{{ allRFQ }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FrameComponent1",
  props: {
    prop: { type: String },
    allRFQ: { type: String },
  },
});
</script>
<style scoped>
.div {
  align-self: stretch;
  height: 55px;
  position: relative;
  line-height: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: auto;
}
.div:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--font-size-17xl);
  line-height: 20px;
  text-align: center;
  color: var(--generic-white);
  display: flex;
  align-self: stretch;
  width: auto;
  height: 55px;
}
.all-rfq {
  align-self: stretch;
  position: relative;
  font-size: var(--paragraph-medium-medium-size);
  line-height: 20px;
  font-weight: 500;
  display: flex;
  width: auto;
  height: auto;
}
.all-rfq:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 20px;
  text-align: center;
  color: var(--generic-white);
  display: flex;
  align-self: stretch;
  width: auto;
  height: auto;
}
.parent {
  flex: 1;
  background-color: var(--color-dimgray-100);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) 0px;
  box-sizing: border-box;
  min-width: 135;
  max-width: 180;
  width: 100%;
  height: auto;
  gap: var(--gap-0);
  text-align: center;
  font-size: var(--font-size-17xl);
  color: var(--generic-white);
  font-family: var(--paragraph-small-regular);
}
.parent:hover {
  background-color: var(--color-dimgray-100);
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  gap: var(--gap-0);
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) 0px;
  box-sizing: border-box;
  min-width: 135;
  max-width: 180;
}

@media screen and (max-width: 750px) {
  .div {
    font-size: var(--font-size-10xl);
    line-height: 16px;
  }
}
@media screen and (max-width: 450px) {
  .div {
    font-size: var(--font-size-3xl);
    line-height: 12px;
  }
}
</style>
