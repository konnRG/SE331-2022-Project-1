<template>
  <div id="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>
  <div class="container">
    <div class="comment-container" v-if="comments">
      <h3>Comments:</h3>
      <li v-for="(comment, index) in comments" :key="index">
        {{ comment.name }}: "{{ comment.comment }}"
        <p></p>
      </li>
    </div>
    <form class="comment-form" @submit.prevent="onSubmit">
      <h3>Add a comment:</h3>
      <label for="name">Doctor's name:</label>
      <p></p>
      <input id="name" v-model="name" />
      <p></p>
      <label for="newComment">Comment:</label>
      <textarea id="newComment" v-model="newComment"></textarea>
      <input class="button" @click="notify" type="submit" value="Submit" />
    </form>
  </div>
</template>
<script>
export default {
  name: 'DoctorComment',
  props: ['patient'],
  inject: ['GStore'],
  data() {
    return {
      comments: [],
      name: '',
      comment: ''
    }
  },
  methods: {
    notify() {
      this.GStore.flashMessage = 'Comment Added.'
      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'DoctorComment',
        params: { id: this.patient.id }
      })
    },
    onSubmit() {
      if (this.name === '' || this.newComment === '') {
        alert('comment is incomplete. Please fill every field.')
        return
      }
      let comments = {
        name: this.name,
        comment: this.newComment
      }
      this.comments.push(comments)
      this.name = ''
      this.newComment = ''
    }
  }
}
</script>

<style scoped>
@keyframes bluefade {
  from {
    background: lightskyblue;
  }
  to {
    background: transparent;
  }
}
#flashMessage {
  animation-name: bluefade;
  animation-duration: 3s;
}
.comment-form {
  display: inline-block;
  width: 425px;
  padding: 20px;
  margin: 20px;
  border: 1px solid black;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.comment-form .button {
  display: block;
  font-family: 'Roboto', sans-serif;
  margin: 10px auto;
  padding-left: 20px;
  padding-right: 20px;
}

select {
  height: 40px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
}

textarea {
  width: 95%;
  height: 70px;
  padding: 10px;
  font-size: 15px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px;
}
.comment-container {
  display: inline-block;
  float: left;
  width: 425px;
  padding: 20px;
  margin-top: 20px;
  margin-left: 20px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
  border: 1px solid black;
}
.container {
  margin-left: 260px;
  margin-right: 260px;
}

.comment-container li {
  margin-bottom: 0;
  text-align: left;
}
#name {
  width: 98%;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}
</style>
