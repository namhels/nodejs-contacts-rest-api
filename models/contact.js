const { Schema, model } = require("mongoose");
const Joi = require("joi");

// const genres = ["love", "fantastic"];
// const isbnRegexp = /[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/;

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    // genre: {
    //   type: String,
    //   enum: genres,
    //   required: true,
    // },
    // isbn: {
    //   type: String,
    //   match: isbnRegexp,
    //   required: true,
    //   unique: true,
    // },
  },
  { versionKey: false, timestamps: true }
);

const addContact = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
  // genre: Joi.string()
  //   .valid(...genres)
  //   .required(),
  // isbn: Joi.string().pattern(isbnRegexp).required(),
});

const updateFavorite = Joi.object({
  favorite: Joi.boolean().required("missing field favorite"),
});

const schemas = {
  addContact,
  updateFavorite,
};

const Contact = model("contact", contactSchema);
// categories => category
// mice => mouse

module.exports = {
  Contact,
  schemas,
};
