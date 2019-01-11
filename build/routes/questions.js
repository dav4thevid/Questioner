"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressValidation = _interopRequireDefault(require("express-validation"));

var _questions = _interopRequireDefault(require("../controller/questions"));

var _vote = _interopRequireDefault(require("../controller/vote"));

var _validator = _interopRequireDefault(require("../middleware/validator/validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable eol-last */

/* eslint-disable import/first */
var router = _express.default.Router();

router.post('/', (0, _expressValidation.default)(_validator.default.postQuestion), _questions.default.create);
router.patch('/:questionId/upvote', _vote.default.upvote);
router.patch('/:questionId/downvote', _vote.default.downvote);
var _default = router;
exports.default = _default;
//# sourceMappingURL=questions.js.map