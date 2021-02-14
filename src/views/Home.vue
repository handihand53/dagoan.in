<template>
  <div class="bg">
    <MainHeader/>
    <div class="main-section">
      Selamat datang, {{ getUser.userName }}
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

.bg{
  background: #F2F6F8;
  min-height: 100vh;
  height: 100%;
}
</style>
