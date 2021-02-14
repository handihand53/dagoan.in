<template>
  <div class="cust-card d-flex flex-wrap">
    <router-link :to="'/main/' + project.data.projectId" class="cust-card__items no-gutters"
      v-for="project in displayProject" :key="project.data.projectId">
      <div class="cust-card__items-title">
        {{ project.data.projects.projectName }}
      </div>
      <div class="cust-card__items-description">
        {{ project.data.projects.description }}
      </div>
      <div class="d-flex align-items-center my-1">
        <font-awesome-icon
          icon="calendar"
          class="icon"
        />
        <span class="time">
          {{ project.data.projects.createdAt }}
        </span>
      </div>
      <!-- {{project.data.projects.members}} -->
      <div
        class="d-inline"
      >
        <div
          v-for="(member, idx) in project.data.projects.members"
          :key="member.memberId"
          class="d-inline"
        >
          <div v-if="idx<3" class="cust-card__items-number">
            {{(member.userName.substr(0,1)).toUpperCase()}}
          </div>
        </div>
      </div>
      <div class="cust-card__items-number"
        style="padding-top: 2px;"
        v-if="project.data.projects.members.length > 3">
        +{{project.data.projects.members.length - 3}}
      </div>
    </router-link>
    <div
      class="cust-card__floating-button shadow"
      v-b-modal.add-project
    >
      +
    </div>
    <!-- Modal -->
    <b-modal
      id="add-project"
      centered
      title="Add Project"
      class="add-modal"
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
      <div class="modal-section">
        <button
          class="modal-section__button"
          @click="(projectName && projectDescription) && createProject()"
        >
          Create Project
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script src="./js/home-content-card.js"></script>

<style lang="scss" scoped>
.cust-card{
  &__items {
    margin-top: 10px;
    padding: 10px;
    width: calc(100%/2 - 6px);
    border-radius: 10px;
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.07);
    background: white;
    color: black;
    text-decoration: none;
    &-title{
      font-weight: 900;
      font-size: 18px;
      display: -webkit-box !important;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    &-description{
      margin-top: 5px;
      font-size: 13px;
      display: -webkit-box !important;
      overflow: hidden;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    &-picture{
      -webkit-box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.2);
      -moz-box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.2);
      box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.2);
      border-radius: 30px;
      height: 30px;
      width: 30px;
      margin-right: 5px;
    }
    &-number{
      -webkit-box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.4);
      -moz-box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.4);
      box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.4);
      display: inline-block;
      text-align: center;
      font-weight: 600;
      color: white;
      border-radius: 30px;
      width: 30px;
      height: 30px;
      margin-right: 5px;
      background-color: #FFA000;
    }
  }
  &__items:nth-child(odd) {
    margin-right: auto;
  }
  .time{
    margin-left: 5px;
    font-size: 14px;
    font-weight: 600;
  }
  .icon{
    font-size: 14px;
  }
  &__floating-button {
    position: fixed;
    bottom: 30px;
    background: linear-gradient(292deg, #0072ca -15%, #0079d5 25%, #60baff 100%);
    margin: 0% auto;
    left: 0;
    right: 0;
    width: 48px;
    text-align: center;
    color: white;
    font-weight: 600;
    font-size: 32px;
    border-radius: 100px;
  }
}

 .label-project{
    font-size: 13px;
  }

  .input{
    margin-bottom: 5px;
  }

  .text-area{
    height: 200px;
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

  .red{
    color: red;
    font-weight: 600;
  }
</style>
