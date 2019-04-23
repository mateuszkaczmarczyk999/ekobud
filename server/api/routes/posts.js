const Post = require('../../models/posts')

module.exports = (router) => {
  router.get("/posts", (req, res, next) => {
    Post.find().select()
    .then(posts => {
      const result = {
        count: posts.length,
        data: posts
      }
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    })
  })

  router.post('/posts', (req, res, next) => {
    let post = new Post(req.body)
    post.save((error, post) => {
      if(error) return console.log(error)
      res.status(200).json(post)
    })
  })
}
