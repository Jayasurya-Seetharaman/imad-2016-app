var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
var session = require('express-session');


var config = {
    user: 'jayasurya-seetharaman',
    database: 'jayasurya-seetharaman',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: 'db-jayasurya-seetharaman-34291'
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(session({
    secret: 'someRandomSecretValue',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30}
}));


var pool = new Pool(config);

app.get('/test', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT * FROM article', function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result));
      }
   });
});


//Func For Category Page
function createCategory (){
	var catTemplate =`
	<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>My Blog - 2</title>
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<!--Css-->
<link rel="stylesheet" href="css/style.css">

<!-- Important Owl stylesheet -->
<link rel="stylesheet" href="css/owl.carousel.css">
 
<!-- Default Theme -->
<link rel="stylesheet" href="css/owl.theme.css">
 
<!--  jQuery 1.7+  -->
<script src="js/jquery-1.9.1.min.js"></script>
 
<!-- Include js plugin -->
<script src="js/owl.carousel.js"></script>

<!--Font_awesome CDN-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<style>

body{
	background-color:#F5F5F5;
}

</style>

</head>

<body>

<!--Header Starts-->
<section class="header">
	<div class="container-fluid">
		<h1 class="text-center">My Blog</h1>
    </div>
</section>
<!--Header Ends -->
<br>
<!--Container Starts-->
<div class="container">
	<div class="row">
    <!--COl-9 Starts Here-->
          <div id="category">
          
          </div>
        
  <!--Col-3 Starts Here-->
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 pad_bot">
        	<!--<h3 class="title no_top_margin"><div class="line-2"></div><span class="title_text">About Me</span><div class="line-3">-->
            <h3 class="title no_top_margin">About Me</h3>
                
            
                <img src="images/two.jpg" class="img-responsive">
            <div class="abt_me">
            <p>Morbi nec aliquam augue. Vestibulum molestie aliquet sem non rhoncus. Ut hendrerit, magna a vulputate dignissim, orci lorem consectetur eros, eget tempus ligula sem ac tellus</p>
            </div>
            <!-- Popular Posts Starts Here-->
            	
             <div id="latest-posts">
             </div>
                
            <!--Popular Posts Ends Here-->
            
            <!--Tags Starts Here-->
            <div id="tag">
            </div>
            <!--Tags Ends Here-->
            
        </div>
    </div>
</div>
<!--Container Ends-->

<!--Footer Starts Here-->
<div class="container-fluid footer">
	<div class="container">
    	<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        	<h2 class="footer_title">About Me</h2>
            
            <div class="col-lg-12 col-md-12 col-sm-12" align="center">
            	<img src="images/profile.jpg" class="img-rounded">
                <p>Jayasurya</p>
            </div>
            
        </div>
        <div id="tag-foot">
        </div>
        
        <!--Popular Posts STarts Here-->
        <div id="pop-post">
        </div>
        <!--Popular posts ends Here-->
        
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        	<h2 class="footer_title">Get In Touch</h2>
            <a class="twitter-timeline" data-width="100%" data-height="250" href="https://twitter.com/s_jayasurya">Tweets by s_jayasurya</a> <script async src="//<strong>platform.twitter.com/widgets.js</strong>" charset="utf-8"></script>
          
          
               <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script> 
        </div>
    </div>

</div>

<div class="info-social">
	<div align="center">
            	<div class="info-social">
                	<a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-user" aria-hidden="true" title="View Profile"></i></a>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i>
</a>
    </div>
</div>
<!--Footer Ends Here-->

<!--Footer Info Stats Here-->

<div class="container-fluid footer-info">
	
    	<div class="container" align="center">
            
            	<p>&copy; All Rights Reserved. Designed & Developed By Jayasurya.</p>
            </div>
        </div>    
    
</div>
<!--Footer Info Ends Here-->

<!--Test-->
<div class="container">
	<div class="col-lg-12">
    	<div align="center" id="">
        
        </div>
    </div>
</div>
<script type="text/javascript" src="/ui/main.js"></script>
</body>
</html>

	
	`;
	return catTemplate;
}


