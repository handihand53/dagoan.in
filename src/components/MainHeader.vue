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
          @click="showNotif"
        />
        <font-awesome-icon
          icon="cog"
          class="icon"
        />
      </div>
    </div>
    <div v-if="notification">
      <div
        class="bg-black-overlay"
        @click="showNotif"
      >
      </div>
      <div class="arrow-up"></div>
      <div class="header__notification shadow-sm">
        <div class="header__notification-title d-flex justify-content-between align-items-center">
          Notification
          <font-awesome-icon
            icon="times"
            class="icon"
            @click="showNotif"
          />
        </div>
        <div>
          <div class="header__notification-content d-flex justify-content-between">
            <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt=""
            class="header__notification-picture">
            <div>
              <b>Beckham</b> invited you to join
              <span class="header__notification-project_name">Website Development</span>.
            </div>
          </div>
          <div class="d-flex justify-content-around px-4 pb-3">
            <button
              class="header__notification-button_accept"
              @click="accept"
            >Accept</button>
            <button
              class="header__notification-button_decline"
              @click="decline"
            >Decline</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notification: false
    }
  },
  methods: {
    accept () {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        loader: 'bars',
        color: '#0090FF',
        opacity: 0.1
      })
      setTimeout(() => {
        loader.hide()
        this.showNotif()
        this.$toast.open({
          message: 'Invitation accepted',
          type: 'success',
          position: 'bottom'
        })
      }, 1000)
    },
    decline () {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        loader: 'bars',
        color: '#0090FF',
        opacity: 0.1
      })
      setTimeout(() => {
        loader.hide()
        this.showNotif()
        this.$toast.open({
          message: 'Invitation declined',
          type: 'default',
          position: 'bottom'
        })
      }, 1000)
    },
    showNotif () {
      this.notification = !this.notification
    }
  }
}
</script>

<style scoped>
body /deep/ .ajg{
  margin-bottom: 20px;
}
</style>

<style lang="scss" scoped>
.header {
  z-index: 3;
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
  &__notification{
    position: fixed;
    background: white;
    margin-top: 20px;
    right: 25px;
    border: 0.5px rgba(177, 177, 177, 0.36) solid;
    z-index: 5;
    border-radius: 7px;
    max-width: 270px;
    &-title{
      font-weight: 600;
      padding: 5px 15px;
      border-bottom: 2px solid #dadada;
    }
    &-content{
      padding: 5px 15px;
      font-size: 14px;
    }
    &-picture{
      margin-right: 5px;
      width: 35px;
      height: 35px;
      border-radius: 17px;
    }
    &-project_name{
      color: #0090FF;
      font-weight: 700;
    }
    &-button{
      &_accept{
        font-weight: 600;
        border-radius: 15px;
        border: none;
        padding: 2px 17px;
        background-color: #0090FF;
        color: white;
      }
      &_decline{
        font-weight: 600;
        border: none;
        color: #8C8C8C;
        background-color: transparent;
      }
    }
  }
}

.arrow-up {
  position: fixed;
  top: 35px;
  right: 37px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 17px solid white;
  z-index: 5;
}

.bg-black-overlay{
  background: rgba(0, 0, 0, 0.646);
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}
</style>
