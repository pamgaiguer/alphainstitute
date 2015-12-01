<?php include "_header.php";?>

<!-- ./navigation -->
			<!-- ./navigation -->

			<!-- section -->
			<div class="section page-header">
				<div class="container">
					<h1>Contact Us</h1>
				</div>
			</div>
			<!-- ./section -->


			<!-- section -->
			<div class="section">
				<div class="container">

					<div class="row">
						<div class="col-md-12 col-sm-12 wow fadeInUp showdelay2">
							<h3>Something to Say?</h3>
							<p>about section Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper diam nec augue semper, in dignissim. about section Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper diam nec augue semper, in dignissim about section Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper diam nec augue semper, in dignissim </p>
						</div>

					</div>
					<!-- /row -->

				</div>
			</div>
			<!-- ./section -->


			<!-- section -->
			<div class="section">
				<div class="container">

					<div class="row">
						<!-- Contact Form -->
						<!-- In order to set the email address and subject line for the contact form go to the contact_me.php file. -->
						<div class="col-md-6 col-sm-6">
							<div class="contact-form  wow fadeInLeft showdelay2">
							<form  name="sentMessage" id="contactForm" novalidate>
								<div class="control-group form-group">
									<div class="controls">
										<label>Name</label>
										<input type="text" class="form-control dark" id="name" placeholder="Name" required data-validation-required-message="Please enter your name.">
										<p class="help-block"></p>
									</div>
								</div>
								<div class="control-group form-group">
									<div class="controls">
										<label>Email</label>
										<input type="email" class="form-control dark" id="email" placeholder="Email Address" required data-validation-required-message="Please enter your email address.">
										<p class="help-block"></p>
									</div>
								</div>
								<div class="control-group form-group">
									<div class="controls">
										<label>Message</label>
										<textarea class="form-control dark" rows="7" id="message" placeholder="Message" required data-validation-required-message="Please enter your message" maxlength="999" style="resize:none"></textarea>
										<p class="help-block"></p>
									</div>
								</div>
								<div id="success"></div>
								<div class="pull-right">
								<button type="submit" class="btn btn-info btn-lg">Submit</button>
								</div>
							</form>
							<div class="clearfix"></div>
							</div>
						</div>
						<!-- ./contact form -->

						<!-- address -->
						<div class="col-md-6 col-sm-6">
							<div class="address  wow fadeInRight showdelay2">
								<h3>Address</h3>
								<ul class="unstyled">
									<li><i class="fa fa-map-marker"></i>25th Street, Suite 2 New York NY 10887</li>
									<li><i class="fa fa-envelope"></i>email@domain.com</li>
									<li><i class="fa fa-phone"></i>+40 (0) 231 1234 567</li>
									<li><i class="fa fa-fax"></i>+40 (0) 123 1234 568</li>
								</ul>
							</div>
							<div class="social wow fadeInRight showdelay2">
								<h3>Be Social</h3>
								<ul class="social-link dark">
									<li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
								</ul>
							</div>

						</div>
						<!-- ./address -->

					</div>
					<!-- /row -->

				</div>
			</div>
			<!-- ./section -->


	<!-- ./section -->
	<?php include "_footer.php";?>
	<!-- footer -->
</body>
</html>