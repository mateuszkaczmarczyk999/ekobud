const Post = require('../../models/posts')
const checkAuth = require('../middleware/checkAuth')

module.exports = (router) => {
  router.get("/posts", (req, res, next) => {
    Post.find().sort({ createDate: 'desc' }).select()
    .then(posts => {
      const result = { posts: posts }
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err })
    })
  })

  router.get("/last_post", (req, res, next) => {
    Post.find().sort({ createDate: 'desc' }).select()
    .then(posts => {
      const result = { post: posts[0] }
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err })
    })
  })

  router.post('/add-post', checkAuth, (req, res, next) => {
    let post = new Post(req.body)
    post.save((error, post) => {
      if(error) return console.log(error)
      res.status(200).json(post)
    })
  })

  router.post('/update-post', checkAuth, (req, res, next) => {
    Post.findOne({ _id: req.body._id }, (err, doc) => {
      if(err) return console.log(err)

      doc.title = req.body.title
      doc.description = req.body.description
      doc.fullText = req.body.fullText
      doc.movieUrl = req.body.movieUrl

      doc.save((error, post) => {
        if(error) return console.log(error)
        res.status(200).json(post)
      })
    })
  })

  router.post('/delete-post', checkAuth, (req, res, next) => {
    Post.deleteOne({ _id: req.body._id }, (err) => {
      if(err) return console.log(err)
      res.status(200).json(true)
    })
  })
}
