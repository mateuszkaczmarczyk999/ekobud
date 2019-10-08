<template>
  <div>
    <div class="text-right">
      <b-button size="lg" variant="primary" @click="addNew">Dodaj nowy wpis</b-button>
    </div>
    <b-card bg-variant="light" :key="idx" v-for="(post, idx) in allPosts">
      <b-form-group
        label-cols-lg="3"
        :label="post.title"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label-cols-sm="3"
          label="Tytuł:"
          label-align-sm="right"
          label-for="nested-post"
        >
          <b-form-input id="nested-post" v-model="post.title"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Krótki opis:"
          label-align-sm="right"
          label-for="nested-short-txt"
        >
          <b-form-textarea id="nested-short-txt" rows="3" v-model="post.description"></b-form-textarea>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Post:"
          label-align-sm="right"
          label-for="nested-text"
        >
          <b-form-textarea id="nested-text" rows="6" v-model="post.fullText"></b-form-textarea>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Link do filmu:"
          label-align-sm="right"
          label-for="nested-movie"
        >
          <b-form-input id="nested-movie" v-model="post.movieUrl"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Zdjęcia:"
          label-align-sm="right"
          label-for="nested-photos"
        >
          <b-form-file id="nested-photos" multiple :state="Boolean(post.images)" v-model="post.images"></b-form-file>
        </b-form-group>
      </b-form-group>
      <b-button size="md" variant="primary" @click="savePost(post)">Zapisz</b-button>
      <b-button size="md" variant="secondary" @click="deletePost(post)">Usuń</b-button>
    </b-card>
  </div>
</template>

<script>
import PostService from '../services/PostService'

export default {
  data () {
    return {
      name: '',
      allPosts: [],
      photos: []
    }
  },
  methods: {
    addNew () {
      let emptyPost = {
        createDate: new Date(),
        title: '',
        description: '',
        fullText: '',
        movieUrl: '',
        images: []
      }
      this.allPosts.push(emptyPost)
    },
    async savePost (post) {
      let result = await PostService.addOrUpdate(post)
      console.log(result)
    },
    async deletePost (post) {
      let result = await PostService.delete(post)
      if (result) {
        var index = this.allPosts.indexOf(post)
        if (index > -1) {
          this.allPosts.splice(index, 1)
        }
        console.log(result)
      }
    }
  },
  async created () {
    try {
      this.allPosts = await PostService.getAll()
    } catch (error) {
      console.log(error.message)
    }
  }
}
</script>
