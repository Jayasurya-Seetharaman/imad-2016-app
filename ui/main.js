console.log('Loaded!');

var count = 10;
app.get('/counter', function (req, res) {
  count = count + 1;    
  res.send(count.toString());
});