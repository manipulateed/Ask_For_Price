<template>
  <div class="root">
    <section class="top-bar"><Header /><FrameComponent /></section>
    <Table />
    <div class="pagination"><DemoPagination /></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header.vue";
import FrameComponent from "../components/FrameComponent.vue";
import Table from "../components/Table.vue";
import DemoPagination from "../components/DemoPagination.vue";

export default defineComponent({
  name: "Root",
  components: { Header, FrameComponent, Table, DemoPagination },
});
</script>
<style scoped>
.top-bar {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  width: auto;
  height: auto;
  gap: var(--gap-33xs);
  transform: rotate(0deg);
}
.top-bar:hover {
  display: flex;
  align-self: stretch;
  width: auto;
  height: auto;
  flex-direction: column;
  gap: var(--gap-33xs);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  max-width: 100%;
}
.pagination {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) 0px var(--padding-4xl);
  box-sizing: border-box;
  max-width: 100%;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
}
.pagination:hover {
  display: flex;
  align-self: stretch;
  width: auto;
  height: auto;
  flex-direction: row;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: center;
  transform: rotate(0deg);
  padding: 0px var(--padding-xl) 0px var(--padding-4xl);
  box-sizing: border-box;
  max-width: 100%;
}
.root {
  width: 1280px;
  position: relative;
  background-color: var(--generic-white);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px var(--padding-xs);
  box-sizing: border-box;
  gap: var(--gap-4xl);
  line-height: normal;
  letter-spacing: normal;
  height: auto;
}
.root:hover {
  background-color: var(--generic-white);
  display: flex;
  width: 1280px;
  height: auto;
  flex-direction: column;
  gap: var(--gap-4xl);
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px var(--padding-xs);
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
}
</style>
