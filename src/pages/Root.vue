<template>
  <div class="root">
    <section class="top-bar">
      <header />
      <FrameComponent />
    </section>
    <table />
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
  }
  .pagination {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px 23px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .root {
    width: 100%;
    position: relative;
    background-color: var(--generic-white);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 3px 0px var(--padding-xs);
    box-sizing: border-box;
    gap: var(--gap-4xl);
    line-height: normal;
    letter-spacing: normal;
  }
</style>
