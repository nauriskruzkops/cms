
/* --------------------------------------------
reCAPTCHA
-------------------------------------------- */
//window.onload = reCAPTCHALoad;

Captcha = {

	key : "6Ldma6wUAAAAAGfR8wWW0Az_p28vq31GxeeCJs1S",
	captchaElement : "#captcha_token_src",

	load : function () {
		if ($("#contact-form").length) {
			let script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://www.google.com/recaptcha/api.js?render='+Captcha.key;
			if ($(Captcha.captchaElement).length) {
				script.onload = function () {
					grecaptcha.ready(function () {
						grecaptcha.execute('6Ldma6wUAAAAAGfR8wWW0Az_p28vq31GxeeCJs1S', {action: 'homepage'}).then(function (token) {
							$(Captcha.captchaElement).attr('value', token);
						});
					});
				};
			}
			document.head.appendChild(script);
		}
	}

};