//Func Used To Display Article Content
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
	var img = data.img;
	var category = data.category;
    
    var htmlTemplate = `
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>My Blog - 2</title>
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<!--Css-->
<link rel="stylesheet" href="/articles/css/style.css">


<!--Font_awesome CDN-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<style>

body{
	background-color:#F5F5F5;
}

</style>

</head>

<body>

<!--Header Starts-->
<section class="header">
	<div class="container-fluid">
		<h1 class="text-center">My Blog</h1>
    </div>
</section>
<!--Header Ends -->

<br>

<!--Container Starts-->
<div class="container">
<!--Breadcrumbs Starts Here-->
  <ol class="breadcrumb">
    <li><a href="/">Home</a></li>
	<li><a href="/category/${category}">${category}</a></li>
    <li class="active">${heading}</li>
  </ol>
<!--Breadcrumbs Ends Here-->


	<div class="row">
    <!--COl-9 Starts Here-->
    	<div class="col-lg-9 no_left_pad col-md-9 col-xs-12 pad_bot">
          
          <div class="col-lg-12 col-md-12 col-sm-12">
        	<img src="/articles/${img}" class="img-responsive">
           
           <div class="article col-lg-12">
           <!--Head- Article- Starts-->
            <div align="center">
            	<h3 class="article_head">${heading}</h3>
			</div>
            <div class="col-lg-offset-2 col-lg-2 line col-md-offset-2 col-md-2 col-sm-offset-2 col-sm-2 hidden-xs">
            </div>
            <div class="col-lg-offset-0 col-lg-4 col-lg-offset-4 col-md-offset-0 col-md-4 col-md-offset-4 col-sm-offset-0 col-sm-4 col-sm-offset-4 col-xs-offset-2 col-xs-8 col-xs-offset-2">
            	<p class="category"><a href="/category/${category}" class="link">${category}</a></p>
            </div>
            <div class="col-lg-2 line col-md-2 col-sm-2 hidden-xs">
            </div>
            
            <div class="clearfix"></div>
            
            <div align="center">
            	<p class="calendar"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;${date.toDateString()}</p>
            </div>
            
            
            
            <!--Head- Article- Ends-->
            <div class="article_section">
            	${content}
            </div>
			<hr />
			<div class="col-lg-12 pad_bot">
		  <!--Comments-->
			<h4>Comments</h4>
              <div id="comment_form">
              </div>
              <div id="comments">
                <center>Loading comments...</center>
              </div>
             </div>
			
			
            </div>
			
			
          
          </div>
          
          <!--Rel_post Starts Here-->
		  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		  	<h3 class="rel_post_title">Related Article</h3>
			  <div id="rel-posts">
			  </div>
		  </div>
          <!--Rel Post Ends here-->
                            
        </div>
        
  <!--Col-3 Starts Here-->
        <div class="col-lg-3 no_left_pad col-md-3 col-sm-12 col-xs-12 pad_bot">
        	<!--<h3 class="title no_top_margin"><div class="line-2"></div><span class="title_text">About Me</span><div class="line-3">-->
            <h3 class="title no_top_margin">About Me</h3>
                
            
                <img src="/articles/images/two.jpg" class="img-responsive">
            <div class="abt_me">
            <p>Morbi nec aliquam augue. Vestibulum molestie aliquet sem non rhoncus. Ut hendrerit, magna a vulputate dignissim, orci lorem consectetur eros, eget tempus ligula sem ac tellus</p>
            </div>
            
            <!-- Popular Posts Starts Here-->
            	
             <div id="latest-posts">
             </div>
           
            <!--Popular Posts Ends Here-->
            
            <!--Tags Starts Here-->
             <div id="tag">
             </div>		
            <!--Tags Ends Here-->
            
        </div>
    </div>
</div>
<!--Container Ends-->

<!--Footer Starts Here-->
<div class="container-fluid footer">
	<div class="container">
    	<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        	<h2 class="footer_title">About Me</h2>
            
            <div class="col-lg-12 col-md-12 col-sm-12" align="center">
            	<img src="/articles/images/profile.jpg" class="img-rounded">
                <p>Jayasurya</p>
            </div>
            
        </div>

        <div id="tag-foot">
        </div>

        <!--Popular Posts STarts Here-->
        <div id="pop-post">
        </div>
        <!--Popular posts ends Here-->
        
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        	<h2 class="footer_title">Get In Touch</h2>
            <a class="twitter-timeline" data-width="100%" data-height="250" href="https://twitter.com/s_jayasurya">Tweets by s_jayasurya</a> <script async src="//<strong>platform.twitter.com/widgets.js</strong>" charset="utf-8"></script>
          
          
               <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script> 
        </div>
    </div>

</div>

<div class="info-social">
	<div align="center">
            	<div class="info-social">
                	<a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-user" aria-hidden="true" title="View Profile"></i></a>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i>
</a>
    </div>
</div>
<!--Footer Ends Here-->

<!--Footer Info Stats Here-->

<div class="container-fluid footer-info">
	
    	<div class="container" align="center">
            
            	<p>&copy; All Rights Reserved. Designed & Developed By Jayasurya.</p>
            </div>
        </div>    
    
</div>
<!--Footer Info Ends Here-->
<script type="text/javascript" src="/ui/article.js"></script>
<script type="text/javascript" src="/ui/main.js"></script>
</body>
</html>

    `;
    return htmlTemplate;
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/css/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'style.css'));
});

