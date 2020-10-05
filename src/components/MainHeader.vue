<template>
  <div class="header shadow-sm px-3 d-flex align-items-center">
    <div class="header__logo row no-gutters d-flex justify-content-between">
      <div>
        <img src="@/assets/logo/dagoan.in logo blue.png" alt=""
        class="header__logo-brand">
      </div>
      <div class="d-flex align-items-center">
        <font-awesome-icon
          icon="bell"
          class="mr-2 icon"
        />
        <font-awesome-icon
          icon="cog"
          class="icon"
        />
      </div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.header {
  z-index: 2;
  background-color: white;
  height: 50px;
  &__logo {
    width: 100%;
    &-brand {
      width: 125px;
    }
  }
  .icon{
    color: rgb(62, 62, 62);
  }
}

</style>
