
const tryCatch = func => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    next(error)
  }
};

const errorHandle = (err, req, res, next) => {
  console.log(err);
  console.error(err);
  if (err.status < 500 && err.status > 399) {
    res.status(err.status).send(err);
  } else {
    res.status(500).send({
      message: `Fault happening!`,
    });
  }
};

const pageNotFound = (req, res) => {
  res.status(404).send({
    message: `Invalid path!`,
  });
};

module.exports = {
  errorHandle,
  tryCatch,
  pageNotFound,
};