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
        <font-awesome-icon
          icon="book"
          class="logo-icon"
        />
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
        <font-awesome-icon
          icon="tag"
          class="logo-icon"
        />
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
        <font-awesome-icon
          icon="clock"
          class="logo-icon"
        />
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
        <font-awesome-icon
          icon="list-alt"
          class="logo-icon"
        />
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
        <font-awesome-icon
          icon="paperclip"
          class="logo-icon"
        />
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

    <!-- Modat detail card -->
    <b-modal
      id="detail-card"
      centered
      title="Add New Card"
      class="add-project-modal"
      hide-footer
      hide-header
    >
      <div
        for="project-name"
        class="label-project-detailed mb-3"
      >
        <font-awesome-icon
          icon="book"
          class="logo-icon"
        />
        Create Design Mock Up
      </div>
      <div
        for="project-name"
        class="label-project-detailed mb-1"
      >
        <font-awesome-icon
          icon="tag"
          class="logo-icon"
        />
        Label Card
      </div>
      <div class="d-flex pl-3 mb-3 flex-wrap">
        <div
          class="label-color-detailed"
          style="background-color: #D323BD"
        >
          Tips
        </div>
        <div
          class="label-color-detailed"
          style="background-color: #FFA000"
        >
          Front End
        </div>
        <div
          class="label-color-detailed"
          style="background-color: #344563"
        >
          UI/UX
        </div>
        <div
          class="label-color-detailed"
          style="background-color: #EB5A46"
        >
          Urgent
        </div>
        <div
          class="label-color-detailed"
          style="background-color: #61BD4F"
        >
          Retro
        </div>
        <div
          class="label-color-detailed"
          style="background-color: #00C2E0"
        >
          Future
        </div>
      </div>
      <label
        for="project-name"
        class="label-project-detailed"
      >
        <font-awesome-icon
          icon="stopwatch"
          class="logo-icon"
        />
        03:00:00
      </label>
      <div
        for="project-name"
        class="label-project-detailed"
      >
        <font-awesome-icon
          icon="list-alt"
          class="logo-icon"
        />
        Description
      </div>
      <div class="label-desc-detailed mb-3">
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries
      </div>
      <div
        for="project-name"
        class="label-project-detailed"
      >
        <font-awesome-icon
          icon="paperclip"
          class="logo-icon"
        />
        Attachments
      </div>
      <div class="d-flex align-content-start flex-wrap">
        <div class="m-1">
          <expandable-image
            class="img-attachments"
            src="https://images.unsplash.com/photo-1550948537-130a1ce83314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80"
            alt="dog"
            title="dog"
          ></expandable-image>
        </div>
        <div class="m-1">
          <expandable-image
            class="img-attachments"
            src="https://www.vectortiles.com/wp-content/uploads/checkers-vector-tiles-02-300x300.jpg"
            alt="dog"
            title="dog"
          ></expandable-image>
        </div>
      </div>
      <div
        for="project-name"
        class="label-project-detailed mb-2 mt-4"
      >
        <font-awesome-icon
          icon="comment-alt"
          class="logo-icon"
        />
        Comment
      </div>
      <div class="d-flex justify-content-between">
        <b-textarea
          id="project-name"
          class="input"
          placeholder="Write a comment"
          v-model="comment"
        />
        <div class="ml-2">
          <b-button
           variant="primary"
          >
            <font-awesome-icon
              icon="plus"
              class="logo-icon-button"
            />
          </b-button>
        </div>
      </div>
      <div>
        <div class="d-flex mt-2 comment">
          <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt=""
          class="logo-comment">
          <div class="comment-section-detailed">
            <div class="comment-name">
              David Beckham
            </div>
            <div class="comment-content mt-1">
              Tolong detail diperhatikan lagi, jika ada yg ditanyakan hubungi 0238123414124
            </div>
          </div>
        </div>
        <div class="d-flex mt-2">
          <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt=""
          class="logo-comment">
          <div class="comment-section-detailed">
            <div class="comment-name">
              David Beckham
            </div>
            <div class="comment-content mt-1">
              Tolong detail diperhatikan lagi, jika ada yg ditanyakan hubungi 0238123414124
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    <NavBar/>
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
