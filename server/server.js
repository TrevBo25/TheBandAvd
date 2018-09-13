const express = require('express');

const app = express();

app.use( express.static( `build` ) );

const port = 3333
app.listen(port, () => console.log(`listening on port ${port}`));