module.exports = function (d) {

  if (typeof d === 'string') {
    d = new Date(d);
  }

  if (!(d instanceof Date) || d+'' === 'Invalid Date') {
    throw new Error('Invalid date supplied.');
  }

  return ~~((Date.now() - (+d)) / (31557600000));
};
