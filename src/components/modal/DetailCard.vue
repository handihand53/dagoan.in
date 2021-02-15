<template>
  <div>
    <b-modal
      v-if="labelListForm"
      id="detail-card"
      centered
      title="Add New Card"
      class="add-project-modal"
      v-model="show"
      hide-footer
      hide-header
    >
      <div class="d-flex justify-content-between mb-2 border-bottom">
        <label
          class="label-project title-lab"
        >
          Detail Project
        </label>
        <font-awesome-icon
          icon="times"
          class="logo-icon"
          @click="reset()"
        />
      </div>
      <div
        for="project-name"
        class="label-project-detailed mb-3"
      >
        <font-awesome-icon
          icon="book"
          class="logo-icon"
        />
        {{ taskList.title }}
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
          :style="'background-color:' + labelFilter(taskList.tagId).labelColor"
        >
          {{ labelFilter(taskList.tagId).labelName }}
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
        Estimated time: {{getTime(taskList.taskEstimatedTime)}}
      </label>
      <br>
      <label
        for="project-name"
        class="label-project-detailed"
      >
        <font-awesome-icon
          icon="stopwatch"
          class="logo-icon"
        />
        Time left: {{getTime(taskList.taskTimeLeft)}}
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
        {{ taskList.description }}
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
      <div class="over">
        <div
          class="m-1 d-inline-block"
          v-for="image in taskList.imageList"
          :key="image"
        >
          <expandable-image
            class="img-attachments"
            :src="getImage(image)"
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
          v-model="newComment"
        />
        <div class="ml-2">
          <b-button
            variant="primary"
            @click="newComment && addComment()"
          >
            <font-awesome-icon
              icon="plus"
              class="logo-icon-button"
            />
          </b-button>
        </div>
      </div>
      <div
        v-if="!commentForm.length"
        class="custom-no-comment"
      >
        No Comment here
      </div>
      <div v-else>
        <div
          class="d-flex mt-2"
          :class="{'comment': idx + 1 != commentForm.length}"
          v-for="(comment, idx) in commentForm"
          :key="comment.commentId"
        >
          <div src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt=""
          class="logo-comment">
          <div class="logo-nick">
            {{ (comment.userName.substr(0,1)).toUpperCase() }}
          </div>
          </div>
          <div class="comment-section-detailed">
            <div class="comment-name d-flex justify-content-between">
              <div class="name-max">
                {{comment.userName}}
              </div>
              <div
                v-if="comment.userId === user"
                class="owner"
              >
                You
              </div>
            </div>
            <div class="comment-content mt-1">
              {{comment.comment}}
            </div>
          <div
            v-if="comment.userId === user"
            class="d-flex"
          >
              <div class="edit"
                v-b-modal.edit-comment
                @click="setDataEdit(comment)"
              >
                <font-awesome-icon
                  class="edit-icon"
                  icon="pencil-alt"
                />
                Edit
              </div>
              <div class="delete"
                @click="deleteCom(comment.commentId)"
              >
                <font-awesome-icon
                  class="edit-icon"
                  icon="trash-alt"
                />
                Delete
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    <update-comment
      :dataComment="dataComment"
      :kanbanId="kanbanId"
      :taskId="taskId"
      v-on:editted="getDetail"
      @click="getDetail()"
    />
  </div>
</template>

<script src="./js/detail-card.js"></script>

<style lang="scss" scoped>
.label-desc-detailed{
  font-size: 13px;
  text-align: justify;
  display: -webkit-box !important;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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

.logo-nick{
  background: orange;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  text-align: center;
  font-weight: bold;
  color: white;
  padding-top: 2px;
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
  display: inline-block;
}

.logo-comment{
  width: 36px;
  height: 36px;
  border-radius: 20px;
}

.comment-section-detailed{
  width: 100%;
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
  padding-bottom: 7px;
}

.inline-blocke{
  display: inline-block;
}

.over{
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.name-max{
  display: -webkit-box!important;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.owner{
  margin-left: 4px;
  font-weight: 400;
  color: white;
  background-color: #ab9f9f;
  border-radius: 10px;
  padding: 1px 11px;
  font-size: 12px;
}

.edit-icon{
  font-size: 12px;
  color: darkgray;
}

.edit{
  margin-top: 7px;
  font-size: 12px;
  cursor: pointer;
}

.delete{
  margin-left: 10px;
  margin-top: 7px;
  font-size: 12px;
  cursor: pointer;
}

.custom-no-comment{
  text-align: center;
  font-size: 14px;
  font-weight: 600;
}

.label-project{
  font-size: 13px;
  font-weight: 600;
}

.title-lab {
  font-size: 20px;
  display: -webkit-box !important;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.label-color-detailed{
  margin: 3px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 12px;
  color: white;
  padding: 2px 12px;
}

</style>
