<template>
  <div class="comment-container" v-if="comments">
    <h3>Comments:</h3>
    <ul>
      <li v-for="(comment, index) in comments" :key="index">
        {{ comment.name }}
        <br />
        "{{ comment.comment }}"
        <br />
      </li>
    </ul>
  </div>
  <form class="comment-form" @submit.prevent="onSubmit">
    <h3>Add a comment</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name" />
    <label for="newComment">comment:</label>
    <textarea id="newComment" v-model="newComment"></textarea>
    <input class="button" type="submit" value="Submit" />
  </form>
</template>
<script>
export default {
  name: 'DoctorComment',
  data() {
    return {
      comments: [],
      name: '',
      comment: ''
    }
  },
  methods: {
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
.comment-form {
  display: flex;
  flex-direction: column;
  width: 425px;
  padding: 20px;
  margin: 40px;
  border: 2px solid #d8d8d8;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.comment-form .button {
  display: block;
  margin: 30px auto;
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
  font-size: 20px;
  margin-bottom: 20px;
}
.comment-container {
  width: 425px;
  padding: 20px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
  margin-left: 40px;
  border: 2px solid #d8d8d8;
}

.comment-container li {
  margin-bottom: 30px;
}

ul {
  list-style-type: none;
}
</style>
