<template>
    <b-modal
      v-model="show"
      id="add-member"
      centered
      title="Tambah Member"
      class="edit-project-modal"
      hide-footer
    >
    <div class="user">
      Email
    </div>
      <vue-bootstrap-typeahead
        v-model="queryUsername"
        placeholder="Email"
        :data="[]"
        class="input"
      />
      <div
        class="unknown"
        v-if="detected"
      >
        Email tidak terdaftar
      </div>
      <div class="modal-section d-flex justify-content-center">
        <button
          class="modal-section__button modal-section__button-add"
          @click="queryUsername && add()"
        >
          Tambah
        </button>
      </div>
    </b-modal>
</template>

<script src="./js/add-member.js"></script>

<style lang="scss" scoped>
.modal-section{
  &__button{
    border: none;
    padding: 5px 15px;
    border-radius: 10px;
    margin: 10px;
    &-add{
      color: white;
      background: #3B86FF;
    }
  }
}

.user{
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
}

.unknown{
  color: red;
  margin-top: 8px;
  font-size: 13px;
}
</style>
