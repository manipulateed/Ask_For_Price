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
  display: flex;
  min-width: 32;
  width: auto;
  align-self: unset;
  height: auto;
}
.page-label:hover {
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-small-regular-size);
  line-height: 20px;
  text-align: justify;
  color: var(--primary-500-main);
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  min-width: 32;
}
.media-icon {
  height: 20px;
  width: 20px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 20;
  display: flex;
}
.media-icon:hover {
  display: flex;
  width: 20px;
  height: 20px;
  min-height: 20;
}
.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  width: auto;
  align-self: unset;
  height: auto;
}
.content:hover {
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  flex-direction: row;
  gap: var(--gap-5xs);
  align-items: center;
  justify-content: flex-start;
}
.pagination1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs);
  box-sizing: border-box;
  width: auto;
  align-self: unset;
  height: auto;
  gap: var(--gap-5xs);
  text-align: justify;
  font-size: var(--paragraph-small-regular-size);
  color: var(--primary-500-main);
  font-family: var(--paragraph-small-regular);
}
.pagination1:hover {
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  flex-direction: row;
  gap: var(--gap-5xs);
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs);
  box-sizing: border-box;
}
</style>
