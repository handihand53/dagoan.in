<template>
  <div class="header-tab">
    <div class="row no-gutters sticky shadow-sm p-2">
      <div
        class="header-tab__items"
        :class="{active: onGoing}"
        @click="onGoingSection"
      >
        On Going Project
      </div>
      <div
        class="header-tab__items"
        :class="{active: finish}"
        @click="finishSection"
      >
        Finish
      </div>
    </div>
    <HomeContentCard/>
  </div>
</template>

<script src="./js/home-tab.js"></script>

<style lang='scss' scoped>
.header-tab{
  padding: 10px;
  .sticky{
    border-radius: 10px;
    background-color: white;
    position: sticky;
    top: 10px;
  }
  &__items{
    background-color: #E6E6E6;
    border-radius: 20px;
    padding: 3px 15px;
    font-size: 14px;
    font-weight: 700;
    margin-right: 10px;
    color: #797979;
    cursor: pointer;
    transition: all 0.3s;
  }

  .active {
    color: white;
    background-color: #0090FF;
  }
}
</style>