app.get('/images/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', req.params.fileName));
});


app.get('/ui/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', req.params.fileName));
});

app.get('/ui/img/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', req.params.fileName));
});

//For My Code
app.get('/css/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', req.params.fileName));
});

app.get('/js/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', req.params.fileName));
});

app.get('/images/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', req.params.fileName));
});

//Category
app.get('/category/css/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', req.params.fileName));
});

app.get('/category/js/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', req.params.fileName));
});

app.get('/category/images/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', req.params.fileName));
});


app.get('/article', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article.html'));
});

//For Article
app.get('/articles/js/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', req.params.fileName));
});

app.get('/articles/css/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', req.params.fileName));
});

app.get('/articles/images/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', req.params.fileName));
});

//For Related Articles

app.get('/articles/:file/images/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', req.params.fileName));
});


var pool = new Pool(config);


//Tags-Category
app.get('/tags', function (req, res) {
  	pool.query("SELECT DISTINCT category FROM article", function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

//Tags-footer
app.get('/tags-footer', function (req, res) {
  	pool.query("SELECT DISTINCT category FROM article", function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

//popular-article
app.get('/pop-posts', function (req, res) {
  	pool.query("SELECT * FROM article ORDER BY RANDOM() LIMIT 4", function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});


app.get('/get-articles', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT * FROM article ORDER BY date DESC LIMIT 4', function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

//latest articles
app.get('/latest-articles', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT * FROM article ORDER BY date DESC', function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});


app.get('/articles/:articleName/:catName', function (req, res) {

  pool.query("SELECT * FROM article WHERE title = $1", [req.params.articleName], function (err, result) {
    if (err) {
        res.status(500).send(err.toString());
    } else {
        if (result.rows.length === 0) {
            res.status(404).send('Article not found');
        } else {
            var articleData = result.rows[0];
            res.send(createTemplate(articleData));
        }
    }
  });
});

//Testing for rel article

app.get('/Categ/:catName', function (req, res) {

  pool.query("SELECT * FROM article WHERE category = $1 ORDER BY date DESC LIMIT 4", [req.params.catName], function (err, result) {
    if (err) {
        res.status(500).send(err.toString());
    } else {
        if (result.rows.length === 0) {
            res.status(404).send('Article not found');
        } else {
            res.send(JSON.stringify(result.rows));
        }
    }
  });
});



//For category Page
app.get('/category/:categoryName', function (req, res) {
      res.send(createCategory());
//        res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/cat/:categoryName', function (req, res) {
	
  // SELECT * FROM article WHERE title = '\'; DELETE WHERE a = \'asdf'
  pool.query("SELECT * FROM article WHERE category = $1", [req.params.categoryName], function (err, result) {
    if (err) {
        res.status(500).send(err.toString());
    } else {
        if (result.rows.length === 0) {
            res.status(404).send('Article not found');
        } else {
            res.send(JSON.stringify(result.rows));
        }
    }
  });
});


/*
app.post('/articles/:articleName/:category', function (req, res) {
  //Query For Category
    pool.query('SELECT * FROM article WHERE category = $1 ORDER BY date DESC', [req.params.category], function (err, result) {
    if (err) {
        res.status(500).send(err.toString());
    } else {
        if (result.rows.length === 0) {
            res.status(404).send('Article not found');
        } else {
			res.send(JSON.stringify(result.rows));
        }
    }
  });		  

	
});
*/

//Posting Comments
app.get('/get-comments/:articleName', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT comment.*, "user".username FROM article, comment, "user" WHERE article.title = $1 AND article.id = comment.article_id AND comment.user_id = "user".id ORDER BY comment.timestamp DESC', [req.params.articleName], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

app.post('/submit-comment/:articleName', function (req, res) {
   // Check if the user is logged in
    if (req.session && req.session.auth && req.session.auth.userId) {
        // First check if the article exists and get the article-id
        pool.query('SELECT * from article where title = $1', [req.params.articleName], function (err, result) {
            if (err) {
                res.status(500).send(err.toString());
            } else {
                if (result.rows.length === 0) {
                    res.status(400).send('Article not found');
                } else {
                    var articleId = result.rows[0].id;
                    // Now insert the right comment for this article
                    pool.query(
                        "INSERT INTO comment (comment, article_id, user_id) VALUES ($1, $2, $3)",
                        [req.body.comment, articleId, req.session.auth.userId],
                        function (err, result) {
                            if (err) {
                                res.status(500).send(err.toString());
                            } else {
                                res.status(200).send('Comment inserted!')
                            }
                        });
                }
            }
       });     
    } else {
        res.status(403).send('Only logged in users can comment');
    }
});


//Login
function hash (input, salt) {
    // How do we create a hash?
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return ["pbkdf2", "10000", salt, hashed.toString('hex')].join('$');
}

app.post('/create-user', function (req, res) {
   // username, password
   // {"username": "tanmai", "password": "password"}
   // JSON
   var username = req.body.username;
   var password = req.body.password;
   var salt = crypto.randomBytes(128).toString('hex');
   var dbString = hash(password, salt);
   pool.query('INSERT INTO "user" (username, password) VALUES ($1, $2)', [username, dbString], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send('User successfully created: ' + username);
      }
   });
});

app.post('/login', function (req, res) {
   var username = req.body.username;
   var password = req.body.password;
   
   pool.query('SELECT * FROM "user" WHERE username = $1', [username], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          if (result.rows.length === 0) {
              res.status(403).send('username/password is invalid');
          } else {
              // Match the password
              var dbString = result.rows[0].password;
              var salt = dbString.split('$')[2];
              var hashedPassword = hash(password, salt); // Creating a hash based on the password submitted and the original salt
              if (hashedPassword === dbString) {
                
                // Set the session
                req.session.auth = {userId: result.rows[0].id};
                // set cookie with a session id
                // internally, on the server side, it maps the session id to an object
                // { auth: {userId }}
                
                res.send('credentials correct!');
                
              } else {
                res.status(403).send('username/password is invalid');
              }
          }
      }
   });
});

app.get('/check-login', function (req, res) {
   if (req.session && req.session.auth && req.session.auth.userId) {
       // Load the user object
       pool.query('SELECT * FROM "user" WHERE id = $1', [req.session.auth.userId], function (err, result) {
           if (err) {
              res.status(500).send(err.toString());
           } else {
              res.send(result.rows[0].username);    
           }
       });
   } else {
       res.status(400).send('You are not logged in');
   }
});

app.get('/logout', function (req, res) {
   delete req.session.auth;
   res.send('<html><body>Logged out!<br/><br/><a href="/">Back to home</a></body></html>');
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
