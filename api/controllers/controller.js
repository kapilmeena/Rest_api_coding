'use strict';


var mongoose = require('mongoose');
let Codes = mongoose.model('Code');
let questions = mongoose.model('question');

exports.codeAPI  = {
  list_all_codes:function (req, res) {
    Codes.find({}, function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  },
  create_a_code:function (req, res) {
    var new_code = new Codes(req.body);
    new_code.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  },
  read_a_code:function (req, res) {
    Codes.findById(req.params.codeId, function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  },
  update_a_code:function (req, res) {
    Codes.findOneAndUpdate({_id: req.params.codeId}, req.body, {new: true}, function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  },
  delete_a_code:function (req, res) {
    Codes.remove({
      _id: req.params.codeId
    }, function(err, data) {
      if (err)
        res.send(err);
      res.json({ message: 'Code successfully deleted' });
    });
  }
}
exports.questionAPI  = {
  list_all_question:function (req, res) {
    questions.find({}, function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  },
  add_question:function (req, res) {
    var new_question = new questions(req.body);
    new_question.save(function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  },
  get_question:function (req, res) {
    questions.findById(req.params.quesId, function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  },
  update_question:function (req, res) {
    questions.findOneAndUpdate({_id: req.params.quesId}, req.body, {new: true}, function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  },
  delete_question:function (req, res) {
    questions.remove({
      _id: req.params.quesId
    }, function(err, data) {
      if (err)
        res.send(err);
      res.json({ message: 'Question successfully deleted' });
    });
  }
}

  