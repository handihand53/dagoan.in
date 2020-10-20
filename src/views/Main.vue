<template>
  <div class="main-body">
    <PlainHeader/>
    <div class="">
      <div class="main-body__section">
        <div class="d-flex align-items-center justify-content-between">
          <div class="main-body__title">
            Website Development
          </div>
          <div class="d-flex">
            <font-awesome-icon
              class="ml-1 main-body__edit"
              icon="pencil-alt"
              v-b-modal.edit-project
            />
            <div class="main-body__status">
              On Going
            </div>
          </div>
        </div>
        <div class="main-body__description">
          Research, Wireframe, Test, Visual Design
        </div>
      </div>
      <div class="main-body__list d-flex">
        <div class="main-body__main-card shadow">
          <div class="d-flex justify-content-between">
            <div class="main-body__main-card__title">
              To Do
            </div>
            <font-awesome-icon
              class=""
              icon="ellipsis-h"
              v-b-modal.edit-card
            />
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
                v-for="(element) in list1"
                v-b-modal.detail-card
                :key="element.name"
              >
                <div
                  class="main-body__main-card__item__label"
                  :style="`background-color: ${element.label.color}`"
                >
                  {{ element.label.name }}
                </div>
                <div class="main-body__main-card__item__title">
                  {{ element.name }}
                </div>
                <div class="d-flex align-items-center">
                  <font-awesome-icon
                    icon="stopwatch"
                    class="main-body__main-card__item__icon"
                  />
                  <div class="main-body__main-card__item__timer">
                    {{ element.duration }} hours
                  </div>
                </div>
                <div class="main-body__main-card__item__assign">
                  Assign this task to me
                </div>
              </div>
            </draggable>
            <div
             v-if="!list1.length">
              <div class="no-list">
                Belum ada list
              </div>
            </div>
          </div>
          <div
            class="main-body__main-card__add"
            v-b-modal.add-card
          >
            <font-awesome-icon
              icon="plus"
            />
            Add task
          </div>
        </div>
        <div class="main-body__main-card shadow">
          <div class="d-flex justify-content-between">
            <div class="main-body__main-card__title">
              In Development
            </div>
            <font-awesome-icon
              class=""
              icon="ellipsis-h"
              v-b-modal.edit-card
            />
          </div>
          <div class="main-body__main-card__list-section">
            <div
             v-if="!list2.length">
              <div class="no-list">
                Belum ada list
              </div>
            </div>
            <draggable
              class="list-group"
              :list="list2" group="people"
              @change="log"
              v-bind="dragOptions"
            >
              <div
                class="main-body__main-card__item"
                v-for="(element) in list2"
                :key="element.name"
              >
                <div
                  class="main-body__main-card__item__label"
                  :style="`background-color: ${element.label.color}`"
                >
                  {{ element.label.name }}
                </div>
                <div class="main-body__main-card__item__title">
                  {{ element.name }}
                </div>
                <div class="d-flex align-items-center">
                  <font-awesome-icon
                    icon="stopwatch"
                    class="main-body__main-card__item__icon"
                  />
                  <div class="main-body__main-card__item__timer">
                    {{ element.duration }} hours
                  </div>
                </div>
                <div class="main-body__main-card__item__assign">
                  Assign this task to me
                </div>
              </div>
            </draggable>
          </div>
        </div>
        <div class="main-body__main-card main-body__main-card__add-new shadow">
          <div class="main-body__main-card__title list-title">
            <font-awesome-icon
              icon="plus"
            />
            Add Another List
          </div>
        </div>
      </div>
    </div>

    <!-- modal start  -->
    <edit-project/>
    <edit-list/>
    <add-task/>
    <detail-card/>
    <!-- modal end  -->

    <!-- nav bar -->
    <nav-bar/>
  </div>
</template>

<script src="./js/main.js"></script>

<style>
.red{
  color: red;
}
</style>

<style lang="scss" scoped>
.main-body {
  background: #F2F6F8;
  min-height: 100vh;
  height: 100%;
  &__edit{
    color: #808080;
    cursor: pointer;
  }
  &__section{
    padding: 10px;
  }
  &__title{
    font-weight: 600;
  }
  &__status{
    margin-left: 2px;
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
    margin-top: 10px;
    padding-left: 5px;
    padding-bottom: 40px;
    overflow: auto;
  }
  &__main-card{
    border-radius: 10px;
    background: #F3F3F3;
    padding: 10px;
    min-width: 280px;
    margin-right: 20px;
    display: table;
    &__add{
      margin-top: 5px;
      color: #808080;
      font-weight: 500;
    }
    &__add-new{
      background: #323131;
      color: #FFFFFF;
    }
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
        // background: #D32323;
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
        margin: 3px 0;
        margin-left: 5px;
        font-weight: 600;
        font-size: 14px;
      }
      &__assign{
        font-style: italic;
        color: #0090FF;
        font-size: 13px;
      }
    }
  }
}

.label-desc-detailed{
  font-size: 13px;
  text-align: justify;
}

.label-project-detailed{
  font-weight: 600;
}

.label-color-detailed{
  margin: 3px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 12px;
  color: white;
  padding: 2px 12px;
}

.list-title{
  font-size: 13px;
}

.label-project{
  font-size: 13px;
  font-weight: 600;
}

.input{
  margin-bottom: 5px;
}

.logo-icon{
  color: #808080;
}

.text-area{
  height: 100px;
}

.add-label{
  border: none;
  color: #737F94;
  font-size: 13px;
  padding: 7px;
  border-radius: 5px;
  font-weight: 600;
}

.modal-section{
  text-align: center;
  margin-top: 20px;
  &__button {
    color: white;
    font-weight: 500;
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
}

.black-bg-overlay{
  background: #000000;
  opacity: 55%;
  width: 100vw;
  height: 100vh;
  z-index: 1041;
  top: 0;
  position: absolute;
  display: none;
}

.show{
  display: block;
}

.z-index-button{
  z-index: 1044;
}

.no-list{
  border: 1px dashed #808080;
  text-align: center;
  padding: 7px;
}

.img-attachments{
  width: 100px;
  height: auto;
}

.logo-comment{
  width: 36px;
  height: 36px;
  border-radius: 20px;
}

.comment-section-detailed{
  line-height: 18px;
  margin-left: 8px;
}

.comment-name{
  font-weight: 700;
  font-size: 14px;
}

.comment-content{
  line-height: 20px;
  font-size: 14px;
}
.comment{
  border-bottom: 2px solid #0000001f;
  padding-bottom: 12px;
}
</style>
