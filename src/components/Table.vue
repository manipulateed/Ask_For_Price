<template>
  <section class="table">
    <div class="table-content">
      <thead />
      <div class="content-">
        <div class="request-cells">
          <div class="rfq001">RFQ001</div>
        </div>
        <div class="gp151651">GP151651</div>
        <div class="div3">2024/11/10</div>
        <div class="sent">20</div>
        <div class="sent">10</div>
        <div class="status-cells">
          <div class="na">N/A</div>
        </div>
        <div class="type-cells">
          <Default2 />
          <div class="reference"></div>
        </div>
      </div>
      <div class="content-">
        <div class="request-cells">
          <div class="rfq001">RFQ002</div>
        </div>
        <div class="gp151651">GP543264</div>
        <div class="div3">2024/11/18</div>
        <div class="sent">20</div>
        <div class="sent">10</div>
        <div class="status-cells">
          <div class="na">N/A</div>
        </div>
        <div class="default1-parent">
          <Default2 />
          <div class="reference1"></div>
        </div>
      </div>
      <div class="content-">
        <div class="request-cells">
          <div class="rfq001">RFQ003</div>
        </div>
        <div class="gp151651">GP788922</div>
        <div class="div3">2024/11/14</div>
        <div class="sent">20</div>
        <div class="sent">10</div>
        <div class="na-container">
          <div class="gpp">N/A</div>
        </div>
        <div class="default2-parent">
          <Default1 />
          <div class="reference2"></div>
        </div>
      </div>
      <div class="content-">
        <div class="request-cells">
          <div class="rfq001">RFQ004</div>
        </div>
        <div class="gp151651">GP177865</div>
        <div class="div3">2024/11/16</div>
        <div class="sent">20</div>
        <div class="sent">10</div>
        <div class="na-container">
          <div class="gpp">N/A</div>
        </div>
        <div class="default2-parent">
          <Default1 />
          <div class="reference2"></div>
        </div>
      </div>
      <div class="content-">
        <div class="request-cells">
          <div class="rfq001">RFQ005</div>
        </div>
        <div class="gp151651">GP756757</div>
        <div class="div3">2024/11/20</div>
        <div class="sent">20</div>
        <div class="sent">10</div>
        <div class="na-container">
          <div class="gpp">N/A</div>
        </div>
        <div class="default2-container">
          <Default1 />
          <div class="reference4"></div>
        </div>
      </div>
      <div class="content-">
        <div class="request-cells">
          <div class="rfq001">RFQ006</div>
        </div>
        <div class="gp151651">GP176678</div>
        <div class="div3">2024/11/09</div>
        <div class="sent">20</div>
        <div class="sent">10</div>
        <div class="gpp-wrapper">
          <div class="gpp">GPP</div>
        </div>
        <div class="default3-parent">
          <Default rectangle7="/rectangle-7.svg" />
          <div class="reference2"></div>
        </div>
      </div>
      <div class="content-">
        <div class="request-cells">
          <div class="rfq001">RFQ007</div>
        </div>
        <div class="gp151651">GP978456</div>
        <div class="div3">2024/11/04</div>
        <div class="sent">20</div>
        <div class="sent">10</div>
        <div class="gpp-wrapper">
          <div class="gpp">GPA</div>
        </div>
        <div class="default3-parent">
          <Default rectangle7="/rectangle-7.svg" />
          <div class="reference2"></div>
        </div>
      </div>
      <div class="content-">
        <div class="request-cells">
          <div class="rfq001">RFQ008</div>
        </div>
        <div class="gp151651">GP175767</div>
        <div class="div3">2024/11/24</div>
        <div class="sent">20</div>
        <div class="sent">10</div>
        <div class="gpp-wrapper">
          <div class="gpp">GAP</div>
        </div>
        <div class="default3-parent">
          <Default rectangle7="/rectangle-7.svg" />
          <div class="reference2"></div>
        </div>
      </div>
      <div class="content-8">
        <div class="request-cells">
          <div class="rfq001">RFQ009</div>
        </div>
        <div class="gp151651">GP316479</div>
        <div class="div3">2024/11/17</div>
        <div class="sent">20</div>
        <div class="sent">10</div>
        <div class="gpp-wrapper">
          <div class="gpp">GAA</div>
        </div>
        <div class="default3-parent">
          <Default rectangle7="/rectangle-7.svg" />
          <div class="reference2"></div>
        </div>
      </div>
      <footer class="content-9">
        <div class="request-cells">
          <div class="rfq001">RFQ010</div>
        </div>
        <div class="gp151651">GP375748</div>
        <div class="div3">2024/11/27</div>
        <div class="sent">20</div>
        <div class="sent">10</div>
        <div class="gpp-wrapper">
          <div class="gpp">GGG</div>
        </div>
        <div class="default3-parent2">
          <Default rectangle7="/rectangle-7.svg" />
          <div class="reference4"></div>
        </div>
      </footer>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import THead from "./THead.vue";
  import Default2 from "./Default2.vue";
  import Default1 from "./Default1.vue";
  import Default from "./Default.vue";

  export default defineComponent({
    name: "Table",
    components: { THead, Default2, Default1, Default },
  });
