import axios from 'axios'
import Cookie from 'vue-cookie'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'add-task',
  data () {
    return {
      show: false,
      comment: '',
      countImage: 0,
      id: '',
      name: '',
      color: '',
      image: [],
      imageName: [],
      taskTimeLeft: 0,
      description: '',
      isAddLabel: false,
      showAddLabel: false,
      projectCardTitle: '',
      createLabelStatus: false,
      selectedColor: null,
      editLabelStatus: false,
      labelNew: '',
      editLabelName: '',
      selectedColorEdit: '',
      editLabelId: '',
      colorList: [
        '#61BD4F',
        '#F2D600',
        '#FF9F1A',
        '#EB5A46',
        '#C377E0',
        '#0079BF',
        '#00C2E0',
        '#51E898',
        '#FF78CB',
        '#344563',
        '#B3BAC5'
      ]
    }
  },
  props: {
    kanbanId: {
      type: String,
      default: ''
    },
    taskId: {
      type: String,
      default: ''
    },
    lengthSection: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters([
      'getResponse',
      'labelList'
    ]),
    labelForm () {
      return this.labelList.data || []
    },
    labelFormData () {
      return this.labelForm.labelForm || []
    }
  },
  methods: {
    ...mapActions([
      'postTaskList',
      'getLabelListData',
      'postNewLabel',
      'editTheLabel'
    ]),
    showLabel () {
      this.showAddLabel = true
      this.isAddLabel = true
    },
    hideLabel () {
      this.showAddLabel = false
      this.isAddLabel = false
    },
    closeAll () {
      this.showAddLabel = false
      this.isAddLabel = false
      this.show = true
    },
    getLabel () {
      this.show = false
      this.showLabel()
      this.getLabelListData({
        data: {
          projectId: this.$route.params.projectId,
          userId: Cookie.get('dataId')
        }
      })
    },
    backLabel () {
      this.createLabelStatus = !this.createLabelStatus
      this.showAddLabel = !this.showAddLabel
      this.getLabelListData({
        data: {
          projectId: this.$route.params.projectId,
          userId: Cookie.get('dataId')
        }
      })
    },
    backEditLabel () {
      this.editLabelStatus = false
      this.showAddLabel = true
      this.getLabelListData({
        data: {
          projectId: this.$route.params.projectId,
          userId: Cookie.get('dataId')
        }
      })
    },
    createLabel () {
      this.showAddLabel = !this.showAddLabel
      this.createLabelStatus = !this.createLabelStatus
    },
    createEditLabel (id, name, color) {
      this.editLabelId = id
      this.editLabelName = name
      this.selectedColorEdit = color
      this.show = false
      this.editLabelStatus = true
    },
    addLabel () {
      this.postNewLabel({
        data: {
          labelColor: this.selectedColor,
          labelName: this.labelNew,
          projectId: this.$route.params.projectId,
          userId: Cookie.get('dataId')
        }
      })
      this.backLabel()
    },
    editLabel () {
      this.editTheLabel({
        data: {
          labelId: this.editLabelId,
          labelColor: this.selectedColorEdit,
          labelName: this.editLabelName,
          projectId: this.$route.params.projectId,
          userId: Cookie.get('dataId')
        }
      })
      this.backEditLabel()
    },
    selectLabel (id, name, color) {
      this.id = id
      this.name = name
      this.color = color
      this.show = true
      this.hideLabel()
    },
    addTaskList () {
      const formData = new FormData()
      const masterData = {
        userId: Cookie.get('dataId'),
        kanbanId: this.kanbanId,
        projectId: this.$route.params.projectId,
        taskList: {
          assignTo: {},
          imageList: [],
          description: this.description,
          section: this.lengthSection,
          tagId: this.id,
          taskEstimatedTime: this.taskTimeLeft,
          taskTimeLeft: this.taskTimeLeft,
          title: this.projectCardTitle
        }
      }
      this.image.forEach((data) => {
        formData.append('images', data.data)
      })

      formData.append('metaData', JSON.stringify(masterData))

      axios.post(`/api/taskList/add`, formData,
        {
          headers:
            {
              Authorization: `Bearer ${Cookie.get('dataToken')}`
            }
        })
        .then(() => {
          this.$emit('added')
          this.show = false
        })
    },
    onFileChange (e) {
      if (
        e.target.files[0].type === 'image/png' ||
        e.target.files[0].type === 'image/jpeg' ||
        e.target.files[0].type === 'image/jpg'
      ) {
        this.imageName.push(e.target.files[0].name)
        this.image.push({
          data: e.target.files[0],
          name: e.target.files[0].name
        })
      }
      this.createImage(this.image[this.image.length - 1].data, e.target.files[0])
    },
    createImage (item, file) {
      var reader = new FileReader()
      reader.onload = (e) => {
        item.image = e.target.result
      }
      reader.readAsDataURL(file)
      console.log(this.image)
    },
    remove (idx) {
      this.image.splice(idx, 1)
      this.imageName.splice(idx, 1)
    }
  }
}
