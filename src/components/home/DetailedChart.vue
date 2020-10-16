<template>
  <div class="main-detail">
    <BarChart
      class="shadow-sm p-2 mb-3 chart-color"
    />
    <div class="detailed p-2">
      <div class="shadow-sm">
        <div class="detailed__title">
          Report Detail
        </div>
        <div class="detailed__content">
          <b-table responsive
            :items="items"
            :fields="fields"
            small
            primary-key="a"
            class="tab-custom"
            :tbody-transition-props="transProps"
          >
            <template v-slot:cell(Tag)="row">
              <div
                class="tag"
                :style="`background-color: ${row.item.tagColor}`"
              >
                Release
              </div>
            </template>

            <template v-slot:cell(Assign)="row">
              <div class="d-flex">
                <img
                  class="image-assign"
                  :src="row.item.Assign.url"
                  :alt="row.item.Assign.name"
                >
                {{row.item.Assign.name}}
              </div>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/detailed-chart.js"></script>

<style scoped>
/deep/ table > thead{
  font-size: 12px;
}

/deep/ table > tbody{
  font-size: 13px;
}

/deep/ td {
  padding: 4px;
  font-weight: 600;
  vertical-align: middle;
}
</style>

<style lang="scss" scoped>
.main-detail{
  padding-bottom: 60px;
  background: #F2F6F8;
}

.image-assign{
  width: 20px;
  border-radius: 20px;
  margin-right: 3px;
}

.tab-custom {
  margin-bottom: 0px;
}

.tag{
  display: inherit;
  padding: 2px 10px;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  font-size: 12px;
}

.detailed{
  &__title{
    background-color: #E4EAEE;
    padding: 8px;
  }
  &__content{
    background: white;
  }
}

.chart-color{
  background: white;
}
</style>
