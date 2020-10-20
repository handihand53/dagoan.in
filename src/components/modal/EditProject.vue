<template>
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
</template>

<script src="./js/edit-project.js"></script>

<style lang="scss" scoped>
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
