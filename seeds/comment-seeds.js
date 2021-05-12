const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'text 1',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'text 2',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'text 3',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'text 4',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'text 5',
    user_id: 5,
    post_id: 5
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;