const { Post } = require('../models');

const postdata = [
  {
    title: 'Title',
    post_content: 'Test',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
