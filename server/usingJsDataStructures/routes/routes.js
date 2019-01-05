/* eslint-disable eol-last */
import meetupsWithObject from '../controller/meetups';

const routes = (router) => {
  router.get('/', (req, res) => {
    res.json({
      status: 'Welcome to Home API',
    });
  });

  router.route('/meetups')
    /** POST api/v1/meetups - Create a meetup */
    .post(meetupsWithObject.create);

  router.route('/meetups/:meetupId')
    /** GET api/v1/meetups - Create a meetup */
    .get(meetupsWithObject.getOne);

  router.route('/meetups')
    /** GET api/v1/meetups - Create a meetup */
    .get(meetupsWithObject.getAll);

  router.route('/meetups/:upcoming')
    /** GET api/v1/meetups - Create a meetup */
    .get(meetupsWithObject.getAll);
};

export default routes;