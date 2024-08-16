<template>
  <div class="filter-bar-parent">
    <div class="filter-bar">
      <FrameComponent1 prop="10" allRFQ="All RFQ" /><FrameComponent1
        prop="5"
        allRFQ="Purchase Order"
      /><FrameComponent1 prop="3" allRFQ="RFQ Sent" /><FrameComponent1
        prop="2"
        allRFQ="RFQ"
      />
    </div>
    <div class="search-bar-container-parent">
      <div class="search-bar-container">
        <div class="search-input-container">
          <img class="search-icon" loading="lazy" alt="" src="/polygon-1.svg" />
        </div>
        <button class="search-wrapper">
          <a class="search">Search</a>
        </button>
      </div>
      <div class="new-r-f-q-button-container">
        <b class="create-new-rfq">Create New RFQ</b>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameComponent1 from "./FrameComponent1.vue";

  export default defineComponent({
    name: "FrameComponent",
    components: { FrameComponent1 },
  });
</script>
<style scoped>
  .filter-bar {
    width: 911px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xl-5) var(--padding-16xl);
    box-sizing: border-box;
    gap: var(--gap-21xl);
    min-width: 911px;
    max-width: 100%;
  }
  .search-icon {
    height: 20.5px;
    width: 20.5px;
    position: relative;
    object-fit: contain;
  }
  .search-input-container {
    flex: 1;
    border-radius: var(--br-3xs);
    background-color: var(--color-silver);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: var(--padding-10xs-8) var(--padding-7xs) var(--padding-10xs-7);
  }
  .search {
    text-decoration: none;
    height: 26px;
    flex: 1;
    position: relative;
    font-size: var(--font-size-xl);
    line-height: 20px;
    font-weight: 500;
    font-family: var(--paragraph-small-regular);
    color: var(--generic-white);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .search-wrapper {
    cursor: pointer;
    border: none;
    padding: var(--padding-6xs) 0px;
    background-color: var(--color-royalblue-200);
    width: 94px;
    border-radius: var(--br-3xs);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
  .search-wrapper:hover {
    background-color: var(--color-royalblue-100);
  }
  .search-bar-container {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-3xs);
    gap: var(--gap-4xl);
  }
  .create-new-rfq {
    height: 39px;
    flex: 1;
    position: relative;
    line-height: 20px;
    display: flex;
    white-space: pre-wrap;
    align-items: center;
    justify-content: center;
  }
  .new-r-f-q-button-container {
    width: 300px;
    border-radius: var(--br-3xs);
    background-color: var(--color-cornflowerblue);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px var(--padding-32xl);
    box-sizing: border-box;
    white-space: nowrap;
  }
  .search-bar-container-parent {
    width: 340px;
    background-color: var(--generic-white);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-3xs) var(--padding-2xl);
    box-sizing: border-box;
    gap: var(--gap-4xl);
    min-width: 340px;
    max-width: 100%;
    font-size: var(--font-size-xl);
  }
  .filter-bar-parent {
    align-self: stretch;
    border-bottom: 1px solid var(--neutral-200);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: var(--padding-xl) 0px var(--padding-lg);
    max-width: 100%;
    gap: var(--gap-xl);
    z-index: 1;
    margin-top: -20px;
    text-align: center;
    font-size: var(--font-size-17xl);
    color: var(--generic-white);
    font-family: var(--paragraph-small-regular);
  }

  @media screen and (max-width: 1275px) {
    .filter-bar {
      flex: 1;
    }

    .search-bar-container-parent {
      flex: 1;
    }

    .filter-bar-parent {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1100px) {
    .filter-bar {
      flex: 1;
      min-width: 100%;
    }

    .search-bar-container-parent {
      flex: 1;
    }

    .filter-bar-parent {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 750px) {
    .filter-bar {
      flex: 1;
      flex-wrap: wrap;
    }

    .search-bar-container-parent {
      flex: 1;
    }

    .filter-bar-parent {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 450px) {
    .filter-bar {
      flex: 1;
      gap: var(--gap-xl);
    }

    .search {
      font-size: var(--paragraph-medium-medium-size);
      line-height: 16px;
    }

    .new-r-f-q-button-container {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .search-bar-container-parent {
      flex: 1;
      min-width: 100%;
    }

    .filter-bar-parent {
      flex-wrap: wrap;
    }
  }
</style>
