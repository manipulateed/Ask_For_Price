<template>
  <div class="dashboard-login">
    <img class="bg-icon" alt="" src="/bg.svg" />
    <h1 class="makalot-rfq-system">mAKALOT Rfq system</h1>
    <div class="login-form"><Credentials /></div>
    <div class="login-button-wrapper">
      <button class="login-btn" @click="onLoginBtnClick">
        <div class="rectangle" />
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
    z-index: 1;
  }
  .login-form {
    width: 408px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-35xl) 22px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .rectangle {
    height: 45px;
    width: 300px;
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: var(--br-9xs);
    background-color: var(--generic-white);
    display: none;
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
    display: inline-block;
    min-width: 54px;
    z-index: 1;
  }
  .login-btn {
    cursor: pointer;
    border: none;
    padding: 13px var(--padding-xl) var(--padding-xs);
    background-color: var(--generic-white);
    flex: 1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: var(--br-9xs);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    z-index: 1;
  }
  .login-btn:hover {
    background-color: #e6e6e6;
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
  }
  .dashboard-login {
    position: relative;
    background-color: var(--color-royalblue-300);
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 193px 403px 192px 436px;
    box-sizing: border-box;
    gap: 21px;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    font-size: 35px;
    color: var(--generic-white);
    font-family: var(--font-montserrat);
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
