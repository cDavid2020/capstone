const schema = {
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
    match: /^[a-zA-Z0-9]+$/,
  },
  password: {
    type: String,
    minlength: 3,
    maxlength: 30,
    match: /^[a-zA-Z0-9]+$/,
  },
  repeat_password: {
    type: String,
    validate: {
      validator: function (value) {
        return this.password === value;
      },
      message: "Passwords do not match",
    },
  },
  access_token: {
    type: [String, Number],
  },
  birth_year: {
    type: Number,
    integer: true,
    min: 1900,
    max: 2013,
  },
  email: {
    type: String,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
  },
};
