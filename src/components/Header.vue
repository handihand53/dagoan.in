<template>
  <div class="shadow fix-top">
    <div class="header-top d-flex align-items-center justify-space-around py-3">
      <div class="header-top__content d-flex justify-content-between row no-gutters">
        <div class="row no-gutters">
          <div class="nav-list">
            <img src="@/assets/logo/dagoan.in logo blue.png" alt=""
            class="brand">
          </div>
          <div class="nav-list fromCenter">
            Features
          </div>
          <div class="nav-list fromCenter">About</div>
        </div>
        <div>
          <b-button
            pill
            variant="outline-primary"
            class="head-button"
          >
            Login
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.fix-top {
  position: fixed;
  width: 100%;
  background: white;
  z-index: 2;
  .header-top {
    width: 96%;
    max-width: 1100px;
    margin: 0 auto;

    &__content{
      width: 100%;
    }

    .brand {
      height: 30px;
    }

    .nav-list{
      margin-right: 20px;
      align-items: center;
      cursor: pointer;
      transition: all 0.5s;
    }

    .nav-list:hover {
      color: black;
    }

    .head-button{
      font-size: 14px;
      padding: 5px 30px;
    }
  }
}
  .fromCenter {
    padding: 3px 0px;
    color: #666;
    margin:0;
  }

  .fromCenter:after {
    display:block;
    content: '';
    border-bottom: solid 2px #2aa3ff;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  .fromCenter:hover:after {
    transform: scaleX(1);
  }
</style>
