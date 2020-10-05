import validateEmail from '@/util/validate-email'

export default {
  name: 'login',
  computed: {
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
    doLogin () {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        loader: 'bars',
        color: '#0090FF'
      })

      this.$router.push('/home')
      // setTimeout(, 2000000)
      // untuk hide
      loader.hide()
    }
  }
}
