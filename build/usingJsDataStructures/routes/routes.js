"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meetups = _interopRequireDefault(require("../controller/meetups"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable eol-last */
var routes = function routes(router) {
  router.get('/', function (req, res) {
    res.json({
      status: 'Welcome to Home API'
    });
  });
  router.route('/meetups')
  /** POST api/v1/meetups - Create a meetup */
  .post(_meetups.default.create);
  router.route('/meetups/:meetupId')
  /** GET api/v1/meetups - Create a meetup */
  .get(_meetups.default.getOne);
  router.route('/meetups')
  /** GET api/v1/meetups - Create a meetup */
  .get(_meetups.default.getAll);
  router.route('/meetups/upcoming')
  /** GET api/v1/meetups - Create a meetup */
  .get(_meetups.default.getAll);
};

var _default = routes;
exports.default = _default;
//# sourceMappingURL=routes.js.map