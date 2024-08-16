<template>
  <div class="credentials">
    <div class="username">
      <div class="rectangle1" />
      <img class="user-icon" loading="lazy" alt="" src="/user.svg" />
      <a class="maker">Maker</a>
    </div>
    <div class="password">
      <div class="rectangle1" />
      <img class="user-icon" loading="lazy" alt="" src="/user.svg" />
      <div class="username2">Username</div>
    </div>
    <div class="password">
      <div class="rectangle1" />
      <img class="user-icon" loading="lazy" alt="" src="/lock.svg" />
      <div class="password1">password</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Credentials",
  });
</script>
<style scoped>
  .rectangle1 {
    height: 45px;
    width: 300px;
    position: relative;
    border-radius: var(--br-9xs);
    border: 1px solid var(--generic-white);
    box-sizing: border-box;
    display: none;
  }
  .user-icon {
    height: 20px;
    width: 20px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    min-height: 20px;
    z-index: 1;
  }
  .maker {
    text-decoration: none;
    position: relative;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: 300;
    color: inherit;
    display: inline-block;
    min-width: 53px;
    z-index: 1;
  }
  .username {
    align-self: stretch;
    border-radius: var(--br-9xs);
    border: 1px solid var(--generic-white);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-2xs) var(--padding-xs) var(--padding-3xs);
    gap: var(--gap-mini);
    z-index: 1;
  }
  .username2 {
    position: relative;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: 300;
    display: inline-block;
    min-width: 84px;
    z-index: 1;
  }
  .password1 {
    position: relative;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: 300;
    display: inline-block;
    min-width: 85px;
    z-index: 1;
  }
  .password {
    align-self: stretch;
    border-radius: var(--br-9xs);
    border: 1px solid var(--generic-white);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-2xs) var(--padding-xs) var(--padding-3xs);
    gap: var(--gap-lgi);
    z-index: 1;
  }
  .credentials {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl-5);
    text-align: center;
    font-size: var(--paragraph-small-regular-size);
    color: var(--generic-white);
    font-family: var(--font-montserrat);
  }
</style>
