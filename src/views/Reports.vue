<template>
  <div class="main-reports">
    <PlainHeader/>
    <div class="p-2">
      <b-form-select
        v-model="selected"
        :options="options"
        size="sm"
        class="mt-2"
      >
      </b-form-select>
      <b-form-datepicker
        id="datepicker-sm"
        size="sm"
        local="en"
        class="mt-2"
        placeholder="Choose a date"
        dark
        :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"
      >
      </b-form-datepicker>
    </div>
    <div
      v-if="selected"
    >
      <detailed-chart/>
    </div>
    <div
      v-else
    >
      <summary-chart/>
    </div>
    <NavBar/>
  </div>
</template>

<script src="./js/reports.js"></script>

<style lang="scss" scoped>
.main-reports{
  background: #F2F6F8;
  height: 100vh;
}
</style>
