// import pool from '../db/index';
// export default class Comment {
//   constructor(usercomment) {
//     this.questionid = usercomment.questionid;
//     this.title = usercomment.title;
//     this.body = usercomment.body;
//     this.comment = usercomment.comment;
//     this.userid = usercomment.userid;
//   }
//   async createComment() {
//     const queryPlaceholder = `INSERT INTO comments (questionid, title, body, comment, userid)
//     queryValues ($1, $2, $3, $4, $5) RETURNING *`;
//     const queryValues = [this.questionid, this.title, this.body, this.comment, this.userid];
//     const {
//       rows,
//     } = await pool.query(queryPlaceholder, queryValues);
//     return rows[0];
//   }
//   static async getCommentsByQuestion(id) {
//     const queryPlaceholder = 'SELECT * FROM comments WHERE questionid = $1';
//     const queryValues = [id];
//     const {
//       rows,
//     } = await pool.query(queryPlaceholder, queryValues);
//     return rows;
//   }
// }
"use strict";
//# sourceMappingURL=comments.js.map