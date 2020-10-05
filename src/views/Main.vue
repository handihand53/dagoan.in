<template>
  <div class="main-body">
    <PlainHeader/>
    <div class="main-body__section">
      <div class="d-flex align-items-center">
        <div class="main-body__title">
          Website Development
        </div>
        <div class="main-body__status">
          On Going
        </div>
      </div>
      <div class="main-body__description">
        Research, Wireframe, Test, Visual Design
      </div>
      <div class="main-body__list d-flex">
        <div class="main-body__main-card shadow-sm">
          <div class="main-body__main-card__title">
            To Do
          </div>
          <div class="main-body__main-card__list-section">
            <draggable
              class="list-group"
              :list="list1" group="people"
              @change="log"
              v-bind="dragOptions"
            >
              <div
                class="main-body__main-card__item"
                v-for="(element, index) in list1"
                :key="element.name"
              >
                <div class="main-body__main-card__item__label">
                  Product Merketing
                </div>
                <div class="main-body__main-card__item__title">
                  {{ element.name }} {{ index }}
                </div>
                <div class="d-flex align-items-center">
                  <font-awesome-icon
                    icon="stopwatch"
                    class="main-body__main-card__item__icon"
                  />
                  <div class="main-body__main-card__item__timer">
                    3 hour
                  </div>
                </div>
              </div>
            </draggable>
          </div>
        </div>
        <div class="main-body__main-card shadow-sm">
          <div class="main-body__main-card__title">
            To Do
          </div>
          <div class="main-body__main-card__list-section">
            <draggable
              class="list-group"
              :list="list2" group="people"
              @change="log"
              v-bind="dragOptions"
            >
              <div
                class="main-body__main-card__item"
                v-for="(element, index) in list2"
                :key="element.name"
              >
                <div class="main-body__main-card__item__label">
                  Product Merketing
                </div>
                <div class="main-body__main-card__item__title">
                  {{ element.name }} {{ index }}
                </div>
                <div class="d-flex align-items-center">
                  <font-awesome-icon
                    icon="stopwatch"
                    class="main-body__main-card__item__icon"
                  />
                  <div class="main-body__main-card__item__timer">
                    3 hour
                  </div>
                </div>
              </div>
            </draggable>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable
        class="list-group"
        :list="list1" group="people"
        @change="log"
        v-bind="dragOptions"
      >
        <div
          class="list-group-item"
          v-for="(element, index) in list1"
          :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable
        class="list-group"
        :list="list2"
        group="people"
        @change="log"
        v-bind="dragOptions"
      >
        <div
          class="list-group-item"
          v-for="(element, index) in list2"
          :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </div>

    <rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" />
  </div> -->
</template>

<script src="./js/main.js"></script>

<style lang="scss" scoped>
.main-body {
  background: #F2F6F8;
  height: 100vh;
  &__section{
    padding: 10px;
  }
  &__title{
    font-weight: 600;
  }
  &__status{
    margin-left: 10px;
    color: white;
    font-size: 12px;
    padding: 2px 12px;
    border-radius: 20px;
    background-color: #0090FF;
  }
  &__description{
    font-size: 12px;
  }
  &__list{
    overflow: auto;
  }
  &__main-card{
    border-radius: 10px;
    background: #F3F3F3;
    padding: 10px;
    min-width: 340px;
    margin-right: 20px;
    &__title{
      font-weight: 600;
    }
    &__list-section{
      margin-top: 5px;
    }
    &__item{
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
      padding: 6px;
      border-radius: 5px;
      background: white;
      margin: 4px 0;
      &__label{
        display: table;
        padding: 2px 10px;
        background: #D32323;
        color: white;
        font-weight: 600;
        border-radius: 8px;
        font-size: 10px;
      }
      &__title{
        font-weight: 600;
        font-size: 16px;
      }
      &__icon{
        font-size: 12px;
      }
      &__timer{
        margin-left: 5px;
        font-weight: 600;
        font-size: 12px;
      }
    }
  }
}
</style>
