<template>
  <div>
    {{isConnected}}
    <p v-if="isConnected">We're connected to the server!</p>
    <p>Message from server: "{{socketMessage}}"</p>
    <button @click="pingServer()">Ping Server</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isConnected: false,
      socketMessage: ''
    }
  },
  created () {
    console.log('punten')
    this.sockets.subscribe('SOCKET_', data => {
      console.log(data)
    })
  },
  sockets: {
    connect () {
      // Fired when the socket connects.
      this.isConnected = true
      console.log('a')
    },
    disconnect () {
      this.isConnected = false
      console.log('b')
    },
    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel (data) {
      this.socketMessage = data
    }
  },
  methods: {
    pingServer () {
      // Send the "pingServer" event to the server.
      this.$socket.emit('SOCKET_', 'PING!')
    }
  }
}
</script>
