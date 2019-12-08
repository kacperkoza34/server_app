const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname + `/views/${name}`));
  };
  next();
});



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/about.html'));
});

app.get('/user/settings', (req, res) => {
  if(false) res.show(path.join(__dirname + '/views/user/settings.html'));
  else res.send('Go away!');
});

app.get('/user/panel', (req, res) => {
  if(false) res.show(path.join(__dirname + '/views/user/panel.html'));
  else res.send('Go away!');
});


app.use((req, res) => {
  res.status(404).send('404 not found...');
})

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