</script>
<style scoped>
  .rfq001 {
    flex: 1;
    position: relative;
    line-height: 24px;
    font-weight: 500;
  }
  .request-cells {
    width: 155px;
    border-bottom: 1px solid var(--color-mediumslateblue);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    color: var(--color-mediumslateblue);
  }
  .gp151651 {
    width: 155px;
    position: relative;
    line-height: 24px;
    font-weight: 500;
    text-align: left;
    display: inline-block;
    flex-shrink: 0;
  }
  .div3 {
    width: 190px;
    position: relative;
    line-height: 24px;
    font-weight: 500;
    text-align: left;
    display: inline-block;
    flex-shrink: 0;
  }
  .sent {
    width: 125px;
    position: relative;
    line-height: 24px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .na {
    width: 160px;
    position: relative;
    line-height: 24px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .status-cells {
    width: 202.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .reference {
    height: 24px;
    width: 145px;
    position: relative;
    line-height: 24px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .type-cells {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    min-width: 161px;
    gap: var(--gap-xl);
  }
  .content- {
    align-self: stretch;
    border-radius: var(--border-radius);
    border-bottom: 1px solid var(--neutral-200);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) var(--padding-9xs) var(--padding-11xs);
    row-gap: 20px;
  }
  .reference1 {
    height: 24px;
    width: 145px;
    position: relative;
    font-size: var(--paragraph-medium-medium-size);
    line-height: 24px;
    font-weight: 500;
    font-family: var(--paragraph-small-regular);
    color: var(--color-black);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .default1-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    min-width: 161px;
    gap: var(--gap-xl);
    font-size: var(--paragraph-small-regular-size);
    color: var(--generic-white);
    font-family: var(--font-calibri);
  }
  .na-container {
    width: 190px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-11xl) 0px 0px;
    box-sizing: border-box;
  }
  .reference2 {
    height: 24px;
    flex: 1;
    position: relative;
    line-height: 24px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .default2-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-11xl);
    min-width: 169px;
  }
  .reference4 {
    height: 24px;
    flex: 1;
    position: relative;
    font-size: var(--paragraph-medium-medium-size);
    line-height: 24px;
    font-weight: 500;
    font-family: var(--paragraph-small-regular);
    color: var(--color-black);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .default2-container {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-11xl);
    min-width: 169px;
    font-size: var(--paragraph-small-regular-size);
    color: var(--generic-white);
    font-family: var(--font-calibri);
  }
  .gpp {
    align-self: stretch;
    position: relative;
    line-height: 24px;
    font-weight: 500;
  }
  .gpp-wrapper {
    width: 177.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mid) 0px 0px;
    box-sizing: border-box;
  }
  .default3-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mid-5);
    min-width: 177px;
  }
  .content-8 {
    align-self: stretch;
    border-radius: var(--border-radius);
    border-bottom: 1px solid var(--neutral-200);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) var(--padding-9xs) var(--padding-11xs);
    row-gap: 20px;
    z-index: 1;
  }
  .default3-parent2 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mid-5);
    min-width: 177px;
    font-size: var(--paragraph-small-regular-size);
    color: var(--generic-white);
    font-family: var(--font-calibri);
  }
  .content-9 {
    align-self: stretch;
    border-radius: var(--border-radius);
    border-bottom: 1px solid var(--neutral-200);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) var(--padding-9xs) var(--padding-11xs);
    row-gap: 20px;
    z-index: 2;
    text-align: center;
    font-size: var(--paragraph-medium-medium-size);
    color: var(--color-black);
    font-family: var(--paragraph-small-regular);
  }
  .table-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .table {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-16xl) var(--padding-4xs);
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
    font-size: var(--paragraph-medium-medium-size);
    color: var(--color-black);
    font-family: var(--paragraph-small-regular);
  }
</style>
