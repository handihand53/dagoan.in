<template>
  <div class="cust-card d-flex flex-wrap">
    <a href="/main" class="cust-card__items no-gutters">
      <div class="cust-card__items-title">
        Website Development
      </div>
      <div class="cust-card__items-description">
        Research, Wireframe, Test, Visual Design
      </div>
      <div class="d-flex align-items-center">
        <font-awesome-icon
          icon="stopwatch"
          class="icon"
        />
        <span class="time">5 Agustus 2020</span>
      </div>
      <div>
        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt=""
        class="cust-card__items-picture">
        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt=""
        class="cust-card__items-picture">
        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt=""
        class="cust-card__items-picture">
        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt=""
        class="cust-card__items-picture">
      </div>
    </a>
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
      <label
        for="project-name"
        class="label-project"
      >
        Project Member (optional)
      </label>
      <vue-bootstrap-typeahead
        v-model="queryUsername"
        placeholder="Username"
        :data="['Canada', 'USA', 'Mexico']"
        class="input"
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
    }
    &-description{
      margin-top: 5px;
      font-size: 13px;
    }
    &-picture{
      border-radius: 30px;
      width: 26px;
      margin-right: 5px;
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
