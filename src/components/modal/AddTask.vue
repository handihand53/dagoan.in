<template>
  <div>
    <div
      class="black-bg-overlay"
      :class="{'show': isAddLabel}">
    </div>
    <div class="show-button"
      :class="{'show': isAddLabel}">
      <button class="button-change">
        Add Label
      </button>
    </div>
    <b-modal
      id="add-card"
      centered
      v-model="show"
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
        v-model="projectCardTitle"
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
      <div class="d-flex">
        <button
          class="add-label z-index-button"
          @click="getLabel()"
        >
          <span v-if="!color">Add Label</span>
          <span v-else>Change Label</span>
        </button>
        <div
          class="no-gutters m-0 py-1 mx-0 label-border custom-modal-label"
          :style="'background-color:'  + color"
        >
          {{name}}
        </div>
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
        v-model="taskTimeLeft"
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
        v-model="description"
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
        <div
          v-for="(img, idx) in image"
          :key="idx"
        >
          <expandable-image
            class="img-custom"
            :src="img.data.image"
          ></expandable-image>
          <!-- <img
            class="img-custom"
            :src="img.data.image" alt=""
          > -->
          <p class="m-0 p-0 fs-12 mb-3 custom-p">{{img.name}}
          <font-awesome-icon class="fs-icon" icon="times" @click="remove(idx)"/></p>
        </div>
      </div>
      <div class="modal-section">
        <button
          class="modal-section__button"
          @click="(projectCardTitle) && addTaskList()"
        >
          Add Task List
        </button>
      </div>
    </b-modal>
    <div
      class="hide-label"
      :class="{'show': showAddLabel}"
    >
      <div class="arrow-left"></div>
      <div class="label-modal">
        <div class="d-flex justify-content-around border-bottom pb-1 font-weight-bold">
          <div class="d-flex justify-content-center col-10 no-gutters p-0 m-0">
            Labels
          </div>
          <font-awesome-icon
              class="pencil-logo"
              icon="times"
              @click="closeAll()"
            />
        </div>
        <div class="overflow-y">
           <div
            class="d-flex justify-content-around pt-2"
            v-for="label in labelFormData" :key="label.labelFormId"
          >
            <div
              class="col-10 no-gutters m-0 py-1 mx-0 label-border"
              :style="'background-color:'  + label.labelColor"
              @click="selectLabel(label.labelFormId, label.labelName, label.labelColor)"
            >
              {{label.labelName}}
            </div>
            <div class="d-flex align-items-center"
            @click="createEditLabel(label.labelFormId, label.labelName, label.labelColor)">
              <font-awesome-icon
                class="pencil-logo"
                icon="pencil-alt"
              />
            </div>
          </div>
        </div>
        <div class="border-bottom mt-2"></div>
        <button
          class="btn-new-label"
          @click="createLabel"
        >
          Create a new label
        </button>
      </div>
    </div>
    <div
      class="hide-label"
      :class="{'show': createLabelStatus}"
    >
      <div class="arrow-left"></div>
      <div class="label-modal">
        <div class="d-flex justify-content-around border-bottom pb-1 font-weight-bold">
          <font-awesome-icon
              class="pencil-logo"
              icon="chevron-left"
              @click="backLabel"
            />
          <div class="d-flex justify-content-center col-10 no-gutters p-0 m-0">
            Create Label
          </div>
        </div>
        <div class="p-1 pt-0">
          <div class="font-label">
            Label Name<span class="red">*</span>
          </div>
          <b-input
            v-model="labelNew"
            placeholder="Label name"
            class="input"
            id="label-name"
          />
        </div>
        <div class="p-1">
          <div class="font-label">
            Select a color<span class="red">*</span>
          </div>
          <div class="d-flex flex-wrap align-content-start">
            <div class="item-color"
              @click="selectedColor = color"
              v-for="color in colorList" :key="color"
              :style="'background-color:' + color" >
            </div>
          </div>
        </div>
        <div class="border-bottom mt-1"></div>
        <div class="p-1 pt-0">
          <div class="font-label">
            Example
          </div>
          <div
            class="item-color-selected"
            :style="'background-color:' + selectedColor"
          >
            {{labelNew}}
          </div>
        </div>
        <button
          class="btn-new-label"
          @click="addLabel"
        >
          Create label
        </button>
      </div>
    </div>
    <!-- edit label -->
    <div
      class="hide-label"
      :class="{'show': editLabelStatus}"
    >
      <div class="arrow-left"></div>
      <div
        class="label-modal"
      >
        <div class="d-flex justify-content-around border-bottom pb-1 font-weight-bold">
          <font-awesome-icon
              class="pencil-logo"
              icon="chevron-left"
              @click="backEditLabel"
            />
          <div class="d-flex justify-content-center col-10 no-gutters p-0 m-0">
            Edit Label
          </div>
        </div>
        <div class="p-1 pt-0">
          <div class="font-label">
            Label Name<span class="red">*</span>
          </div>
          <b-input
            v-model="editLabelName"
            placeholder="Label name"
            class="input"
            id="label-name"
          />
        </div>
        <div class="p-1">
          <div class="font-label">
            Select a color<span class="red">*</span>
          </div>
          <div class="d-flex flex-wrap align-content-start">
            <div class="item-color"
              @click="selectedColorEdit = color"
              v-for="color in colorList" :key="color"
              :style="'background-color:' + color" >
            </div>
          </div>
        </div>
        <div class="border-bottom mt-1"></div>
        <div class="p-1 pt-0">
          <div class="font-label">
            Example
          </div>
          <div
            class="item-color-selected"
            :style="'background-color:' + selectedColorEdit"
          >
            {{editLabelName}}
          </div>
        </div>
        <button
          class="btn-new-label"
          @click="editLabel"
        >
          Edit label
        </button>
      </div>
    </div>
  </div>
