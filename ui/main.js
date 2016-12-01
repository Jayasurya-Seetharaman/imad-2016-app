var categoryName = window.location.pathname.split('/')[2];
var catName = window.location.pathname.split('/')[3];

function loadLoginForm () {
    var loginHtml = `
        <h3>Login/Register</h3>
		<div clss="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		<div class="form-group">
        <input type="text" class="form-control" id="username" placeholder="Username" />
		</div>
		<div class="form-group">
        <input type="password" class="form-control" id="password" placeholder="Password" />
		</div>
        
        <input type="submit" class="btn btn-success" id="login_btn" value="Login" />
        <input type="submit" class="btn btn-primary" id="register_btn" value="Register" />
		</div>
        `;
    document.getElementById('login_area').innerHTML = loginHtml;
    
    // Submit username/password to login
    var submit = document.getElementById('login_btn');
    submit.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  submit.value = 'Sucess!';
              } else if (request.status === 403) {
                  submit.value = 'Invalid credentials. Try again?';
              } else if (request.status === 500) {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              } else {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              }
              loadLogin();
          }  
          // Not done yet
        };
        
        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', '/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        submit.value = 'Logging in...';
        
    };
    
    var register = document.getElementById('register_btn');
    register.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  register.value = 'Registered!';
              } else {
                  alert('Could not register the user');
                  register.value = 'Register';
              }
          }
        };
        
        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', '/create-user', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        register.value = 'Registering...';
    
    };
}

function loadLoggedInUser (username) {
    var loginArea = document.getElementById('login_area');
    loginArea.innerHTML = `
        <h3> Hi <i>${username}</i></h3>
        <a href="/logout" class="btn btn-danger">Logout</a>
    `;
}

function loadLogin () {
    // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                loadLoggedInUser(this.responseText);
            } else {
                loadLoginForm();
            }
        }
    };
    
    request.open('GET', '/check-login', true);
    request.send(null);
}

//Func for Article 
function loadArticles () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('articles');
            if (request.status === 200) {
//                var content = '<ul>';
				var content = '<div class="col-lg-9 no_left_pad col-md-9 pad_bot">';
                var articleData = JSON.parse(this.responseText);
				
                for (var i=0; i< articleData.length; i++) {
                   
				   content += `<div class="col-lg-12 col-md-12 col-sm-12">
        	<img src="${articleData[i].img}" class="img-responsive">
           
           <div class="article">
           <!--Head- Article- Starts-->
            <div align="center">
            	<a href="/articles/${articleData[i].title}/${articleData[i].category}">
				<h3 class="article_head">${articleData[i].heading}</h3>
				</a>
				
			</div>
            <div class="col-lg-offset-2 col-lg-2 line col-md-offset-2 col-md-2 col-sm-offset-2 col-sm-2 hidden-xs">
            </div>
            <div class="col-lg-offset-0 col-lg-4 col-lg-offset-4 col-md-offset-0 col-md-4 col-md-offset-4 col-sm-offset-0 col-sm-4 col-sm-offset-4 col-xs-offset-2 col-xs-8 col-xs-offset-2">
            	<p class="category"><a href="/category/${articleData[i].category}" class="link">${articleData[i].category}</a></p>
            </div>
            <div class="col-lg-2 line col-md-2 col-sm-2 hidden-xs">
            </div>
            
            <div class="clearfix"></div>
            
            <div align="center">
            	<p class="calendar"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;(${articleData[i].date.split('T')[0]})</p>
            </div>
            
            
            
            <!--Head- Article- Ends-->
            <div class="article_section">
            	<p>${articleData[i].content.substring(3, 150)}</p>
				<a href="/articles/${articleData[i].title}/${articleData[i].category}"><p style="text-align:right !important;">view more</p></a>
            </div>
            </div>
            <br>
          </div>
				   
				   
				   
				   `;
				
                }
				  content += "</div>";
  //              content += "</ul>"
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/get-articles', true);
    request.send(null);
}


//Fun for latest-Articles
function latestArticles () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('latest-posts');
            if (request.status === 200) {
				var content = '<h3 class="title">Latest Posts</h3>';
                var articleData = JSON.parse(this.responseText);
				
                for (var i=0; i< articleData.length; i++) {
                   
				   content += `   
				   <img src="${articleData[i].img}" class="img-responsive img_pad" style="margin-top:-7px !important;">
            	<div align="center">
    	        	<div class="pop_post">
        	        	<div class="pop_content">
	        	        	<a href="/articles/${articleData[i].title}/${articleData[i].category}">
							<p>${articleData[i].heading}</p>
							</a>
                	    </div>
                	</div>
				</div>
				   
				   `;
				
                }
//				  content += "</div>";
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/latest-articles', true);
    request.send(null);
}


