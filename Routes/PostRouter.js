const Router = require("express");
const router = new Router();
const postController = require("../Controllers/PostController");

router.post("/post", postController.createPost);

router.get("/posts", postController.getPosts);
router.get("/post", postController.getPostsByUser);
router.get("/post/:id", postController.getOnePost);

router.put("/post", postController.updatePost);
router.delete("/post/:id", postController.deletePost);

module.exports = router;
