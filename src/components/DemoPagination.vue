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
      <div class="page-number2">3</div>
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
  min-height: 20;
  display: flex;
}
.media-icon1:hover {
  display: flex;
  width: 20px;
  height: 20px;
  min-height: 20;
}
.page-label1 {
  position: relative;
  line-height: 20px;
  display: flex;
  min-width: 58;
  width: auto;
  align-self: unset;
  height: auto;
}
.page-label1:hover {
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-small-regular-size);
  line-height: 20px;
  text-align: justify;
  color: var(--color-darkgray);
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  min-width: 58;
}
.content1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-6xs);
  width: auto;
  align-self: unset;
  height: auto;
}
.content1:hover {
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  flex-direction: row;
  gap: var(--gap-6xs);
  align-items: center;
  justify-content: flex-start;
}
.pagination2 {
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
  color: var(--color-darkgray);
}
.pagination2:hover {
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
.page-number {
  width: 33px;
  position: relative;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
}
.page-number:hover {
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-small-regular-size);
  line-height: 20px;
  text-align: center;
  color: var(--neutral-700);
  display: flex;
  width: 33px;
  height: auto;
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
  height: auto;
  gap: var(--gap-3xs);
}
.pagination3:hover {
  display: flex;
  width: 36px;
  height: auto;
  flex-direction: column;
  gap: var(--gap-3xs);
  align-items: center;
  justify-content: center;
  border-radius: var(--br-7xs);
  padding: var(--padding-5xs) var(--padding-12xs);
  box-sizing: border-box;
}
.page-number2 {
  width: 33px;
  position: relative;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
}
.page-number2:hover {
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-small-regular-size);
  line-height: 20px;
  text-align: center;
  color: var(--primary-500-main);
  display: flex;
  width: 33px;
  height: auto;
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
  height: auto;
  gap: var(--gap-3xs);
  color: var(--primary-500-main);
}
.pagination5:hover {
  background-color: var(--neutral-200);
  display: flex;
  width: 36px;
  height: auto;
  flex-direction: column;
  gap: var(--gap-3xs);
  align-items: center;
  justify-content: center;
  border-radius: var(--br-7xs);
  padding: var(--padding-5xs) var(--padding-12xs);
  box-sizing: border-box;
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
  width: auto;
  align-self: unset;
  height: auto;
  gap: var(--gap-0);
  text-align: center;
  font-size: var(--paragraph-small-regular-size);
  color: var(--neutral-700);
  font-family: var(--paragraph-small-regular);
}
.demo-pagination:hover {
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  flex-direction: row;
  gap: var(--gap-0);
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  row-gap: 20px;
}

@media screen and (max-width: 450px) {
  .demo-pagination {
    flex-wrap: wrap;
  }
}
</style>
