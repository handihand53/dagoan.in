<template>
  <div class="login-section p-3">
    <div class="login-section__logo">
      <img src="@/assets/logo/dagoan.in logo blue.png" alt=""
      class="brand">
    </div>
    <div class="login-section__card card shadow">
      <div class="login-section__card__title pt-3">
        Login
      </div>
      <div class="p-3">
        <label
          for="input-live"
          class="login-section__label"
        >
          Email:
        </label>
        <input
          id="input-email-live"
          v-model="email"
          class="form-control"
          placeholder="Enter your email"
          type="email"
          trim
        >
        <div
          class="invalid-feedback-msg"
          v-if="!emailFormat"
        >
          Format email tidak sesuai
        </div>
        <label
          for="input-live"
          class="login-section__label mt-3"
        >
          Password:
        </label>
        <input
          id="input-password-live"
          v-model="password"
          class="form-control"
          placeholder="Enter your password"
          type="password"
          trim
        >
        <div
          v-if="!passwordFormat"
          class="invalid-feedback-msg"
        >
          Password harus lebih dari 6 karakter
        </div>
        <div class="text-center mt-3">
          <button
            class="login-section__button"
            @click="(emailFormat && passwordFormat && email && password) && doLogin()"
          >
            Login
          </button>
        </div>
        <div class="mt-2 text-center hint-daftar">
          Belum punya akun ?
          <br>
          Daftar <a href="/signup" class="daftar">disini</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/login.js"></script>

<style lang="scss" scoped>
.login-section{
  background-image: url('../assets/background/login-bg.png');
  background-size: cover;
  // background: #F8FAFC;
  height: 100vh;

  &__logo {
    margin-top: 30px;
    text-align: center;
  }

  &__card {
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.047);
    margin-top: 50px;

    &__title {
      color: #4D4F5C;
      font-size: 30px;
      font-weight: 700;
      text-align: center;
    }
  }

  &__label{
    font-size: 14px;
  }

  &__button {
    color: white;
    font-weight: 700;
    font-size: 18px;
    width: 200px;
    padding: 5px 30px;
    margin-left: auto;
    margin-right: auto;
    border: none;
    border-radius: 30px;
    background: rgb(0,114,202);
    background: linear-gradient(291deg, rgba(0,114,202,1) 0%, rgba(0,121,213,1) 56%, rgba(96,186,255,1) 100%);
  }

  .brand {
    width: 180px;
  }

  .hint-daftar{
    font-size: 14px;

    .daftar:hover{
      text-decoration: none;
      font-weight: bold;
    }
  }

  .invalid-feedback-msg {
    font-size: 12px;
    color: red;
    font-weight: 500;
    margin-top: 5px;
  }
}
</style>
