<template>
  <div>
    {{clientList}}
    <beautiful-chat
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :showEdition="true"
      :showDeletion="true"
      :deletionConfirmation="true"
      :showTypingIndicator="showTypingIndicator"
      :showLauncher="true"
      :showCloseButton="true"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage" />
      <button @click="addMsg()">test</button>
  </div>
    <!-- {{isConnected}}
    <p v-if="isConnected">We're connected to the server!</p>
    <p>Message from server: "{{socketMessage}}"</p>
    <button @click="pingServer()">Ping Server</button>
    <button @click="lihatPesan()">lihat Server</button> -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      room: {
        roomId: this.$route.params.id,
        name: 'asc',
        msg: 'testing123',
        status: Math.random() % 2
      },
      participants: [], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: [
        { type: 'text', author: `me`, data: { text: `Say yes!` } },
        { type: 'text', author: `user1`, data: { text: `No.` } }
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: true, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
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
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    }
  },
  computed: {
    ...mapGetters([
      'clientList'
    ])
  },
  methods: {
    ...mapActions([
      'getConnectedClients'
    ]),
    sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
      const rooms = {
        roomId: this.$route.params.id,
        name: this.$route.params.name,
        msg: message.data.text
      }
      this.$socket.emit('chat-room', rooms)
      // called when the user sends a message
      this.messageList = [ ...this.messageList, message ]
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false
    },
    handleScrollToTop () {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
    },
    handleOnType () {
      console.log('Emit typing event')
    },
    editMessage (message) {
      const m = this.messageList.find(m => m.id === message.id)
      m.isEdited = true
      m.data.text = message.data.text
    },
    getUsers () {
      // this.participants = []
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
        console.log(this.participants)
      })
    }
  },
  mounted: function () {
    console.log(this.$route.params.id)
    this.sockets.subscribe(this.room.roomId, data => {
      this.messageList.push(
        { type: 'text', author: data.name, data: { text: data.msg } }
      )
    })
    this.sockets.subscribe('user-connected', this.getConnectedClients)
    this.sockets.subscribe('user-disconnected', this.getConnectedClients)
    this.getConnectedClients()
    this.getUsers()
  }
}
</script>
