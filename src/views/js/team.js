import AddMember from '@/components/modal/AddMember.vue'
import EditMember from '@/components/modal/EditMember.vue'
import NavBar from '@/components/home/NavBar.vue'
import PlainHeader from '@/components/PlainHeader.vue'
import Cookie from 'vue-cookie'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'team',
  components: {
    PlainHeader,
    NavBar,
    EditMember,
    AddMember
  },
  data () {
    return {
      userDelete: '',
      myId: Cookie.get('dataId')
    }
  },
  async created () {
    await this.getFirstData()
    this.getData()
  },
  computed: {
    ...mapGetters([
      'projectsData',
      'getUser'
    ]),
    dataDetail () {
      return this.projectsData || {}
    },
    members () {
      return this.dataDetail.data || []
    },
    membersProject () {
      return this.members.projects || []
    },
    detailMembers () {
      return this.membersProject.members || []
    }
  },
  methods: {
    ...mapActions([
      'getKanban',
      'getUserDetail',
      'getProjectData'
    ]),
    getData () {
      this.getUserDetail({
        data: {
          userId: this.members.userId
        }
      })
    },
    async getFirstData () {
      await this.getKanban({
        data: {
          projectId: this.$route.params.projectId,
          userId: Cookie.get('dataId')
        }
      })
      await this.getProjectData({
        data: this.$route.params.projectId
      })
    }
  }
}
