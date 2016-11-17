console.log('Loaded!');

var counter = 10;
app.get('/counter', function (req, res) {
  counter = counter + 1;    
  res.send(counter.toString());
});