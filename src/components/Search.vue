<template>
  <div class="search">
    <div class="value">Value</div>
    <img class="x-icon" loading="lazy" alt="" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "",
});
</script>
<style scoped>
.value {
  flex: 1;
  position: relative;
  line-height: 100%;
  display: flex;
  height: auto;
}
.value:hover {
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 100%;
  text-align: left;
  color: var(--text-default-default);
  display: flex;
  flex: 1;
  height: auto;
}
.x-icon {
  height: 16px;
  width: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  gap: var(--gap-0);
}
.x-icon:hover {
  display: flex;
  width: 16px;
  height: 16px;
  gap: var(--gap-0);
}
.search {
  width: 240px;
  position: relative;
  border-radius: var(--radius-full);
  background-color: var(--generic-white);
  border: 1px solid var(--border-default-default);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-mini) var(--padding-3xs)
    var(--space-400);
  gap: var(--space-200);
  line-height: normal;
  letter-spacing: normal;
  height: auto;
  text-align: left;
  font-size: var(--paragraph-medium-medium-size);
  color: var(--text-default-default);
  font-family: var(--paragraph-small-regular);
}
.search:hover {
  background-color: var(--generic-white);
  display: flex;
  width: 240px;
  height: auto;
  flex-direction: row;
  gap: var(--space-200);
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: var(--radius-full);
  padding: var(--padding-3xs) var(--padding-mini) var(--padding-3xs)
    var(--space-400);
  box-sizing: border-box;
  border: 1px solid var(--border-default-default);
  line-height: normal;
  letter-spacing: normal;
}
</style>
