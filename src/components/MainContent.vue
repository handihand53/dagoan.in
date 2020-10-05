<template>
  <div class="main-content">
    <div class="content text-center">
      <div
        class="starting-title"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="900"
        data-aos-once="true"
      >
        Best management software for your project
      </div>
      <div
        class="title"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="900"
        data-aos-once="true"
      >
        TRY Dagoan.in NOW!
      </div>
      <div
        class="sub-title mx-auto"
        data-aos="fade-up"
        data-aos-delay="700"
        data-aos-once="true"
        data-aos-duration="900"
      >
        Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </div>
      <img
        data-aos="zoom-in"
        data-aos-delay="800"
        data-aos-once="true"
        data-aos-duration="900"
        src="@/assets/img/dummy-desktop.jpg"
        alt="desktop"
        class="img-brand shadow"
      >
      <div
        class="text-dark mt-5 best-project-title mx-auto"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="500"
      >
        Best software to manage your <span class="text-primary
        font-weight-bold">project</span> work!
      </div>
      <div
        class="mt-5"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="900"
      >
        <div class="d-flex justify-content-around">
          <div class="shadow-sm cust-card p-3">
            <div class="row no-gutters">
              <div class="col-3 p-0">
                <img src="@/assets/icon/deadline.png" alt=""
                class="icon">
              </div>
              <div class="col-9 card-text p-0">
                <div class="card-title">
                  Time Tracker
                </div>
                <div class="card-body">
                  this apps is for time tracker app
                </div>
              </div>
            </div>
          </div>
          <div class="shadow-sm cust-card p-3">
            <div class="row no-gutters">
              <div class="col-3 p-0">
                <img src="@/assets/icon/deadline.png" alt=""
                class="icon">
              </div>
              <div class="col-9 card-text p-0">
                <div class="card-title">
                  Time Tracker
                </div>
                <div class="card-body">
                  this apps is for time tracker app
                </div>
              </div>
            </div>
          </div>
          <div class="shadow-sm cust-card p-3">
            <div class="row no-gutters">
              <div class="col-3 p-0">
                <img src="@/assets/icon/deadline.png" alt=""
                class="icon">
              </div>
              <div class="col-9 card-text p-0">
                <div class="card-title">
                  Time Tracker
                </div>
                <div class="card-body">
                  this apps is for time tracker app
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-3"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="900"
      >
        <div class="d-flex justify-content-around">
          <div class="shadow-sm cust-card p-3">
            <div class="row no-gutters">
              <div class="col-3 p-0">
                <img src="@/assets/icon/deadline.png" alt=""
                class="icon">
              </div>
              <div class="col-9 card-text p-0">
                <div class="card-title">
                  Time Tracker
                </div>
                <div class="card-body">
                  this apps is for time tracker app
                </div>
              </div>
            </div>
          </div>
          <div class="shadow-sm cust-card p-3">
            <div class="row no-gutters">
              <div class="col-3 p-0">
                <img src="@/assets/icon/deadline.png" alt=""
                class="icon">
              </div>
              <div class="col-9 card-text p-0">
                <div class="card-title">
                  Time Tracker
                </div>
                <div class="card-body">
                  this apps is for time tracker app
                </div>
              </div>
            </div>
          </div>
          <div class="shadow-sm cust-card p-3">
            <div class="row no-gutters">
              <div class="col-3 p-0">
                <img src="@/assets/icon/deadline.png" alt=""
                class="icon">
              </div>
              <div class="col-9 card-text p-0">
                <div class="card-title">
                  Time Tracker
                </div>
                <div class="card-body">
                  this apps is for time tracker app
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.main-content {
  padding-top: 65px;
  background: url('../assets/background/bg-blue.jpg') no-repeat;
  color: white;
  z-index: 1;

  .content {
    width: 96%;
    max-width: 1100px;
    margin: 0 auto;
    padding-top: 70px;

    .starting-title {
      margin-top: 5px;
      font-size: 18px;
    }

    .title {
      margin-top: 5px;
      font-size: 60px;
      font-weight: 700;
    }

    .sub-title {
      margin-top: 5px;
      max-width: 700px;
    }

    .img-brand{
      border-radius: 10px;
      margin-top: 70px;
      max-width: 800px;
    }

    .best-project-title {
      font-size: 18px;
      max-width: 230px;
    }

    .cust-card{
      width: calc(1100px/3 - 20px)!important;
      border: 1px solid rgba(240, 240, 240, 0.714);
      border-radius: 10px;
      .icon{
        width: 100%;
      }

      .card-text{
        color: black;

        .card-title{
          font-weight: 700;
          padding: 0px;
          margin: 0px;
        }

        .card-body{
          text-align: justify;
          font-size: 15px;
          padding: 0px;
        }
      }
    }
  }
}
</style>
