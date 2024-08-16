<template>
  <div class="pagination1">
    <div class="content">
      <div class="page-label">Next</div>
      <img class="media-icon" loading="lazy" alt="" src="/media--icon-1.svg" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Pagination",
  });
</script>
<style scoped>
  .page-label {
    position: relative;
    line-height: 20px;
    display: inline-block;
    min-width: 32px;
  }
  .media-icon {
    height: 20px;
    width: 20px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    min-height: 20px;
  }
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .pagination1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-5xs);
    text-align: justify;
    font-size: var(--paragraph-small-regular-size);
    color: var(--primary-500-main);
    font-family: var(--paragraph-small-regular);
  }
</style>
