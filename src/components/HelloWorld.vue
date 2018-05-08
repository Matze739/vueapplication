<template>
  <div class="hello">
    <h1> This app creates random Strings. Just try it!</h1>
    <input :class="[{'error': this.nameError}]" type="text" placeholder="Enter a name" v-model="name" required/>
    <input :class="[{'error': this.reasonError}]" type="text" placeholder="Enter the reason" v-model="reason" required/>
    <div>
      <button @click="playBingo()">play bullshitbingo</button>
    </div>
  </div>
</template>

<script>
import Buzzwordbingo from 'xt_class_2018'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      name: '',
      reason: '',
      nameError: false,
      reasonError: false
    }
  },
  methods: {
    playBingo () {
      if (this.name === '') {
        this.nameError = true
      } else {
        this.nameError = false
      }
      if (this.reason === '') {
        this.reasonError = true
      } else {
        this.reasonError = false
      }

      if (this.name != '' && this.reason != '') {
        let bingo = new Buzzwordbingo(this.reason, this.name)
        alert(bingo.playBullshitBingo())
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  min-height: 40px;
  padding: 20px;
  display: inline-block;
}
input {
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.error {
  border: 1px solid red;
}
</style>
