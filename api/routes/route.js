'use strict';
module.exports = function(app) {
  var controller = require('../controllers/controller');

  // Code Routes
  app.route('/codes')
    .get(controller.codeAPI.list_all_codes)
    .post(controller.codeAPI.create_a_code);


  app.route('/codes/:codeId')
    .get(controller.codeAPI.read_a_code)
    .put(controller.codeAPI.update_a_code)
    .delete(controller.codeAPI.delete_a_code);

  // Question Routes
  app.route('/question')
    .get(controller.questionAPI.list_all_question)
    .post(controller.questionAPI.add_question);


  app.route('/question/:quesId')
    .get(controller.questionAPI.get_question)
    .put(controller.questionAPI.update_question)
    .delete(controller.questionAPI.delete_question);
};