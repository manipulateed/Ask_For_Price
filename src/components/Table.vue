<template>
  <section class="table">
    <div class="table-content">
      <THead />
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
  display: flex;
  height: auto;
}
.rfq001:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: left;
  color: var(--color-mediumslateblue);
  display: flex;
  flex: 1;
  height: auto;
}
.request-cells {
  width: 155px;
  border-bottom: 1px solid var(--color-mediumslateblue);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  gap: var(--gap-3xs);
  text-align: left;
  color: var(--color-mediumslateblue);
}
.request-cells:hover {
  display: flex;
  width: 155px;
  height: auto;
  flex-direction: row;
  gap: var(--gap-3xs);
  align-items: flex-start;
  justify-content: flex-start;
}
.gp151651 {
  width: 155px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  text-align: left;
  display: flex;
  flex-shrink: 0;
  height: auto;
}
.gp151651:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: left;
  color: var(--color-black);
  display: flex;
  width: 155px;
  height: auto;
}
.div3 {
  width: 190px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  text-align: left;
  display: flex;
  flex-shrink: 0;
  height: auto;
}
.div3:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: left;
  color: var(--color-black);
  display: flex;
  width: 190px;
  height: auto;
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
  height: auto;
}
.sent:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: center;
  color: var(--color-black);
  display: flex;
  width: 125px;
  height: auto;
}
.na {
  width: 160px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
}
.na:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: center;
  color: var(--color-black);
  display: flex;
  width: 160px;
  height: auto;
}
.status-cells {
  width: 202.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
}
.status-cells:hover {
  display: flex;
  width: 202.5px;
  height: auto;
  flex-direction: column;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
}
.reference {
  height: auto;
  width: 145px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.reference:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: center;
  color: var(--color-black);
  display: flex;
  width: 145px;
  height: auto;
}
.type-cells {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 161;
  gap: var(--gap-xl);
  height: auto;
  transform: rotate(0deg);
}
.type-cells:hover {
  display: flex;
  flex: 1;
  height: auto;
  flex-direction: row;
  gap: var(--gap-xl);
  align-items: flex-start;
  justify-content: space-between;
  transform: rotate(0deg);
  min-width: 161;
}
.content- {
  align-self: stretch;
  border-radius: var(--border-radius);
  border-bottom: 1px solid var(--neutral-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-9xs) var(--padding-11xs);
  row-gap: 20px;
  width: auto;
  height: auto;
  gap: var(--gap-0);
}
.content-:hover {
  display: flex;
  align-self: stretch;
  width: auto;
  height: auto;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: var(--border-radius);
  padding: var(--padding-9xs) var(--padding-9xs) var(--padding-11xs);
  box-sizing: border-box;
  row-gap: 20px;
}
.reference1 {
  height: auto;
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
.reference1:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: center;
  color: var(--color-black);
  display: flex;
  width: 145px;
  height: auto;
}
.default1-parent {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 161;
  gap: var(--gap-xl);
  height: auto;
  transform: rotate(0deg);
  font-size: var(--paragraph-small-regular-size);
  color: var(--generic-white);
  font-family: var(--font-calibri);
}
.default1-parent:hover {
  display: flex;
  flex: 1;
  height: auto;
  flex-direction: row;
  gap: var(--gap-xl);
  align-items: flex-start;
  justify-content: space-between;
  transform: rotate(0deg);
  min-width: 161;
}
.na-container {
  width: 190px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xl) 0px 0px;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
}
.na-container:hover {
  display: flex;
  width: 190px;
  height: auto;
  flex-direction: column;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  padding: 0px var(--padding-11xl) 0px 0px;
  box-sizing: border-box;
}
.reference2 {
  height: auto;
  flex: 1;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}
.reference2:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: center;
  color: var(--color-black);
  display: flex;
  flex: 1;
  height: auto;
}
.default2-parent {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
  min-width: 169;
  height: auto;
  transform: rotate(0deg);
}
.default2-parent:hover {
  display: flex;
  flex: 1;
  height: auto;
  flex-direction: row;
  gap: var(--gap-11xl);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  min-width: 169;
}
.reference4 {
  height: auto;
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
.reference4:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: center;
  color: var(--color-black);
  display: flex;
  flex: 1;
  height: auto;
}
.default2-container {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
  min-width: 169;
  height: auto;
  transform: rotate(0deg);
  font-size: var(--paragraph-small-regular-size);
  color: var(--generic-white);
  font-family: var(--font-calibri);
}
.default2-container:hover {
  display: flex;
  flex: 1;
  height: auto;
  flex-direction: row;
  gap: var(--gap-11xl);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  min-width: 169;
}
.gpp {
  align-self: stretch;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  width: auto;
  height: auto;
}
.gpp:hover {
  font-weight: 500;
  font-family: var(--paragraph-small-regular);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 24px;
  text-align: center;
  color: var(--color-black);
  display: flex;
  align-self: stretch;
  width: auto;
  height: auto;
}
.gpp-wrapper {
  width: 177.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-mid) 0px 0px;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
}
.gpp-wrapper:hover {
  display: flex;
  width: 177.5px;
  height: auto;
  flex-direction: column;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
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
  min-width: 177;
  height: auto;
  transform: rotate(0deg);
}
.default3-parent:hover {
  display: flex;
  flex: 1;
  height: auto;
  flex-direction: row;
  gap: var(--gap-mid-5);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  min-width: 177;
}
.content-8 {
  align-self: stretch;
  border-radius: var(--border-radius);
  border-bottom: 1px solid var(--neutral-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-9xs) var(--padding-11xs);
  row-gap: 20px;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  z-index: 1;
}
.content-8:hover {
  display: flex;
  align-self: stretch;
  width: auto;
  height: auto;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: var(--border-radius);
  padding: var(--padding-9xs) var(--padding-9xs) var(--padding-11xs);
  box-sizing: border-box;
  row-gap: 20px;
}
.default3-parent2 {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid-5);
  min-width: 177;
  height: auto;
  transform: rotate(0deg);
  font-size: var(--paragraph-small-regular-size);
  color: var(--generic-white);
  font-family: var(--font-calibri);
}
.default3-parent2:hover {
  display: flex;
  flex: 1;
  height: auto;
  flex-direction: row;
  gap: var(--gap-mid-5);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  min-width: 177;
}
.content-9 {
  align-self: stretch;
  border-radius: var(--border-radius);
  border-bottom: 1px solid var(--neutral-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-9xs) var(--padding-11xs);
  row-gap: 20px;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  z-index: 2;
  text-align: center;
  font-size: var(--paragraph-medium-medium-size);
  color: var(--color-black);
  font-family: var(--paragraph-small-regular);
}
.content-9:hover {
  display: flex;
  align-self: stretch;
  width: auto;
  height: auto;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: var(--border-radius);
  padding: var(--padding-9xs) var(--padding-9xs) var(--padding-11xs);
  box-sizing: border-box;
  row-gap: 20px;
}
.table-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
}
.table-content:hover {
  display: flex;
  flex: 1;
  height: auto;
  flex-direction: column;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
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
  width: auto;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--paragraph-medium-medium-size);
  color: var(--color-black);
  font-family: var(--paragraph-small-regular);
}
.table:hover {
  display: flex;
  align-self: stretch;
  width: auto;
  height: auto;
  flex-direction: row;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-end;
  transform: rotate(0deg);
  padding: 0px var(--padding-16xl) var(--padding-4xs);
  box-sizing: border-box;
  max-width: 100%;
}
</style>