//Fun for relArticles
function relArticles () {
        // Check if the user is already logged in
		//alert("Test");
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('rel-posts');
            if (request.status === 200) {
				var content = '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 rel_post">';
                var articleData = JSON.parse(this.responseText);
				
                for (var i=0; i< articleData.length; i++) {
                   
				   content += ` 				   
     		    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" align="center">
				<img src="${articleData[i].img}" class="img-responsive">
				<a href="/articles/${articleData[i].title}/${articleData[i].category}">${articleData[i].heading}</a>
				</div>
				   
				   `;
				
                }
				  content += "</div>";
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!');
            }
        }
    };
    
    request.open('GET', '/Categ/' + catName, true);
    request.send(null);
}

//loadTags
function loadTags () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('tag');
            if (request.status === 200) {
                var content = `
				<h3 class="title">Tags</h3>
            <div class="tags" style="margin-top:-8px !important;">
			<ul class="pagination">`;
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `
                    <li><a href="/category/${articleData[i].category}">${articleData[i].category}</a></li>
	  `;
                }
				content += `</ul></div>`;
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!');
				
				
            }
        }
    };
    
    request.open('GET', '/tags', true);
    request.send(null);
}


//loadFooTags
function loadFooTags () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('tag-foot');
            if (request.status === 200) {
                var content = `
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        	<h2 class="footer_title">Tags</h2>
            <ul>`;
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `<li class="footer_tag_li"><a href="/articles/${articleData[i].title}/${articleData[i].category}">${articleData[i].category}</a></li>`;
                }
				content += `</ul></div>`;
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!');
				
				
            }
        }
    };
    
    request.open('GET', '/tags-footer', true);
    request.send(null);
}

//loadPoparticle
function loadPoparticle () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('pop-post');
            if (request.status === 200) {
                var content = `
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        	<h2 class="footer_title">Popular Posts</h2>
				`;
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
            	<img src="${articleData[i].img}" class="img-thumbnail">
            </div>
            <div class="col-lg-7 no_left_pad col-md-7 col-sm-7 col-xs-7">
            	<a href="/category/${articleData[i].category}">${articleData[i].heading}</a>
            </div>
            <div class="clearfix"></div>`;
                }
				content += `</div>`;
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!');
				
				
            }
        }
    };
    
    request.open('GET', '/pop-posts', true);
    request.send(null);
}

//Func for category 
function loadCategory () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var article = document.getElementById('category');
						
            if (request.status === 200) {
//                var content = '<ul>';

				var content = `<div class="col-lg-9 no_left_pad col-md-9 pad_bot">
				<h3 class="title no_top_margin"><a href="/">Home</a> / ` + categoryName + `</h3>`;
                var articleData = JSON.parse(this.responseText);
				
                for (var i=0; i< articleData.length; i++) {
                   
				   content += `
<div class="col-lg-6 col-md-12 col-sm-12">
        	<img src="${articleData[i].img}" class="img-responsive">
           
           <div class="article">
           <!--Head- Article- Starts-->
            <div align="center">
            	<a href="/articles/${articleData[i].title}/${articleData[i].category}">
				<h3 class="article_head">${articleData[i].heading}</h3>
				</a>
				
			</div>
            <div class="col-lg-offset-2 col-lg-2 line col-md-offset-2 col-md-2 col-sm-offset-2 col-sm-2 hidden-xs">
            </div>
            <div class="col-lg-offset-0 col-lg-4 col-lg-offset-4 col-md-offset-0 col-md-4 col-md-offset-4 col-sm-offset-0 col-sm-4 col-sm-offset-4 col-xs-offset-2 col-xs-8 col-xs-offset-2">
            	<p class="category"><a href="/articles/${articleData[i].title}/${articleData[i].category}" class="link">${articleData[i].category}</a></p>
            </div>
            <div class="col-lg-2 line col-md-2 col-sm-2 hidden-xs">
            </div>
            
            <div class="clearfix"></div>
            
            <div align="center">
            	<p class="calendar"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;(${articleData[i].date.split('T')[0]})</p>
            </div>
            
            
            
            <!--Head- Article- Ends-->
            <div class="article_section">
            	<p>${articleData[i].content.substring(3, 200)}</p>
				<a href="/articles/${articleData[i].title}/${articleData[i].category}"><p style="text-align:right !important;">view more</p></a>
            </div>
            </div>
          
          </div>				   
          
				   `;
				   //content += "Hello";
				
                }
				content += "</div>";
                article.innerHTML = content;
			
            } else {
                article.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/cat/' + categoryName, true);
    request.send(null);
}




//Calling loadArticles()
loadArticles();

//Calling loadLogin()
loadLogin();

//Calling latest-posts
latestArticles();

//Calling Related Articles
relArticles();

//loadTags
loadTags();

//loadFooTags
loadFooTags();

//loadPoparticle
loadPoparticle();

//loadCategory
loadCategory();

