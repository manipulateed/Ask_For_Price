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
  }
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-8xs-4) 0px;
  }
  .link {
    text-decoration: none;
    position: relative;
    line-height: 24px;
    font-weight: 500;
    color: inherit;
    display: inline-block;
    min-width: 64px;
    white-space: nowrap;
  }
  .link-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl-9) 0px 0px;
  }
  .link1 {
    text-decoration: none;
    align-self: stretch;
    position: relative;
    line-height: 24px;
    font-weight: 500;
    color: inherit;
    display: inline-block;
    min-width: 115px;
    white-space: nowrap;
  }
  .link-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl-9) 0px 0px;
  }
  .link2 {
    text-decoration: none;
    position: relative;
    line-height: 24px;
    font-weight: 500;
    color: inherit;
    display: inline-block;
    min-width: 109px;
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
  }
  .btn-new-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) 0px 0px;
    text-align: center;
  }
  .vector-icon {
    height: 20px;
    width: 20.6px;
    position: absolute;
    margin: 0 !important;
    top: 20px;
    right: 119.4px;
    z-index: 1;
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
    text-align: right;
    font-size: var(--paragraph-medium-medium-size);
    color: var(--neutral-700);
    font-family: var(--paragraph-small-regular);
  }

  @media screen and (max-width: 450px) {
    .left-content {
      gap: var(--gap-mid);
    }
  }
</style>
