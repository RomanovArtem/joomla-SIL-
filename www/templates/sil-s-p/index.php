<?php 
    defined("_JEXEC") or die();
    
    $doc = JFactory::getDocument();
    
    $doc->addStyleSheet(JUri::base(TRUE). '/templates/' . $doc->template . '/css/style.css');
    $doc->addStyleSheet(JUri::base(TRUE). '/templates/' . $doc->template . '/css/reset.css');
    //$doc->addScript(JUri::base(TRUE)    . '/templates/' . $doc->template . '/js/jcarousellite_1.0.1.js', 'text/javascript');
    //$doc->addScript(JUri::base(TRUE)    . '/templates/' . $doc->template . '/js/jquery-1.8.2.min.js', 'text/javascript');
    //$doc->addScript(JUri::base(TRUE)    . '/templates/' . $doc->template . '/js/script.js', 'text/javascript');

?>
<!doctype html>
<html>
<head>
    <jdoc:include type="head" />
    <link rel="icon" href="<?php echo JUri::base(TRUE).'/templates/' . $doc->template;?>/images/icon.ico" type="image/x-icon">
	<link rel="shortcut icon" href="<?php echo JUri::base(TRUE).'/templates/' . $doc->template;?>/images/icon.ico" type="image/x-icon">
            
</head>

<body>
	<img src="<?php echo JUri::base(TRUE).'/templates/' . $doc->template;?>/images/back.png" alt="back" class="background">
	<div class="side-bar">
		<div class="logo">
			<a href='/index.php'>
				<img src="<?php echo JUri::base(TRUE).'/templates/' . $doc->template;?>/images/logo.png" alt="logo" id="logo-img"></a>
		</div>
	<!--	<ul class="left-nav-menu">
			<div class="block-submenu">
				<li class="low-voltage-systems">
					<a href="low-current-systems.html">Слаботочные системы</a>

					<ul class="submenu">
						<li>
							<a href="video-surveillance.html">Видеонаблюдение</a>
						</li>
						<li>
							<a href="access-control.html">Контроль доступа</a>
						</li>
						<li>
							<a href="doorphone.html">Домофонная связь</a>
						</li>
					</ul>

				</li>
			</div>
			<li>
				<a href="it-consulting.html">ИТ Консалтинг</a>
			</li>
			<li>
				<a href="it-safety.html">ИТ Безопасность</a>
			</li>
			<li>
				<a href="archive-services.html">Архивные услуги</a>
			</li>
			<li>
				<a href="energy-audit.html">Энергоаудит</a>
			</li>
			<li>
				<a href="protection-of-premises.html">Защита помещений</a>
			</li>
		</ul>  -->
        <jdoc:include type="modules" name="position-1"/>
	
    <jdoc:include type="modules" name="position-2"/>
		<img src="<?php echo JUri::base(TRUE).'/templates/' . $doc->template;?>/images/search.png" alt="search" class="search-img">
        
        </div>
	<div class="block-body">

		<div class="header">
            <jdoc:include type="modules" name="position-0"/>
		</div>

		<div class="content-second-page">
			<div class="scroller">
				<div class="container">
					

					<jdoc:include type="component"/>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="footer-information">
				<jdoc:include type="modules" name="position-3"/>
			</div>
			<div class="contact-details">
				<jdoc:include type="modules" name="position-4"/>
			</div>
			<div class="feedback">
				<h1>ОБРАТНАЯ СВЯЗЬ</h1>

			</div>
			<div class="floating-block">
				<h1>ОБРАТНАЯ СВЯЗЬ</h1>
				<h3>Задайте мне ваш вопрос..,</h3>
				<div class="barcode">
					<img src="images/barcode.png" alt="barcode"></div>
				<h2>Иван Дробовиков</h2>
				<h4>Администратор сайта</h4>
				<div class="electromail">
					<img src="images/mail.png" alt="mail">
					<p>Веб форма орбратной связи</p>
				</div>
				<div class="electromail">
					<img src="images/mail.png" alt="mail">
					<p>Электропочта</p>
				</div>

			</div>
		</div>

	</div>

	<script type="text/javascript" src="<?php echo JUri::base(TRUE).'/templates/' . $doc->template;?>/js/jquery-1.8.2.min.js"></script>
	<script type="text/javascript" src="<?php echo JUri::base(TRUE).'/templates/' . $doc->template;?>/js/jcarousellite_1.0.1.js"></script>
	<script type="text/javascript" src="<?php echo JUri::base(TRUE).'/templates/' . $doc->template;?>/js/script.js"></script>

</body>
</html>