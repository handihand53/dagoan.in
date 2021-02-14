<template>
  <div class="team-body">
    <PlainHeader/>
    <div class="p-2">
      <div class="team-body__title">
        Team Member
      </div>
    </div>
    <div class="p-2">
      <div class="bg-white">
        <div class="d-flex justify-content-between p-1 title-section">
          <div>
            Member
            ({{ detailMembers.length + 1}})
          </div>
          <div>
            <button
              class="team-body__button-custom"
              v-b-modal.add-member
            >
              + Add new Member
            </button>
          </div>
        </div>
        <div class="bg-white"
          v-if="getUser"
        >
          <div class="team-body__wrap-list">
            <div
              class="d-flex
              justify-content-center
              align-items-center
            ">
              <div
                class="team-body__image"
                alt="">
                {{ (getUser.userName.substr(0, 1)).toUpperCase() }}
              </div>
            </div>
            <div>
              <div class="name">
                {{getUser.userName}}
              </div>
              <div class="label">
                Owner
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white"
        >
          <div
            class="team-body__wrap-list d-flex justify-content-between align-items-center"
            v-for="mem in members.projects.members" :key="mem.memberId"
          >
            <div class="d-flex justify-content-start">
              <div
                class="d-flex
                justify-content-center
                align-items-center
              ">
                <div
                  class="team-body__image"
                  alt="">
                  {{ ((mem.userName).substr(0, 1)).toUpperCase() }}
                </div>
              </div>
              <div>
                <div class="name">
                  {{mem.userName}}
                </div>
                <div class="label">
                  Member
                </div>
              </div>
            </div>
            <div
              v-if="getUser.userId === myId"
              v-b-modal.edit-member
              @click="userDelete = mem"
            >
              <font-awesome-icon
                class="team-body__icon"
                icon="times"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavBar/>
    <edit-member
      :member="userDelete"
      v-on:editted="getFirstData"
      @click="getFirstData()"
    />
    <add-member
      v-on:editted="getFirstData"
      @click="getFirstData()"
    />
  </div>
</template>

<script src="./js/team.js"></script>

<style lang="scss" scoped>
.team-body {
  background: #F2F6F8;
  min-height: 100vh;
  height: 100%;
  &__input-group{
    border: 1px solid #b6b6b6;
    border-radius: 5px;
  }
  &__title {
    font-weight: 600;
  }
  &__button-search{
    background-color: white;
    border-radius: 5px 0 0 5px;
  }
  &__search{
    color: #b6b6b6;
  }
  &__icon{
    color: #b6b6b6;
  }
  &__button-custom{
    border: none;
    background: green;
    color: white;
    font-size: 12px;
    padding: 2px 5px;
    border-radius: 7px;
    font-weight: 600;
  }
  &__image{
    border-radius: 30px;
    width: 50px;
    margin-right: 10px;
    background: #FFA000;
    height: 100%;
    text-align: center;
    justify-content: center;
    padding-top: 6px;
    font-size: 24px;
    font-weight: 700;
  }
  &__wrap-list{
    display: flex;
    padding: 10px 15px;
  }
}

.name{

}

.label{
  color: white;
  background-color: #3B86FF;
  border-radius: 7px;
  display: inline;
  font-size: 12px;
  padding: 3px 10px;
  font-weight: 600;
}

.label-member{
  color: white;
  background-color: #B6B6B6;
  border-radius: 7px;
  display: inline;
  font-size: 12px;
  padding: 3px 10px;
  font-weight: 600;
}

.title-section{
  border-bottom: 1px solid #DEDEDE;
}

input:focus{
  outline: 0!important;
  border: 0px!important;
}
</style>
