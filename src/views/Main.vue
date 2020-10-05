<template>
  <div class="main-body">
    <PlainHeader/>
    <div class="">
      <div class="main-body__section">
        <div class="d-flex align-items-center">
          <div class="main-body__title">
            Website Development
          </div>
          <div class="main-body__status">
            On Going
          </div>
          <font-awesome-icon
            class="ml-1 main-body__edit"
            icon="pencil-alt"
            v-b-modal.edit-project
          />
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
    <!-- Modal edit project -->
    <b-modal
      id="edit-project"
      centered
      title="Edit Project"
      class="edit-project-modal"
      hide-footer
    >
      <label
        for="project-name"
        class="label-project"
      >
        Project Name<span class="red">*</span>
      </label>
      <b-input
        id="project-name"
        class="input"
        placeholder="Project name"
        v-model="projectName"
      />
      <label
        for="project-desc"
        class="label-project"
      >
        Project Description<span class="red">*</span>
      </label>
      <b-textarea
        placeholder="Description"
        class="input text-area"
        id="project-desc"
        v-model="projectDescription"
      />
      <label
        for="project-name"
        class="label-project"
      >
        Project Status
      </label>
      <b-form-select
        v-model="status"
        :options="optionsStatus"
        class=""
      ></b-form-select>
      <div class="modal-section">
        <button
          class="modal-section__button"
          @click="(projectName && projectDescription) && createProject()"
        >
          Create Project
        </button>
      </div>
    </b-modal>

    <!-- Modal edit card -->
    <b-modal
      id="edit-card"
      centered
      title="Edit Project Card"
      class="edit-project-modal"
      hide-footer
    >
      <label
        for="project-name"
        class="label-project"
      >
        Project Card Title<span class="red">*</span>
      </label>
      <b-input
        id="project-name"
        class="input"
        placeholder="Project Card Title"
        v-model="projectCardTitle"
      />
      <div class="modal-section">
        <button
          class="modal-section__button"
          @click="(projectCardTitle) && editCardProject()"
        >
          Edit Project Card
        </button>
      </div>
    </b-modal>

    <!-- Modal add task -->
    <div
      class="black-bg-overlay"
      :class="{'show': isAddLabel}">
    </div>
    <b-modal
      id="add-card"
      centered
      title="Add New Card"
      class="add-project-modal"
      hide-footer
    >
      <label
        for="project-name"
        class="label-project"
      >
        Title Card<span class="red">*</span>
      </label>
      <b-input
        id="project-name"
        class="input"
        placeholder="Project Card Title"
      />
      <label
        for="project-name"
        class="label-project"
      >
        Label Card<span class="red">*</span>
      </label>
      <div>
        <button
          class="add-label z-index-button"
          @click="isAddLabel = !isAddLabel"
        >
          Add Label
        </button>
      </div>
      <label
        for="project-name"
        class="label-project"
      >
        Estimate Time<span class="red">*</span>
      </label>
      <b-input
        id="project-name"
        class="input"
        type="number"
        placeholder="ex: 1 / 4 / 10"
      />
      <label
        for="project-name"
        class="label-project"
      >
        Description<span class="red">*</span>
      </label>
      <b-textarea
        placeholder="Description"
        class="input text-area"
        id="project-desc"
      />
      <label
        for="project-name"
        class="label-project"
      >
        Attachments
      </label>
      <div class="input-group">
        <div class="custom-file">
            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            <input type="file" class="custom-file-input" id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01" @change="onFileChange">
        </div>
      </div>
      <div class="mt-3">
        <p class="m-0 p-0 fs-12" v-for="(name, idx) in imageName" :key="idx">{{name}}
          <font-awesome-icon class="fs-icon" icon="times" @click="remove(idx)"/></p>
      </div>
      <div class="modal-section">
        <button
          class="modal-section__button"
          @click="(projectCardTitle) && editCardProject()"
        >
          Add Card
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script src="./js/main.js"></script>

<style lang="scss" scoped>
.red{
  color: red;
}
.main-body {
  background: #F2F6F8;
  height: 100vh;
  &__edit{
    cursor: pointer;
  }
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

.list-title{
  font-size: 13px;
}

.label-project{
  font-size: 13px;
}

.input{
  margin-bottom: 5px;
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
</style>
