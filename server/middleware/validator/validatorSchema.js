/* eslint-disable eol-last */
import Joi from 'joi';

export default {

  createMeetup: Joi.object().keys({
    body: {
      topic: Joi.string().max(100).trim().required().label('Topic of your Event'),
      location: Joi.string().trim().required().label('Location of your Event'),
      date: Joi.date().required().label('Date of your Event'),
    },
  }),

  getMeetup: {
    params: {
      meetupId: Joi.number().required(),
    },
  },


  postQuestion: {
    body: {
      meetupid: Joi.number().required(),
      title: Joi.string().required(),
      body: Joi.string().required(),
    },
  },

  rsvps: {
    body: {
      meetupId: Joi.number().required(),
      rsvps: Joi.string().valid(
        'yes',
        'no',
        'maybe',
      ).required(),
    },
  },
};


















import Joi from 'joi';

export default {
  createMeetup: Joi.object().keys({
    // topic must be a valid string is required
    location: Joi.string()
      .required()
      .trim()
      .label('Event location'),

    // images is optional
    images: Joi.string().default('no image'),

    // topic must be a valid string is required
    topic: Joi.string().max(100)
      .label('Meet up topic')
      .trim()
      .required(),

    // createdOn is required and must be a date
    happeningOn: Joi.date()
      .label('Event date')
      .required(),
  }),
  createQuestion: Joi.object().keys({
    // meetup topic must be integer and required
    meetup: Joi.number()
      .integer()
      .min(0)
      .positive()
      .required()
      .label('Meet up id'),

    // question title must be a valid string is required
    title: Joi.string().max(100)
      .label('Question title')
      .trim()
      .required(),

    // question body is required and must be a string
    body: Joi.string().max(500)
      .label('Question body')
      .trim()
      .required(),
  }),
  getOneMeetup: Joi.object().keys({
    // id is required and must be integer
    id: Joi.number()
      .integer()
      .min(0)
      .positive()
      .required(),
  }),
  signUp: Joi.object().keys({
    // firname must be a valid string and is required
    firstname: Joi.string().max(100)
      .label('Firstname')
      .trim()
      .required(),
    // lastname must be a valid string and is required
    lastname: Joi.string().max(100)
      .label('Lastname')
      .trim()
      .required(),
    // password must be a valid string and is required
    password: Joi.string()
      .min(6)
      .max(100)
      .label('Password')
      .trim()
      .required(),
    // confirm password must be a valid string and is required
    passwordConf: Joi.string()
      .min(6)
      .max(100)
      .valid(Joi.ref('password'))
      .label('confirm Password')
      .trim()
      .options({
        language: {
          any: {
            allowOnly: 'must match password',
          },
        },
      }),
    // firname must be a valid string and is required
    email: Joi.string().max(50)
      .label('Email')
      .trim()
      .required(),
    // phoneNumber must be a valid string and is required
    phonenumber: Joi.string()
      .label('PhoneNumber')
      .trim()
      .optional(),
    // username must be a valid string and is required
    username: Joi.string().trim().label('Username').optional(),
  }),
  logIn: Joi.object().keys({
    // email must be a valid string and is required
    email: Joi.string().max(50)
      .label('Email')
      .trim()
      .required(),
    // password must be a valid string and is required
    password: Joi.string()
      .min(6)
      .max(100)
      .label('Password')
      .trim()
      .required(),
  }),
  rsvps: Joi.object().keys({
    // password must be a valid string and is required
    response: Joi.string()
      .label('Response')
      .trim()
      .required(),
  }),
  createComment: Joi.object().keys({
    // comment body is required and must be a string
    commentBody: Joi.string()
      .max(500)
      .label('Comment body')
      .trim()
      .required(),
    questionId: Joi.number()
      .label('Question id')
      .required(),
  }),
};