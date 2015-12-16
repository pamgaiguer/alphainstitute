<?php include "_header.php";?>
<!-- section -->
<div class="section page-header">
	<div class="container">
		<h1>Entre em contato</h1>
	</div>
</div>
<!-- ./section -->
<!-- section -->
<div class="section contact-us">
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-sm-12 wow fadeInUp showdelay2">
				<h3>Tem algo a nos dizer?</h3>
				<p>
				Quer conversar com o Alpha Group? Quer nos deixar alguma mensagem, desde sugestões, informações, reclamações, novidades a serem contadas, etc.<br>
				Basta preencher o formulário abaixo para entrar em contato conosco e nossa equipe terá todo o prazer em lhe responder!<br>
				</p>
			</div>
		</div>
		<!-- /row -->
	</div>
</div>
<!-- ./section -->
<!-- section -->
<div class="section contact-us">
	<div class="container">
		<div class="row">
			<!-- Contact Form -->
			<!-- In order to set the email address and subject line for the contact form go to the contact_me.php file. -->
			<div class="col-md-6 col-sm-6">
				<div class="contact-form  wow fadeInLeft showdelay2">
					<form  name="sentMessage" id="contactForm" novalidate>
						<div class="control-group form-group">
							<div class="controls">
								<label>Nome</label>
								<input type="text" class="form-control dark" id="name" placeholder="Nome" required data-validation-required-message="Por favor, informe seu nome.">
								<p class="help-block"></p>
							</div>
						</div>
						<div class="control-group form-group">
							<div class="controls">
								<label>E-mail</label>
								<input type="email" class="form-control dark" id="email" placeholder="Endereço de e-mail" required data-validation-required-message="Por favor, informe seu e-mail.">
								<p class="help-block"></p>
							</div>
						</div>
						<div class="control-group form-group">
							<div class="controls">
								<label>Messagem</label>
								<textarea class="form-control dark" rows="7" id="message" placeholder="Mensagem" required data-validation-required-message="Escreva sua mensagem" maxlength="999" style="resize:none"></textarea>
								<p class="help-block"></p>
							</div>
						</div>
						<div id="success"></div>
						<div class="pull-right">
							<button type="submit" class="btn btn-info btn-lg" id="btn">Enviar</button>
						</div>
					</form>
					<div class="clearfix"></div>
					<div id="retornoHTML"></div>
				</div>
			</div>
			<!-- ./contact form -->

			<!-- address -->
			<div class="col-md-6 col-sm-6">
				<div class="address  wow fadeInRight showdelay2">
					<h3>Endereço</h3>
					<ul class="unstyled">
						<li><i class="fa fa-map-marker"></i>Av. Rebouças, 3377, Pinheiros, São Paulo - SP</li>
						<li><i class="fa fa-envelope"></i>contato@alphagroup.com.br</li>
						<li><i class="fa fa-phone"></i>+55 (11) 3078-6777</li>
					</ul>
				</div>
				<div class="social wow fadeInRight showdelay2">
					<h3>Redes sociais</h3>
					<ul class="social-link dark">
						<li><a href="https://www.facebook.com/pages/Instituto-Alpha-de-Sa%C3%BAde-Integral/385416424931241" target="_blank"><i class="fa fa-facebook"></i></a></li>
						<li><a href="https://twitter.com/InstitutoAlpha" target="_blank"><i class="fa fa-twitter"></i></a></li>
						<li><a href="https://www.linkedin.com/company/instituto-alpha-de-sa%C3%BAde-integral" target="_blank"><i class="fa fa-linkedin"></i></a></li>
					</ul>
				</div>

			</div>
			<!-- ./address -->

		</div>
		<!-- /row -->

	</div>
</div>
<!-- ./section -->
<div class="section">
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-sm-12 wow fadeInUp showdelay2">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9141346178335!2d-46.6936572853742!3d-23.571527167852068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce570b6cc36b4b%3A0x9ba0b08c1d9ec9b0!2sAv.+Rebou%C3%A7as%2C+3377+-+Pinheiros%2C+S%C3%A3o+Paulo+-+SP%2C+05401-400!5e0!3m2!1spt-BR!2sbr!4v1449018947073" width="100%" height="400px;" frameborder="0" style="border:0" allowfullscreen></iframe>
			</div>
		</div>
	</div>
</div>

<!-- ./section -->
<?php include "_footer.php";?>
<!-- footer -->
</body>
</html>