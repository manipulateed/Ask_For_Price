<template>
  <div class="demo-pagination">
    <div class="pagination2">
      <div class="content1">
        <img class="media-icon1" loading="lazy" alt="" src="/media--icon.svg" />
        <div class="page-label1">Previous</div>
      </div>
    </div>
    <div class="pagination3">
      <div class="page-number">1</div>
    </div>
    <div class="pagination3">
      <div class="page-number">2</div>
    </div>
    <div class="pagination5">
      <div class="page-number">3</div>
    </div>
    <div class="pagination3">
      <div class="page-number">4</div>
    </div>
    <div class="pagination3">
      <div class="page-number">...</div>
    </div>
    <div class="pagination3">
      <div class="page-number">8</div>
    </div>
    <Pagination />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Pagination from "./Pagination.vue";

  export default defineComponent({
    name: "DemoPagination",
    components: { Pagination },
  });
</script>
<style scoped>
  .media-icon1 {
    height: 20px;
    width: 20px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    min-height: 20px;
  }
  .page-label1 {
    position: relative;
    line-height: 20px;
    display: inline-block;
    min-width: 58px;
  }
  .content1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-6xs);
  }
  .pagination2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-5xs);
    text-align: justify;
    color: var(--color-darkgray);
  }
  .page-number {
    width: 33px;
    position: relative;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pagination3 {
    width: 36px;
    border-radius: var(--br-7xs);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-5xs) var(--padding-12xs);
    box-sizing: border-box;
  }
  .pagination5 {
    width: 36px;
    border-radius: var(--br-7xs);
    background-color: var(--neutral-200);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-5xs) var(--padding-12xs);
    box-sizing: border-box;
    color: var(--primary-500-main);
  }
  .demo-pagination {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-11xs) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
    row-gap: 20px;
    text-align: center;
    font-size: var(--paragraph-small-regular-size);
    color: var(--neutral-700);
    font-family: var(--paragraph-small-regular);
  }

  @media screen and (max-width: 450px) {
    .demo-pagination {
      flex-wrap: wrap;
    }
  }
</style>
