module.exports = [
  {
    key: "id",
    type: "number",
    optional: true,
  },
  {
    key: "username",
    type: "string",
    regexp: /^\S*$/,
    regexpMessage: "Username cannot have spaces",
  },
  {
    key: "password_digest",
    type: "string",
  },
  {
    key: "nickname",
    type: "string",
  },
];
