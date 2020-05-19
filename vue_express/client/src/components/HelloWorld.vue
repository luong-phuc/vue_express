<template>
  <div class="hello">
    <bread-crumb v-bind:title='title'></bread-crumb>

    <input v-model="message">
    <p>{{ answer }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>

    <p>{{ message }}</p>

    <p v-bind:title="message_2">
      Rê chuột lên đây một vài giây để xem thuộc tính `title` được bind! {{ now }}
    </p>

    <p v-if="seen">Thoắt ẩn thoắt hiện</p>

    <ol>
      <li v-for="item in groceryList" :key="item.id">{{ item.text }}</li>
    </ol>

  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb'

export default {
  name: 'HelloWorld',
  data () {
    return {
      title: "Home",
      message: 'Hello Vue!',
      answer: 'waiting input......',
      message_2: 'Bạn đã mở trang này vào ' + new Date().toLocaleString(),
      seen: new Date().getTime() % 2,
      groceryList: [
        { id: 1, text: 'Cà pháo' },
        { id: 2, text: 'Mắm tôm' },
        { id: 3, text: 'Miễn ăn được là được' }
      ]
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split(' ').reverse().join(' ')
      this.seen = new Date().getTime() % 2
    },
    getAnswer: function () {
      this.answer = 'thinking....'
    }
  },
  computed: {
    now: function () {
      return Date.now()
    }
  },
  watch: {
    message: function(newMessage, oldMessage) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  components: {
    'BreadCrumb': BreadCrumb
  },
  created: function () {
    // Wait 500ms before call getAnswer
    // We need put method in created because of need exists getAnswer method
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
