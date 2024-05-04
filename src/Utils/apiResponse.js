// Success Response function
module.exports = ({ res, msg, data }) => {
  return res.status(200).json({ msg: msg, data: data });
};
