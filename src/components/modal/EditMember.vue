<template>
    <b-modal
      v-model="show"
      id="edit-member"
      centered
      title="Hapus Member"
      class="edit-project-modal"
      hide-footer
    >
      <div>
        Apakah anda yakin ingin menghapus
        <span class="name-delete">{{ username }}</span>
        dari team ?
      </div>
      <div class="modal-section d-flex justify-content-center">
        <button
          class="modal-section__button modal-section__button-acc"
          @click="deleteMem()"
        >
          Hapus
        </button>
         <button
          class="modal-section__button modal-section__button-dec"
          @click="show = !show"
        >
          Batal
        </button>
      </div>
    </b-modal>
</template>

<script src="./js/edit-member.js"></script>

<style lang="scss" scoped>
.modal-section{
  &__button{
    border: none;
    padding: 5px 15px;
    border-radius: 10px;
    margin: 10px;
    &-acc{
      color: white;
      background: #3B86FF;
    }
    &-dec{
      color: #808080;
      background: white;
    }
  }
}

.name-delete{
  font-weight: 600;
}
</style>
