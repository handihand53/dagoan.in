<template>
  <div>
    <MainHeader/>
    <div class="main-section">
      Selamat datang, {{ name }}
    </div>
    <HomeTab/>
  </div>
</template>

<script src="./js/home.js"></script>

<style lang="scss" scoped>
.main-section{
  padding: 10px 10px 2px 10px;
  z-index: 1;
}
</style>
