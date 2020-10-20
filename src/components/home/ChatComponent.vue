<template>
  <div>
    <beautiful-chat
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :close="closeChat"
      :colors="colors"
      :isOpen="isChatOpen"
      :messageList="messageList"
      :messageStyling="messageStyling"
      :newMessagesCount="newMessagesCount"
      :onMessageWasSent="onMessageWasSent"
      :open="openChat"
      :participants="participants"
      :showCloseButton="true"
      :showLauncher="true"
      :showEmoji="true"
      :showFile="true"
      :showTypingIndicator="showTypingIndicator"
      :showEdition="true"
      :showDeletion="true"
      :showConfirmationDeletion="true"
      :confirmationDeletionMessage="'Are you sure? (you can customize this message)'"
      :titleImageUrl="titleImageUrl"
      @onType="handleOnType"
      @edit="editMessage"
      @remove="removeMessage"
    >
      <template v-slot:text-message-toolbox="scopedProps">
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
      </template>
      <template v-slot:system-message-body="{ message }">
        [System]: {{message.text}}
      </template>
    </beautiful-chat>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      room: this.$route.params.id,
      currentId: 21,
      participants: [{
        id: 'mattmezza',
        name: 'Matteo',
        imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
      },
      {
        id: 'support',
        name: 'Support',
        imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4'
      }],
      titleImageUrl:
        'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
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
        { type: 'text', author: `support`, id: 16, data: { text: `You've got to have a story. You've got to have a story. You've got to have a story. You've got to have a story. You've got to have a story. You've got to have a story. `, meta: 'Senin 23 sept' } },
        { type: 'emoji', author: `me`, id: 17, data: { emoji: `😋` } },
        { type: 'text', author: `me`, id: 18, data: { text: `Do you read me...`, meta: '✓✓ Read' } },
        { type: 'text', author: `me`, id: 19, data: { text: `...or not?`, meta: 'Senin 24 sept' } },
        { type: 'system', id: 20, data: { text: 'User changed security key', meta: '04-08-2018 15:57' } },
        { type: 'text', author: `support`, id: 21, data: { text: `What about suggestions?` }, suggestions: ['Looks good!', "It's OK.", 'Uhh.. Do I really have to say something?', "This suggestion is way too long for css purpose. Let's make it long... Longer, and more and more.. Never ending."] }
      ],
      newMessagesCount: 5,
      isChatOpen: false,
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
  created () {
    this.setColor('blue')
  },
  methods: {
    ...mapActions([
      'getConnectedClients'
    ]),
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
    onMessageWasSent (message) {
      const rooms = {
        roomId: this.$route.params.id,
        name: this.$route.params.name,
        author: this.$route.params.name,
        msg: message.data.text
      }
      this.$socket.emit('chat-room', rooms)
      this.messageList = [...this.messageList, Object.assign({}, message, { id: Math.random() })]
    },
    openChat () {
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      this.isChatOpen = false
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
  computed: {
    ...mapGetters([
      'clientList'
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
      this.messageList.push(
        { type: 'text', author: data.author, id: this.currentId, data: { text: data.msg } }
      )
      this.currentId += 1
    })
    this.sockets.subscribe('user-connected', this.getConnectedClients)
    this.sockets.subscribe('user-disconnected', this.getConnectedClients)
    this.getConnectedClients()
    this.getUsers()
    /* eslint no-return-assign: "error" */
    // this.messageList.forEach(x => x.liked = false)
  }
}
// import { mapGetters, mapActions } from 'vuex'

// export default {
//   name: 'app',
//   data () {
//     return {
//       room: {
//         roomId: this.$route.params.id,
//         name: 'asc',
//         msg: 'testing123',
//         status: Math.random() % 2
//       },
//       participants: [], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
//       titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
//       messageList: [
//         { type: 'text', author: `me`, data: { text: `Say yes!` } },
//         { type: 'text', author: `user1`, data: { text: `No.` } }
//       ], // the list of the messages to show, can be paginated and adjusted dynamically
//       newMessagesCount: 0,
//       isChatOpen: true, // to determine whether the chat window should be open or closed
//       showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
//       colors: {
//         header: {
//           bg: '#4e8cff',
//           text: '#ffffff'
//         },
//         launcher: {
//           bg: '#4e8cff'
//         },
//         messageList: {
//           bg: '#ffffff'
//         },
//         sentMessage: {
//           bg: '#4e8cff',
//           text: '#ffffff'
//         },
//         receivedMessage: {
//           bg: '#eaeaea',
//           text: '#222222'
//         },
//         userInput: {
//           bg: '#f4f7f9',
//           text: '#565867'
//         }
//       }, // specifies the color scheme for the component
//       alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
//       messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
//     }
//   },
//   computed: {
//     ...mapGetters([
//       'clientList'
//     ])
//   },
//   methods: {
//     ...mapActions([
//       'getConnectedClients'
//     ]),
//     sendMessage (text) {
//       if (text.length > 0) {
//         this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
//         this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
//       }
//     },
//     onMessageWasSent (message) {
//       const rooms = {
//         roomId: this.$route.params.id,
//         name: this.$route.params.name,
//         msg: message.data.text
//       }
//       this.$socket.emit('chat-room', rooms)
//       // called when the user sends a message
//       this.messageList = [ ...this.messageList, message ]
//     },
//     openChat () {
//       // called when the user clicks on the fab button to open the chat
//       this.isChatOpen = true
//       this.newMessagesCount = 0
//     },
//     closeChat () {
//       // called when the user clicks on the botton to close the chat
//       this.isChatOpen = false
//     },
//     handleScrollToTop () {
//       // called when the user scrolls message list to top
//       // leverage pagination for loading another page of messages
//     },
//     handleOnType () {
//       console.log('Emit typing event')
//     },
//     editMessage (message) {
//       const m = this.messageList.find(m => m.id === message.id)
//       m.isEdited = true
//       m.data.text = message.data.text
//     },
//     getUsers () {
//       // this.participants = []
//       this.clientList.forEach((dataClient) => {
//         if (this.$socket.id !== dataClient) {
//           this.participants.push(
//             {
//               id: dataClient,
//               name: this.$route.params.name,
//               imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
//             }
//           )
//         }
//         console.log(this.participants)
//       })
//     }
//   },
//   mounted: function () {
//     console.log(this.$route.params.id)
//     this.sockets.subscribe(this.room.roomId, data => {
//       this.messageList.push(
//         { type: 'text', author: data.name, data: { text: data.msg } }
//       )
//     })
//     this.sockets.subscribe('user-connected', this.getConnectedClients)
//     this.sockets.subscribe('user-disconnected', this.getConnectedClients)
//     this.getConnectedClients()
//     this.getUsers()
//   }
// }
</script>
