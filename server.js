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


//Func for Portfolio
function createProfile (){
	var Profile = `
<!doctype html>
<html>
<head>
<title>Profile</title>
<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap Css-->
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/style-profile.css">

  <!-- Bootstrap Js -->
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>

  <!--Font_awesome CDN-->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("#menu").click(function(){
        $(".menu").toggle();
    });
});
</script>


</head>

<body>

<!--Mobile header-->
<section class="header">
<p><a href="#" id="menu" style="font-size:16px;color:#FFF;"><i class="fa fa-bars" aria-hidden="true"></i></a><span style="float:right;">Header</span> </p>

</section>

<!--Section starts here-->
<section class="main">
	<div class="col-lg-12 col-md-12 col-sm-12 home-bg">
		<div class="tab-content">
            <div id="home" class="tab-pane fade in active">
              <div align="center" class="pad-top-bot">
                <img src="images/jayasurya.jpg" style="height:200px;width:200px;border-radius:100px;border-width:thick;border:5px solid #999;">
                <h2 style="padding-top:10px;padding-bottom:10px;">I'M <font style="color:#1ab5d3;">JAYASURYA SEETHARAMAN</font></h2>
                <h4>Hello. I'm a Developer</h4>
                <p style="border-bottom:1px solid #FFF;border-bottom-width: thick;width: 20%;"></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br>
Etiam eu cursus lectus. In ultrice s leo sed leo bibendum eu interdum urna luctus.</p>
				<div class="home-social">
                    <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>                
                </div>

             </div>

            </div>
            <div id="profile" class="tab-pane fade">
              
              <div class="profile" align="center">
              <h1>My Profile</h1>
              <p style="border-bottom:1px solid #1ab5d3;"></p>
              <div class="col-lg-offset-3 col-lg-6 col-lg-offset-3 col-md-offset-1 col-md-10 col-md-offset-1 col-sm-12">
              	<div class="table-responsive">
                	<table class="table">
                    	<tr>
                        	<td>Name</td><td>:</td><td>Jayasurya Seetharaman</td>
                        </tr>
                        <tr>
                        	<td>D.O.B</td><td>:</td><td>06-04-1996</td>
                        </tr>
                        <tr>
                        	<td>Age</td><td>:</td><td>20</td>
                        </tr>
                        <tr>
                        	<td>Marital Status</td><td>:</td><td>Unmarried</td>
                        </tr>
                        <tr>
                        	<td>Profession</td><td>:</td><td>Student</td>
                        </tr>
                        <tr>
                        	<td>Mobile.No</td><td>:</td><td>9894685416</td>
                        </tr>
                        <tr>
                        	<td>Email</td><td>:</td><td>jayasuryas06@gmail.com</td>
                        </tr>
                        <tr>
                        	<td>Address</td><td>:</td><td>60,Kumaran Nagar, Ondipur,<br>Coimbatore-641 016,<br>Tamilnadu.</td>
                        </tr>
                    </table>

                </div>
                </div>
              </div>
              
              
            </div>
            
            <!--Resume starts here-->
            <div id="resume" class="tab-pane fade resume-bg">
            <div class="container-fluid">
              <h2 class="resume-head">Resume - Personal Info</h2>
             <div align="center"> <p style="border-bottom:1px solid #1ab5d3;width:10%;"></p></div>
             
             <div class="resume-info">
             	
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h3>Education</h3>
                <p style="border-bottom:1px solid #1ab5d3;border-bottom-width:thick;width:10%;"></p>
                
				<h4>SSLC<span class="year"><strong>2000-2011</strong></span></h4>
                <p style="border-bottom:1px solid #1ab5d3;"></p>
                <h5>Name of School</h5>
                <div class="schl">
                    <h4>Rajalakshmi Mills High School</h4>
                    <p>Coimbatore</p>
                </div>
                
                <h4>HSLC<span class="year"><strong>2011-2013</strong></span></h4>
                <p style="border-bottom:1px solid #1ab5d3;"></p>
                <h5>Name of School</h5>
                <div class="schl">                
                    <h4>RK.Sree Rangammal Higher Secondary School</h4>
                    <p>Coimbatore</p>
                </div>
                
                <h4>MSC.SOFTWARE SYSTEMS<span class="year"><strong>IV Year in Process</strong></span></h4>
                <p style="border-bottom:1px solid #1ab5d3;"></p>
                <h5>Name of Institution</h5>
                <div class="schl">
                    <h4>Sri krsihna Arts and Science College</h4>
                    <p>Coimbatore</p>
                </div>
                
                <h3 style="padding-top:10px;">Industrial Exposure</h3>
                <p style="border-bottom:1px solid #1ab5d3;border-bottom-width:thick;width:10%;"></p>
                
                <h4>WIPRO TECHNOLOGIES<span class="year"><strong>Mar / 2015</strong></span></h4>
                <p style="border-bottom:1px solid #1ab5d3;"></p>
                <div class="cmpny">
                    <h4>Undergone 1 day of Industrial Visit at WIPRO TECHNOLOGIES in <i>Bangalore</i> on 04.03.2015</h4>
                </div>
                
                <h4>REFINEMENT SOFTWARE SOLUTIONS<span class="year"><strong>May / 2015</strong></span></h4>
                <p style="border-bottom:1px solid #1ab5d3;"></p>
                <div class="cmpny">
                    <h4>Undergone 15 days of In-plant Training at REFINEMENT SOFTWARE SOLUTIONS in <i>Coimbatore</i> from 15.05.2015 to 30.05.20155</h4>
                </div>

                <h4>123COIMBATORE.COM<span class="year"><strong> May - Oct , 2016. </strong></span></h4>
                <p style="border-bottom:1px solid #1ab5d3;"></p>
                <div class="cmpny">
                    <h4>Undergone 6 Months of Internship Training at 123COIMBATORE.COM in <i>Coimbatore</i> from 1.05.2016 to 30.10.2016</h4>
                    <h4>Also I had been working there as a<strong> Php Developer</strong>. List of Projects I have been completed in 
                    <i><a href="">123coimbatore</a></i> can be viewed in Portfolio. </h4>
                </div>

                
              </div>
                
                
                
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h3>Percentage / CGPA</h3>
                <p style="border-bottom:1px solid #1ab5d3;border-bottom-width:thick;width:10%;"></p>
                
                <div class="bar clearfix" data-percent="95%">
                    <div class="bar-title"><span>SSLC</span></div>
                    <div class="bar-bar" style="width: 90%;"></div>
                    <div class="bar-percent">90%</div>
                </div>

				<div class="bar clearfix" data-percent="95%">
                    <div class="bar-title"><span>HSLC</span></div>
                    <div class="bar-bar" style="width: 74%;"></div>
                    <div class="bar-percent">74%</div>
                </div>
                
				<div class="bar clearfix" data-percent="95%">
                    <div class="bar-title"><span>MSC.SS</span></div>
                    <div class="bar-bar" style="width: 76%;"></div>
                    <div class="bar-percent">7.6</div>
                </div>
                
                <h3 style="padding-top:10px;">Technical Skills</h3>
                <p style="border-bottom:1px solid #1ab5d3;border-bottom-width:thick;width:10%;"></p>

				<div class="bar clearfix" data-percent="95%">
                    <div class="bar-title"><span>PHOTOSHOP CS6</span></div>
                    <div class="bar-bar" style="width: 75%;"></div>
                    <div class="bar-percent">75%</div>
                </div>
                
				<div class="bar clearfix" data-percent="95%">
                    <div class="bar-title"><span>HTML 5</span></div>
                    <div class="bar-bar" style="width: 70%;"></div>
                    <div class="bar-percent">70%</div>
                </div>

				<div class="bar clearfix" data-percent="95%">
                    <div class="bar-title"><span>CSS</span></div>
                    <div class="bar-bar" style="width: 60%;"></div>
                    <div class="bar-percent">60%</div>
                </div>

				<div class="bar clearfix">
                    <div class="bar-title"><span>PHP</span></div>
                    <div class="bar-bar" style="width: 60%;"></div>
                    <div class="bar-percent">60%</div>
                </div>

				<div class="bar clearfix" data-percent="95%">
                    <div class="bar-title"><span>JAVASCRIPT</span></div>
                    <div class="bar-bar" style="width: 40%;"></div>
                    <div class="bar-percent">40%</div>
                </div>

				<div class="bar clearfix" data-percent="95%">
                    <div class="bar-title"><span>MSC.SS</span></div>
                    <div class="bar-bar" style="width: 35%;"></div>
                    <div class="bar-percent">35%</div>
                </div>

				<div class="bar clearfix" data-percent="95%">
                    <div class="bar-title"><span>NODE JS</span></div>
                    <div class="bar-bar" style="width: 30%;"></div>
                    <div class="bar-percent">30%</div>
                </div>

                <h3 style="padding-top:10px;">Area Of Interest</h3>
                <p style="border-bottom:1px solid #1ab5d3;border-bottom-width:thick;width:10%;"></p>
                
				<div class="bar clearfix" data-percent="95%">
                    <div class="bar-title"><span>WEB DESIGNING</span></div>
                    <div class="bar-bar" style="width: 60%;"></div>
                    <div class="bar-percent">60%</div>
                </div>

				<div class="bar clearfix" data-percent="95%">
                    <div class="bar-title"><span>DEVELOPING / WEB DEVELOPING</span></div>
                    <div class="bar-bar" style="width: 100%;"></div>
                    <div class="bar-percent">100%</div>
                </div>

				<div class="bar clearfix" data-percent="95%">
                    <div class="bar-title"><span>MOBILE APP DEVELOPING</span></div>
                    <div class="bar-bar" style="width: 70%;"></div>
                    <div class="bar-percent">70%</div>
                </div>
                
                <h3 style="padding-top:10px;">Achievements</h3>
                <p style="border-bottom:1px solid #1ab5d3;border-bottom-width:thick;width:10%;"></p>
				
                <h3 style="font-size:17px !important;">Journal Publication</h3>
                
                <div class="cmpny">
                    <h4>1.&nbsp;Latest Technology in Medical Field.
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ISSN.NO: 0976-5697</h4>
                    <h4>2.&nbsp;Web Intrusion Using Advanced SQL Injector and Countermeasures.
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ISSN.NO:2278-1021</h4>
                </div>
                
                
              </div>
                
             </div>
             </div>
            </div>
            <!--Resume ends here-->
            
            <div id="portfolio" class="tab-pane fade portfolio-bg">

                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 no-pad">
                      <article>
                        <a href="#"><img src="images/blog.jpg" class="img-responsive"></a>
                      </article>  
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 no-pad">
                      <article>
                        <a href="#"><img src="images/blog.jpg" class="img-responsive"></a>
                      </article>  
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 no-pad">
                      <article>
                        <a href="#"><img src="images/blog.jpg" class="img-responsive"></a>
                      </article>  
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 no-pad">
                      <article>
                        <a href="#"><img src="images/blog.jpg" class="img-responsive"></a>
                      </article>  
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 no-pad">
                      <article>
                        <a href="#"><img src="images/blog.jpg" class="img-responsive"></a>
                      </article>  
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 no-pad">
                      <article>
                        <a href="#"><img src="images/blog.jpg" class="img-responsive"></a>
                      </article>  
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 no-pad">
                      <article>
                        <a href="#"><img src="images/blog.jpg" class="img-responsive"></a>
                      </article>  
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 no-pad">
                      <article>
                        <a href="#"><img src="images/blog.jpg" class="img-responsive"></a>
                      </article>  
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 no-pad">
                      <article>
                        <a href="#"><img src="images/blog.jpg" class="img-responsive"></a>
                      </article>  
                </div>

             </div>
            
            <div id="blog" class="tab-pane fade blog-bg">

              	<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 no-ryt-pad">
                  <article>
                	<img src="images/blog.jpg" class="img-responsive">
                    <div class="post">
                    <h4><a href="#">Awesome Post Title</a></h4>
                    <p style="color:#1ab5d3;">Category - Feb,2016.</p>
                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris sit amet sapien eget lacus...</p>
                    <a href="#">view more</a>
                    </div>
                  </article>  
                </div>
                
                <div class="col-lg-4 col-md-4 col-sm-6 no-ryt-pad">
                  <article>
                	<img src="images/blog.jpg" class="img-responsive">
                    <div class="post">
                    <h4><a href="#">Awesome Post Title</a></h4>
                    <p style="color:#1ab5d3;">Category - Feb,2016.</p>
                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris sit amet sapien eget lacus...</p>
                    <a href="#">view more</a>
                    </div>
                  </article>  

                </div>
                
                <div class="col-lg-4 col-md-4 col-sm-6 no-ryt-pad">
                  <article>
                	<img src="images/blog.jpg" class="img-responsive">
                    <div class="post">
                    <h4><a href="#">Awesome Post Title</a></h4>
                    <p style="color:#1ab5d3;">Category - Feb,2016.</p>
                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris sit amet sapien eget lacus...</p>
                    <a href="#">view more</a>
                    </div>
                    
                  </article>  

                </div>

              	<div class="col-lg-4 col-md-4 col-sm-6 no-ryt-pad">
                  <article>
                	<img src="images/blog.jpg" class="img-responsive">
                    <div class="post">
                    <h4><a href="#">Awesome Post Title</a></h4>
                    <p style="color:#337ab7;">Category - Feb,2016.</p>
                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris sit amet sapien eget lacus...</p>
                    </div>
                  </article>  
                </div>
                
                <div class="col-lg-4 col-md-4 col-sm-6 no-ryt-pad">
                  <article>
                	<img src="images/blog.jpg" class="img-responsive">
                    <div class="post">
                    <h4><a href="#">Awesome Post Title</a></h4>
                    <p style="color:#337ab7;">Category - Feb,2016.</p>
                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris sit amet sapien eget lacus...</p>
                    </div>
                  </article>  

                </div>
                
                <div class="col-lg-4 col-md-4 col-sm-6 no-ryt-pad">
                  <article>
                	<img src="images/blog.jpg" class="img-responsive">
                    <div class="post">
                    <h4><a href="#">Awesome Post Title</a></h4>
                    <p style="color:#337ab7;">Category - Feb,2016.</p>
                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris sit amet sapien eget lacus...</p>
                    </div>
                    
                  </article>  

                </div>
              
            </div>
            
	  </div>

    </div>
</section>
<!--Section ends here-->

<!--Side menu starts here-->
<div class="menu">
<div align="center" class="pad-top-bot">
    <img src="images/profile.jpg" class="img-circle">
    <p style="padding-top:10px;padding-bottom:10px;">Jayasurya Seetharaman</p>
    <p style="border-bottom:1px solid #1ab5d3;border-bottom-width: thin;width: 40%;"></p>
</div>
<ul class="nav nav-pills nav-stacked">
    <li class="active"><a data-toggle="pill" href="#home">Home</a></li>
    <li><a data-toggle="pill" href="#profile">Profile</a></li>
    <li><a data-toggle="pill" href="#resume">Resume</a></li>
    <li><a data-toggle="pill" href="#portfolio">Porfolio</a></li>
    <li><a data-toggle="pill" href="#blog">Blog</a></li>
</ul>

<div class="social">
    <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
    <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
</div>

<div align="center">
    <p style="padding:0px;border-bottom:1px solid #1ab5d3;border-bottom-width: thin;width: 40%;"></p>
    <p><small>Designed by Jayasurya</small></p>
</div>

</div>
<!--Side menu ends here-->

</body>
</html>

	`;
	return Profile;
}


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
