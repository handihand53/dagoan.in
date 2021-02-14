<template>
  <div class="navigation shadow">
    <div class="d-flex" id="nav">
      <router-link :to="'/main/' + paramId" class="navigation__section">
        <font-awesome-icon
          class="navigation-icon"
          icon="th-large"
        />
        <div class="navigation__text">
          Dashboard
        </div>
      </router-link>
      <router-link :to="'/reports/' + paramId" class="navigation__section">
        <font-awesome-icon
          class="navigation-icon"
          icon="chart-bar"
        />
        <div class="navigation__text">
          Reports
        </div>
      </router-link>
      <router-link :to="'/chat/' + paramId" class="navigation__section">
        <font-awesome-icon
          class="navigation-icon"
          icon="comments"
        />
        <div class="navigation__text">
          Chat
        </div>
      </router-link>
      <router-link :to="'/team/' + paramId" class="navigation__section">
        <font-awesome-icon
          class="navigation-icon"
          icon="users"
        />
        <div class="navigation__text">
          Team
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      paramId: this.$route.params.projectId
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation{
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
  width: 100vw;
  padding: 5px;
  color: #A8A8A8;
  &-icon{
    margin-top: 5px;
    font-size: 24px;
  }
  &__section{
    text-align: center;
    width: 25%;
  }
  &__text{
    font-size: 11px;
  }
}

#nav {
  a {
    color: #A8A8A8;
    text-decoration: none;
    &.router-link-exact-active {
      color: #00A2FF !important;
      font-weight: 700;
    }
  }
}
</style>
