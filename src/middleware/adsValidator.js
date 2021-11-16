const { check, validationResult } = require("express-validator");

const errorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(422).json({ errors: errors.array() });
  next();
};

/**
 * Validator middleware for creating
 * @param {string} req.title - title of ad
 * @param {string} req.link - link url to the title.
 * @param {date} req.valid_until - ads valid date
 */
exports.validateCreateAd = [
  check("title")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Minimum 3 characters required!")
    .bail(),
  check("link").trim().isURL().withMessage("Invalid link url!").bail(),
  check("valid_until").isDate().withMessage("Invalid date format!").bail(),
  errorHandler,
];

exports.validateId = [
  check("id").isMongoId().withMessage("Invalid ad id."),
  errorHandler,
];

exports.validateUpdateAd = [
  check("id").isMongoId().withMessage("Invalid ad id."),

  check("title")
    .optional()
    .trim()
    .isLength({ min: 3 })
    .withMessage("Minimum 3 characters required!")
    .bail(),
  check("link")
    .optional()
    .trim()
    .isURL()
    .withMessage("Invalid link url!")
    .bail(),
  check("valid_until")
    .optional()
    .isDate()
    .withMessage("Invalid date format!")
    .bail(),
  errorHandler,
];
