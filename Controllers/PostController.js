const db = require("../db");

class PostController {
  async createPost(req, res) {
    const { title, content, user_id } = req.body;
    const newPost = await db.query(`INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`, [title, content, user_id]);
    res.json(newPost.rows[0]);
  }

  async getPosts(req, res) {
    const postList = await db.query(`SELECT * FROM post`);
    res.json(postList.rows);
  }

  async getPostsByUser(req, res) {
    const user_id = req.query.id;
    const postListByUser = await db.query(`SELECT * FROM post where user_id = $1`, [user_id]);
    res.json(postListByUser.rows);
  }

  async getOnePost(req, res) {
    const id = req.params.id;
    const post = await db.query(`SELECT * FROM post WHERE id = $1`, [id]);
    res.json(post.rows[0]);
  }

  // TODO:
  async updatePost(req, res) {}
  async deletePost(req, res) {}
}

module.exports = new PostController();
