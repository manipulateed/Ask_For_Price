<template>
  <div class="credentials">
    <div class="username">
      <img class="user-icon" loading="lazy" alt="" src="/user.svg" />
      <a class="maker">Maker</a>
    </div>
    <div class="password">
      <img class="user-icon" loading="lazy" alt="" src="/user.svg" />
      <div class="username2">Username</div>
    </div>
    <div class="password">
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
.user-icon {
  height: 20px;
  width: 20px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 20;
  display: flex;
  gap: var(--gap-0);
  z-index: 1;
}
.user-icon:hover {
  display: flex;
  width: 20px;
  height: 20px;
  gap: var(--gap-0);
  min-height: 20;
}
.maker {
  text-decoration: none;
  position: relative;
  line-height: 20px;
  text-transform: uppercase;
  font-weight: 300;
  color: inherit;
  display: flex;
  min-width: 53;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 1;
}
.maker:hover {
  font-weight: 300;
  font-family: var(--font-montserrat);
  font-size: var(--paragraph-small-regular-size);
  line-height: 20px;
  text-align: center;
  color: var(--generic-white);
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  min-width: 53;
}
.username {
  align-self: stretch;
  border-radius: var(--br-9xs);
  border: 1px solid var(--generic-white);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-xs) var(--padding-3xs);
  gap: var(--gap-mini);
  width: auto;
  height: auto;
  z-index: 1;
}
.username:hover {
  display: flex;
  align-self: stretch;
  width: auto;
  height: auto;
  flex-direction: row;
  gap: var(--gap-mini);
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: var(--br-9xs);
  padding: var(--padding-2xs) var(--padding-xs) var(--padding-3xs);
  box-sizing: border-box;
  border: 1px solid var(--generic-white);
}
.username2 {
  position: relative;
  line-height: 20px;
  text-transform: uppercase;
  font-weight: 300;
  display: flex;
  min-width: 84;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 1;
}
.username2:hover {
  font-weight: 300;
  font-family: var(--font-montserrat);
  font-size: var(--paragraph-small-regular-size);
  line-height: 20px;
  text-align: center;
  color: var(--generic-white);
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  min-width: 84;
}
.password1 {
  position: relative;
  line-height: 20px;
  text-transform: uppercase;
  font-weight: 300;
  display: flex;
  min-width: 85;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 1;
}
.password1:hover {
  font-weight: 300;
  font-family: var(--font-montserrat);
  font-size: var(--paragraph-small-regular-size);
  line-height: 20px;
  text-align: center;
  color: var(--generic-white);
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  min-width: 85;
}
.password {
  align-self: stretch;
  border-radius: var(--br-9xs);
  border: 1px solid var(--generic-white);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-xs) var(--padding-3xs);
  gap: var(--gap-lgi);
  width: auto;
  height: auto;
  z-index: 1;
}
.password:hover {
  display: flex;
  align-self: stretch;
  width: auto;
  height: auto;
  flex-direction: row;
  gap: var(--gap-lgi);
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: var(--br-9xs);
  padding: var(--padding-2xs) var(--padding-xs) var(--padding-3xs);
  box-sizing: border-box;
  border: 1px solid var(--generic-white);
}
.credentials {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl-5);
  height: auto;
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--paragraph-small-regular-size);
  color: var(--generic-white);
  font-family: var(--font-montserrat);
}
.credentials:hover {
  display: flex;
  flex: 1;
  height: auto;
  flex-direction: column;
  gap: var(--gap-xl-5);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
}
</style>
