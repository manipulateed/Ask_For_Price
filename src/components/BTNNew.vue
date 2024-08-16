<template>
  <div class="btn-new">
    <a class="label">Patrick Lin</a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BTNNew",
});
</script>
<style scoped>
.label {
  text-decoration: none;
  position: relative;
  line-height: 20px;
  font-weight: 500;
  color: inherit;
  display: flex;
  min-width: 81;
  white-space: nowrap;
  width: auto;
  align-self: unset;
  height: auto;
}
.label:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 20px;
  text-align: center;
  color: var(--neutral-700);
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  min-width: 81;
  white-space: nowrap;
}
.btn-new {
  border-radius: var(--btn-radius);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-5xl);
  box-sizing: border-box;
  width: auto;
  align-self: unset;
  height: auto;
  gap: var(--gap-3xs);
  text-align: center;
  font-size: var(--paragraph-medium-medium-size);
  color: var(--neutral-700);
  font-family: var(--paragraph-small-regular);
}
.btn-new:hover {
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  flex-direction: row;
  gap: var(--gap-3xs);
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: var(--btn-radius);
  padding: var(--padding-3xs) var(--padding-5xl);
  box-sizing: border-box;
}
</style>
