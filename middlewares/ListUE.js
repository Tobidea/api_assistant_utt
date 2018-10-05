// Middleware file for ListUE controller

module.exports.validateResult = function validateResult(req, res) {
  if (res.locals.queryResult || res.locals.queryResultArray.length > 0) {
    res.json(res.locals.queryResult);
  } else {
    res.status(404).send({ error: 'No results' });
  }
};