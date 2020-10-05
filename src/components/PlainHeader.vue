<template>
  <div class="header shadow-sm px-3 d-flex align-items-center">
    <div class="header__logo"
    @click="back">
      <font-awesome-icon
        icon="chevron-left"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'plain-header',
  methods: {
    back () {
      window.history.back()
    }
  }
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
