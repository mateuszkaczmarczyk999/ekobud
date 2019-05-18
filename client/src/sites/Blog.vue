<template>
  <div id="blog">
    <Title name="Aktualności"/>
    <BlogPost :post="selectedPost" v-if="selectedPost"/>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost'
import Title from '../components/Title'
import PostService from '../services/PostService'

export default {
  name: 'Blog',
  data () {
    return {
      posts: [],
      selectedPost: null
    }
  },
  methods: {
    linkGen (pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    }
  },
  components: {
    BlogPost, Title
  },
  async created () {
    try {
      const allPosts = await PostService.getAll()
      this.posts = allPosts
      this.selectedPost = allPosts[0]
    } catch (error) {
      console.log(error.message)
    }
  }
}
</script>
