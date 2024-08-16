<template>
  <div class="dashboard-login">
    <img class="bg-icon" alt="" src="/bg.svg" />
    <h1 class="makalot-rfq-system">mAKALOT Rfq system</h1>
    <div class="login-form"><Credentials /></div>
    <div class="login-button-wrapper">
      <button class="login-btn" @click="onLoginBtnClick">
        <div class="login">login</div>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Credentials from "../components/Credentials.vue";

export default defineComponent({
  name: "DashboardLogin",
  components: { Credentials },
  methods: {
    onLoginBtnClick() {
      this.$router.push("/");
    },
  },
});
</script>
<style scoped>
.bg-icon {
  width: 1641.5px;
  height: 1083px;
  position: absolute;
  margin: 0 !important;
  bottom: -362px;
  left: -362px;
  display: flex;
}
.bg-icon:hover {
  display: flex;
  width: 1641.5px;
  height: 1083px;
}
.makalot-rfq-system {
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 50px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: inherit;
  white-space: pre-wrap;
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 1;
}
.makalot-rfq-system:hover {
  font-weight: 600;
  font-family: var(--font-montserrat);
  font-size: var(--font-size-16xl);
  line-height: 50px;
  text-align: center;
  color: var(--generic-white);
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
}
.login-form {
  width: 408px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-35xl) var(--padding-3xl);
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
}
.login-form:hover {
  display: flex;
  width: 408px;
  height: auto;
  flex-direction: row;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  padding: 0px var(--padding-35xl) var(--padding-3xl);
  box-sizing: border-box;
  max-width: 100%;
}
.login {
  position: relative;
  font-size: var(--paragraph-medium-medium-size);
  line-height: 20px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: var(--font-montserrat);
  color: var(--color-royalblue-300);
  text-align: center;
  display: flex;
  min-width: 54;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 1;
}
.login:hover {
  font-weight: 600;
  font-family: var(--font-montserrat);
  font-size: var(--paragraph-medium-medium-size);
  line-height: 20px;
  text-align: center;
  color: var(--color-royalblue-300);
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  min-width: 54;
}
.login-btn {
  cursor: pointer;
  border: none;
  padding: var(--padding-smi) var(--padding-xl) var(--padding-xs);
  background-color: var(--color-gainsboro-100);
  flex: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: var(--br-9xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  height: auto;
  z-index: 1;
}
.login-btn:hover {
  background-color: var(--generic-white);
  display: flex;
  flex: 1;
  height: auto;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  border-radius: var(--br-9xs);
  padding: var(--padding-smi) var(--padding-xl) var(--padding-xs);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
}
.login-btn:active {
  background-color: var(--color-gainsboro-100);
}
.login-button-wrapper {
  width: 408px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-35xl);
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
}
.login-button-wrapper:hover {
  display: flex;
  width: 408px;
  height: auto;
  flex-direction: row;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  padding: 0px var(--padding-35xl);
  box-sizing: border-box;
  max-width: 100%;
}
.dashboard-login {
  position: relative;
  background-color: var(--color-royalblue-300);
  width: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-174xl) var(--padding-384xl) var(--padding-173xl)
    var(--padding-417xl);
  box-sizing: border-box;
  gap: var(--gap-2xl);
  line-height: normal;
  letter-spacing: normal;
  align-self: unset;
  height: auto;
  text-align: center;
  font-size: var(--font-size-16xl);
  color: var(--generic-white);
  font-family: var(--font-montserrat);
}
.dashboard-login:hover {
  background-color: var(--color-royalblue-300);
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  flex-direction: column;
  gap: var(--gap-2xl);
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-174xl) var(--padding-384xl) var(--padding-173xl)
    var(--padding-417xl);
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
}

@media screen and (max-width: 750px) {
  .makalot-rfq-system {
    font-size: 28px;
    line-height: 40px;
  }
}
@media screen and (max-width: 675px) {
  .dashboard-login {
    padding-left: 218px;
    padding-right: 201px;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 450px) {
  .makalot-rfq-system {
    font-size: 21px;
    line-height: 30px;
  }

  .login-form {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }

  .login-button-wrapper {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }

  .dashboard-login {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
}
</style>