</template>

<script src="./js/add-task.js"></script>

<style lang="scss" scoped>
.item-color {
  margin: auto;
  margin-top: 5px;
  height: 25px;
  width: calc(100%/5 - 6px);
  border-radius: 3px;
  &:last-child{
    margin-left: 3px;
    margin-top: 5px;
  }
}

.item-color-selected {
  margin-top: 5px;
  padding: 5px;
  width: 100%;
  border-radius: 3px;
  color: white;
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
  opacity: 80%;
  width: 100vw;
  height: 100vh;
  z-index: 1041;
  top: 0;
  position: fixed;
  display: none;
}

.show{
  display: block!important;
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

.label-modal {
  position: fixed;
  color: black;
  background: white;
  z-index: 2000;
  top: 165px;
  left: 115px;
  padding: 10px;
  border-radius: 10px;
  width: 225px;
  max-height: 400px;
}

.arrow-left {
  width: 0;
  height: 0;
  position: fixed;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right:10px solid white;
  z-index: 2001;
  top: 225px;
  left: 105px;
}

.pencil-logo{
  font-size: 20px;
  color: #BCBCBC;
}

.label-border{
  border-radius: 6px;
  color:white;
}

.btn-new-label{
  border-radius: 6px;
  padding: 7px;
  margin-top: 10px;
  border: none;
  width: 100%;
  color: #40506C;
  background: #DFDFDF;
}

.hide-label{
  display: none;
}

.font-label{
  margin-bottom: 3px;
  margin-top: 3px;
  font-size: 15px;
}

.button-change{
  z-index: 2000;
  top: 221px;
  left: 24px;
  position: fixed;
  border: none;
  color: #737F94;
  font-size: 13px;
  padding: 7px;
  border-radius: 5px;
  font-weight: 600;
}

.show-button {
  display: none;
}

.overflow-y {
  overflow-y: scroll;
  max-height: 295px;
}

.custom-modal-label{
  padding: 7px;
  padding-left: 14px;
  padding-right: 14px;
  margin-left: 8px!important;
}

.img-custom{
  width: 100%;
}

.custom-p{
  font-size: 12px;
}
</style>
