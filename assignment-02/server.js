'use strict';

const app = require('express')();
const slotWidgets = require('./slot-widgets.json');
const fares = require('./fares.json');

/**
 * GET /slot-widgets
 *
 * Return the list of slot widgets with status code 200.
 */
app.get('/slot-widgets', (req, res) => {
  return res.status(200).json(slotWidgets);
});

/**
 * Get /fare/:id
 *
 * id: Number
 *
 * Return the fare for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/fares/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const fare = fares[id];

    if (fare !== null) {
      return res.status(200).json({
        fare,
      });
    } else {
      return res.status(404).json({
        message: 'Not found.',
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request.',
    });
  }
});


app.listen(9001, () => {
  process.stdout.write('The server is available on http://localhost:9001/\n');
});
