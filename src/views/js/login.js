import { mapGetters, mapActions } from 'vuex'
import validateEmail from '@/util/validate-email'
import Cookie from 'vue-cookie'
import axios from 'axios'

export default {
  name: 'login',
  created () {
    if (Cookie.get('dataId') && Cookie.get('dataToken')) {
      this.$router.replace('/home')
    }
  },
  computed: {
    ...mapGetters([
      'currentUser'
    ]),
    emailFormat () {
      if (this.email) {
        return validateEmail(this.email)
      }
      return true
    },
    passwordFormat () {
      if (this.password) {
        return this.password.length > 5
      }
      return true
    }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['getCurrentUser', 'postLoginUser']),
    doLogin () {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        loader: 'bars',
        color: '#0090FF'
      })
      console.log('tertekan')
      this.postLoginUser({
        data: {
          userEmail: this.email,
          userPassword: this.password
        },
        success: this.successLogin,
        fail: this.failLogin(loader)
      })
    },
    successLogin () {
      setTimeout(() => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + Cookie.get('dataToken')
        this.$router.push('/home')
      }, 1000)
    },
    failLogin (loader) {
      setTimeout(() => {
        loader.hide()
      }, 1000)
    }
  }
}
