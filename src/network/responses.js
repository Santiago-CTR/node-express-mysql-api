export const success = (req, res, message = "", status = 200) => {
  res.status(status).send({
    error: false,
    status,
    message,
  });
};
export const error = (req, res, message = "Error Interno", status = 500) => {
  res.status(status).send({
    error: true,
    status,
    message,
  });
};
