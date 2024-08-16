<template>
  <header class="header">
    <div class="header1">
      <div class="container">
        <div class="left-content">
          <div class="logo">
            <img
              class="makalot-logo-icon"
              loading="lazy"
              alt=""
              src="/makalot-logo@2x.png"
            />
          </div>
          <div class="link-wrapper">
            <a class="link">RFQ List</a>
          </div>
          <div class="link-container">
            <a class="link1">New Quotation</a>
          </div>
          <div class="link-container">
            <a class="link2">Approve Form</a>
          </div>
        </div>
        <div class="btn-new-wrapper"><BTNNew /></div>
        <img class="vector-icon" loading="lazy" alt="" src="/vector.svg" />
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BTNNew from "./BTNNew.vue";

export default defineComponent({
  name: "Header",
  components: { BTNNew },
});
</script>
<style scoped>
.makalot-logo-icon {
  height: 56.9px;
  width: 70px;
  position: relative;
  object-fit: cover;
  display: flex;
}
.makalot-logo-icon:hover {
  display: flex;
  width: 70px;
  height: 56.9px;
}
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 4.44px 0px;
  box-sizing: border-box;
  width: auto;
  align-self: unset;
  height: auto;
  gap: 8.89px;
}
.logo:hover {
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  flex-direction: row;
  gap: 8.89px;
  align-items: center;
  justify-content: flex-start;
  padding: 4.44px 0px;
  box-sizing: border-box;
}
.link {
  text-decoration: none;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  color: inherit;
  display: flex;
  min-width: 64;
  white-space: nowrap;
  width: auto;
  align-self: unset;
  height: auto;
}
.link:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: right;
  color: var(--neutral-700);
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  min-width: 64;
  white-space: nowrap;
}
.link-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl-9) 0px 0px;
  box-sizing: border-box;
  width: auto;
  align-self: unset;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
}
.link-wrapper:hover {
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  flex-direction: column;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  padding: var(--padding-xl-9) 0px 0px;
  box-sizing: border-box;
}
.link1 {
  text-decoration: none;
  align-self: stretch;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  color: inherit;
  display: flex;
  min-width: 115;
  white-space: nowrap;
  width: auto;
  height: auto;
}
.link1:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: right;
  color: var(--neutral-700);
  display: flex;
  align-self: stretch;
  width: auto;
  height: auto;
  min-width: 115;
  white-space: nowrap;
}
.link-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl-9) 0px 0px;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
}
.link-container:hover {
  display: flex;
  flex: 1;
  height: auto;
  flex-direction: column;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  padding: var(--padding-xl-9) 0px 0px;
  box-sizing: border-box;
}
.link2 {
  text-decoration: none;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  color: inherit;
  display: flex;
  min-width: 109;
  white-space: nowrap;
  width: auto;
  align-self: unset;
  height: auto;
}
.link2:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: right;
  color: var(--neutral-700);
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  min-width: 109;
  white-space: nowrap;
}
.left-content {
  width: 462px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-15xl-7);
  max-width: 100%;
  height: auto;
}
.left-content:hover {
  display: flex;
  width: 462px;
  height: auto;
  flex-direction: row;
  gap: var(--gap-15xl-7);
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
}
.btn-new-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px 0px;
  box-sizing: border-box;
  width: auto;
  align-self: unset;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  text-align: center;
}
.btn-new-wrapper:hover {
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  flex-direction: column;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  padding: var(--padding-3xs) 0px 0px;
  box-sizing: border-box;
}
.vector-icon {
  height: 20px;
  width: 20.6px;
  position: absolute;
  margin: 0 !important;
  top: 20px;
  right: 119.4px;
  background-color: var(--neutral-900);
  display: flex;
  z-index: 1;
}
.vector-icon:hover {
  background-color: var(--neutral-900);
  display: flex;
  width: 20.6px;
  height: 20px;
}
.container {
  height: 61px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px 0px var(--padding-2xs);
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  gap: var(--gap-xl);
}
.container:hover {
  display: flex;
  flex: 1;
  height: 61px;
  flex-direction: row;
  gap: var(--gap-xl);
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px 0px var(--padding-2xs);
  box-sizing: border-box;
  max-width: 100%;
}
.header1 {
  flex: 1;
  box-shadow: 0px -1px 0px #e5e7eb inset;
  background-color: var(--generic-white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) 0px var(--padding-base) var(--padding-11xl);
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  gap: var(--gap-3xs);
}
.header1:hover {
  background-color: var(--generic-white);
  display: flex;
  flex: 1;
  height: auto;
  flex-direction: row;
  gap: var(--gap-3xs);
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) 0px var(--padding-base) var(--padding-11xl);
  box-sizing: border-box;
  box-shadow: 0px -1px 0px #e5e7eb inset;
  max-width: 100%;
}
.header {
  align-self: stretch;
  height: 89px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  width: auto;
  gap: var(--gap-0);
  text-align: right;
  font-size: var(--paragraph-medium-medium-size);
  color: var(--neutral-700);
  font-family: var(--paragraph-small-regular);
}
.header:hover {
  display: flex;
  align-self: stretch;
  width: auto;
  height: 89px;
  flex-direction: row;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
}

@media screen and (max-width: 450px) {
  .left-content {
    gap: var(--gap-mid);
  }
}
</style>
