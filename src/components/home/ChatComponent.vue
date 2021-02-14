<template>
  <div>
    <beautiful-chat
      class="custom-class"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :close="closeChat"
      :colors="colors"
      :isOpen="isChatOpen"
      :messageList="msg"
      :messageStyling="messageStyling"
      :newMessagesCount="newMessagesCount"
      :onMessageWasSent="onMessageWasSent"
      :open="openChat"
      :participants="participants"
      :showCloseButton="true"
      :showLauncher="true"
      :showEmoji="false"
      :showFile="false"
      :showTypingIndicator="showTypingIndicator"
      :showEdition="true"
      :showDeletion="false"
      :showConfirmationDeletion="false"
      :confirmationDeletionMessage="'Are you sure? (you can customize this message)'"
      :titleImageUrl="titleImageUrl"
      @onType="handleOnType"
      @edit="editMessage"
      @remove="removeMessage"
    >
    <template v-slot:text-message-body="{ message }">
      <small style="font-weight: bold">
        {{message.data.meta}}
      </small>
      <br>
      {{message.data.text}}
    </template>
    <template v-slot:user-avatar="{ message, user }">
      <div
        style="border-radius:50%; color: white; font-size: 15px; line-height:25px; text-align:center;background: #4e8cff; width: 25px !important;
        padding-top: 2px; height: 25px !important; min-width: 30px;min-height: 30px;margin: 5px; font-weight:bold"
        v-if="message.type === 'text' && user && user.name"
      >
        {{user.name.toUpperCase()[0]}}
      </div>
    </template>
      <!-- <template v-slot:text-message-toolbox="scopedProps">
        <button v-if="!scopedProps.me && scopedProps.message.type==='text'" @click.prevent="like(scopedProps.message.id)">
          👍
        </button>
      </template>
      <template v-slot:text-message-body="scopedProps">
        <p class="sc-message--text-content" v-html="scopedProps.messageText"></p>
        <p v-if="scopedProps.message.data.meta" class='sc-message--meta' :style="{color: scopedProps.messageColors.color}">{{scopedProps.message.data.meta}}</p>
        <p v-if="scopedProps.message.isEdited || scopedProps.message.liked" class='sc-message--edited'>
          <template v-if="scopedProps.message.isEdited">✎</template>
          <template v-if="scopedProps.message.liked">👍</template>
        </p>
      </template> -->
      <!-- <template v-slot:system-message-body="{ message }">
        [System]: {{message.text}}
      </template> -->
    </beautiful-chat>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Cookie from 'vue-cookie'

