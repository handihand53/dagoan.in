<template>
  <div class="banner-section">
    <div class="content">
      <div class="row no-gutters">
        <div class="col-8">
          <div class="title">
            Need a perfect software to manage everything?
          </div>
          <div class="sub-title">
            Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
            quod mazim placerat facer possim assum. Typi non habent claritatem insitam.
          </div>
        </div>
        <div class="col-4 d-flex justify-content-center">
          <b-button
            pill
            variant="outline-light"
            class="login-button"
          >
            Login
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.banner-section{
  margin-top: 100px;
  background: #009BDE;
  padding-bottom: 50px;

  .content{
    width: 96%;
    max-width: 1100px;
    margin: 0 auto;
    padding-top: 70px;

    .title{
      font-size: 26px;
      font-weight: 600;
      color: white;
    }

    .sub-title{
      color: white;
    }

    .login-button{
      font-size: 14px;
      padding: 5px 30px;
      margin: auto;
    }
  }
}
</style>