export default {
  name: 'app',
  data () {
    return {
      fetched: false,
      room: this.$route.params.projectId,
      currentId: 21,
      participants: [],
      titleImageUrl:
        'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      msg: [],
      messageList: [
        { type: 'text', author: `me`, id: 0, data: { text: `Why don't they have salsa on the table?` } },
        { type: 'text', author: `mattmezza`, id: 1, data: { text: `What do you need salsa for?` } },
        { type: 'text', author: `me`, id: 2, data: { text: `Salsa is now the number one condiment in America.` } },
        { type: 'text', author: `mattmezza`, id: 3, data: { text: `You know why? Because people like to say 'salsa.' 'Excuse me, do you have salsa?' 'We need more salsa.' 'Where is the salsa? No salsa?'` } },
        { type: 'text', author: `me`, id: 4, data: { text: `You know it must be impossible for a Spanish person to order seltzer and not get salsa. 'I wanted seltzer, not salsa.'` } },
        { type: 'text', author: `mattmezza`, id: 5, data: { text: `Don't you know the difference between seltzer and salsa?? You have the seltezer after the salsa!` } },
        { type: 'text', author: `me`, id: 6, data: { text: `See, this should be a show. This is the show. ` } },
        { type: 'text', author: `mattmezza`, id: 7, data: { text: `What?` } },
        { type: 'text', author: `me`, id: 8, data: { text: `This. Just talking.` } },
        { type: 'text', author: `mattmezza`, id: 9, data: { text: `Yeah, right.` } },
        { type: 'text', author: `me`, id: 10, data: { text: `I'm really serious. I think that's a good idea. ` } },
        { type: 'text', author: `mattmezza`, id: 11, data: { text: `Just talking? Well what's the show about?` } },
        { type: 'text', author: `me`, id: 12, data: { text: `It's about nothing.` } },
        { type: 'text', author: `mattmezza`, id: 100, data: { text: `No story?` } },
        { type: 'system', id: 13, data: { text: 'You have been transferred to another operator', meta: '04-07-2018 15:57' } },
        { type: 'file', author: `support`, id: 14, data: { text: `No forget the story. `, file: { name: 'awesome', url: 'https://media.giphy.com/media/dkGhBWE3SyzXW/giphy.gif' } } },
        { type: 'file', author: `me`, id: 15, data: { text: `What about this one instead?? `, file: { url: 'http://www.quickmeme.com/img/2d/2d95cc80f9a2a2578a8f632eebecddcc1c12e5b08ab85f81a5d401670d5f36c1.jpg' }, meta: '✓✓ Read' } },
        { type: 'text', author: `support`, id: 16, data: { text: `You've got to have a story. You've got to have a story. You've got to have a story. You've got to have a story. You've got to have a story. You've got to have a story. `, meta: 'Handi Hermawan' } },
        { type: 'emoji', author: `me`, id: 17, data: { emoji: `😋` } },
        { type: 'text', author: `me`, id: 18, data: { text: `Do you read me...`, meta: '✓✓ Read' } },
        { type: 'text', author: `me`, id: 19, data: { text: `...or not?`, meta: 'Senin 24 sept' } },
        { type: 'system', id: 20, data: { text: 'User changed security key', meta: '04-08-2018 15:57' } },
        { type: 'text', author: `support`, id: 21, data: { text: `What about suggestions?` }, suggestions: ['Looks good!', "It's OK.", 'Uhh.. Do I really have to say something?', "This suggestion is way too long for css purpose. Let's make it long... Longer, and more and more.. Never ending."] }
      ],
      newMessagesCount: 5,
      // isChatOpen: false,
      isChatOpen: true,
      showTypingIndicator: '',
      colors: null,
      availableColors:
      {
        red: {
          header: {
            bg: '#D32F2F',
            text: '#fff'
          },
          launcher: {
            bg: '#D32F2F'
          },
          messageList: {
            bg: '#fff'
          },
          sentMessage: {
            bg: '#F44336',
            text: '#fff'
          },
          receivedMessage: {
            bg: '#eaeaea',
            text: '#222222'
          },
          userInput: {
            bg: '#fff',
            text: '#212121'
          },
          userList: {
            bg: '#fff',
            text: '#212121'
          }
        },
        green: {
          header: {
            bg: '#388E3C',
            text: '#fff'
          },
          launcher: {
            bg: '#388E3C'
          },
          messageList: {
            bg: '#fff'
          },
          sentMessage: {
            bg: '#4CAF50',
            text: '#fff'
          },
          receivedMessage: {
            bg: '#eaeaea',
            text: '#222222'
          },
          userInput: {
            bg: '#fff',
            text: '#212121'
          },
          userList: {
            bg: '#fff',
            text: '#212121'
          }
        },
        blue: {
          header: {
            bg: '#4e8cff',
            text: '#ffffff'
          },
          launcher: {
            bg: '#4e8cff'
          },
          messageList: {
            bg: '#ffffff'
          },
          sentMessage: {
            bg: '#4e8cff',
            text: '#ffffff'
          },
          receivedMessage: {
            bg: '#eaeaea',
            text: '#222222'
          },
          userInput: {
            bg: '#f4f7f9',
            text: '#565867'
          },
          userList: {
            bg: '#fff',
            text: '#212121'
          }
        },
        dark: {
          header: {
            bg: '#34495e',
            text: '#ecf0f1'
          },
          launcher: {
            bg: '#34495e'
          },
          messageList: {
            bg: '#2c3e50'
          },
          sentMessage: {
            bg: '#7f8c8d',
            text: '#ecf0f1'
          },
          receivedMessage: {
            bg: '#95a5a6',
            text: '#ecf0f1'
          },
          userInput: {
            bg: '#34495e',
            text: '#ecf0f1'
          },
          userList: {
            bg: '#2c3e50',
            text: '#ecf0f1'
          }
        }
      },
      chosenColor: null,
      alwaysScrollToBottom: true,
      messageStyling: true,
      userIsTyping: false
    }
  },
  async created () {
    this.setColor('blue')
    await this.getAllMessage()
    await this.getUserData()
  },
  methods: {
    ...mapActions([
      'getConnectedClients',
      'getProjectData',
      'getUserDetail',
      'postChat',
      'getProjectOwner'
    ]),
    getUserData () {
      this.getUserDetail({
        data: {
          userId: Cookie.get('dataId')
        }
      })
    },
    getAllMessage () {
      this.getProjectData({
        data: this.$route.params.projectId
      })
    },
    sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen
          ? this.newMessagesCount
          : this.newMessagesCount + 1
        this.onMessageWasSent({
          author: 'support',
          type: 'text',
          id: Math.random(),
          data: { text }
        })
      }
    },
    handleTyping (text) {
      this.showTypingIndicator =
        text.length > 0
          ? this.participants[this.participants.length - 1].id
          : ''
    },
    async onMessageWasSent (message) {
      await this.postChat({
        data: {
          projectId: this.$route.params.projectId,
          section: 1,
          userId: this.getUser.userId,
          text: message.data.text,
          userName: this.getUser.userName
        }
      })
      this.messageList = [...this.messageList, Object.assign({}, message, { id: Math.random() })]
      setTimeout(() => {
        this.getAllMessage()
        const rooms = {
          roomId: this.$route.params.projectId,
          name: this.$route.params.name,
          author: this.$route.params.name,
          msg: message.data.text
        }
        this.$socket.emit('chat-room', rooms)
      }, 100)
    },
    openChat () {
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      this.isChatOpen = true
      this.$router.push(`/main/${this.$route.params.projectId}`)
    },
    setColor (color) {
      this.colors = this.availableColors[color]
      this.chosenColor = color
    },
    showStylingInfo () {
      this.$modal.show('dialog', {
        title: 'Info',
        text:
          'You can use *word* to <strong>boldify</strong>, /word/ to <em>emphasize</em>, _word_ to <u>underline</u>, `code` to <code>write = code;</code>, ~this~ to <del>delete</del> and ^sup^ or ¡sub¡ to write <sup>sup</sup> and <sub>sub</sub>'
      })
    },
    messageStylingToggled (e) {
      this.messageStyling = e.target.checked
    },
    handleOnType () {
      this.$root.$emit('onType')
      this.userIsTyping = true
    },
    editMessage (message) {
      const m = this.messageList.find(m => m.id === message.id)
      m.isEdited = true
      m.data.text = message.data.text
    },
    removeMessage (message) {
      const m = this.messageList.find(m => m.id === message.id)
      m.type = 'system'
      m.data.text = 'This message has been removed'
    },
    like (id) {
      const m = this.messageList.findIndex(m => m.id === id)
      var msg = this.messageList[m]
      msg.liked = !msg.liked
      this.$set(this.messageList, m, msg)
    },
    getUsers () {
      this.participants = []
      this.clientList.forEach((dataClient) => {
        if (this.$socket.id !== dataClient) {
          this.participants.push(
            {
              id: dataClient,
              name: this.$route.params.name,
              imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
            }
          )
        }
      })
    }
  },
  computed: {
    ...mapGetters([
      'clientList',
      'projectsData',
      'getUser',
      'projectOwner'
    ]),
    linkColor () {
      return this.chosenColor === 'dark'
        ? this.colors.sentMessage.text
        : this.colors.launcher.bg
    },
    backgroundColor () {
      return this.chosenColor === 'dark' ? this.colors.messageList.bg : '#fff'
    }
  },
  mounted () {
    this.sockets.subscribe(this.room, data => {
      this.getAllMessage()
    })
    this.sockets.subscribe('user-connected', this.getConnectedClients)
    this.sockets.subscribe('user-disconnected', this.getConnectedClients)
    this.getConnectedClients()
  },
  watch: {
    projectsData: {
      immediate: true,
      handler: function (data) {
        const x = this.projectsData.data.projects.members
        this.msg = []
        if (!this.fetched) {
          this.fetched = true
          this.participants = []
          this.getProjectOwner({
            data: {
              userId: this.projectsData.data.userId
            },
            success: () => {
              this.participants.push({
                id: this.projectOwner.userName,
                name: this.projectOwner.userName,
                imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
              })
            }
          })
          x.forEach((mem) => {
            this.participants.push({
              id: mem.userName,
              name: mem.userName,
              imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
            })
          })
        }
        data.data.chatForm.forEach((chat) => {
          let auth = ''
          if (chat.userId === Cookie.get('dataId')) {
            auth = 'me'
          } else {
            auth = chat.userName
          }
          this.msg.push(
            {
              type: 'text',
              author: auth,
              id: chat.section,
              data: {
                text: chat.text,
                meta: auth
              }
            }
          )
        })
      }
    }
  }
}
</script>

<style scoped>
/deep/ .sc-message {
  width: 95%!important;
}
</style>
