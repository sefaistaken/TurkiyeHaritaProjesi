$(function () {
    if ($.cookie) {
        var _isApp = getParameterByName("isapp") != undefined && (getParameterByName("isapp").toLowerCase() == "1" || getParameterByName("isapp").toLowerCase() == "true");

        if (_isApp)
            return;

        var _isEU = $.cookie("tmd_gdpr") != null && $.cookie("tmd_gdpr") != 3;

        if (_isEU)
            return;

        var _cookieName = "tmd_kvkk",
            _cookieValue = getStorage(_cookieName) != null ? getStorage(_cookieName).split(",") : "",
            _virtualPath = "/" + (typeof (_kvkkLang) !== "undefined" ? _kvkkLang : "");

        _cookieValue = !$.isArray(_cookieValue) ? [] : _cookieValue;

		//alert(getStorage(_cookieName));

        if ($.inArray(_virtualPath, _cookieValue) == -1) {
            try {
                $("head").append("<link rel=\"stylesheet\" rel=\"preload\" href=\"https://i.tmgrup.com.tr/tmd-consent/c/tmd-kvkk.css\" as=\"style\" type=\"text/css\" />");

                var _html = "";
                _html += "<div class=\"txt\">";

                // Start - Site ana dili
                if (typeof (_kvkkLang) !== "undefined") {
                    var _innerHtml = "";

                    if (_kvkkLang == "en") {
                        _innerHtml += "Please ";
                        _innerHtml += "<a href=\"" + (typeof (_kvkkLink) === "undefined" ? "/veri-politikasi" : _kvkkLink) + "#privacyEn\" target=\"_blank\">click</a>";
                        _innerHtml += "to read our informative text prepared pursuant to the Law on the Protection of Personal Data No. 6698 and to get information about the ";
                        _innerHtml += "<a href=\"" + (typeof (_kvkkLink) === "undefined" ? "/veri-politikasi" : _kvkkLink) + "#cookiesEn\" target=\"_blank\">cookies</a> used on our website in accordance with the relevant legislation.";
                    }
                    else if (_kvkkLang == "de") {
                        _innerHtml += "Bitte ";
                        _innerHtml += "<a href=\"" + (typeof (_kvkkLink) === "undefined" ? "/veri-politikasi" : _kvkkLink) + "#privacyDe\" target=\"_blank\">klicken</a>";
                        _innerHtml += " Sie hier, um den Aufkl??rungstext, der gem???? Gesetz Nr. 6698 zum Schutz personenbezogener Daten erstellt wurde, und um Informationen zu ";
                        _innerHtml += "<a href=\"" + (typeof (_kvkkLink) === "undefined" ? "/veri-politikasi" : _kvkkLink) + "#cookiesDe\" target=\"_blank\">Cookies</a>";
                        _innerHtml += " zu erhalten, die wir in ??bereinstimmung mit einschl??gigen Gesetzen auf unserer Website verwenden.";
                    }
                    else if (_kvkkLang == "ru") {
                        _innerHtml += "?????????? ???????????????? ???????????????????????????? ????????, ???????????????????????? ?? ???????????????????????? ???????????? ???6698 ???? ???????????? ???????????????????????? ??????????????, ?? ?????????? ???????????????? ???????????????????? ";
                        _innerHtml += "<a href=\"" + (typeof (_kvkkLink) === "undefined" ? "/veri-politikasi" : _kvkkLink) + "#cookiesRu\" target=\"_blank\">?? cookie-????????????</a>";
                        _innerHtml += ", ???????????????????????? ???? ?????????? ?????????? ?? ???????????????????????? ?? ???????????????????? ??????????????????????????????????";
                        _innerHtml += "<a href=\"" + (typeof (_kvkkLink) === "undefined" ? "/veri-politikasi" : _kvkkLink) + "#privacyRu\" target=\"_blank\">, ?????????????? ??????????.</a>";
                    }
                    else if (_kvkkLang == "ar") {
                        _innerHtml += "<a href=\"" + (typeof (_kvkkLink) === "undefined" ? "/veri-politikasi" : _kvkkLink) + "#privacyAr\" target=\"_blank\"> ?????????? ?????????? ??????</a>";
                        _innerHtml += "???????????? ???? ?????????????? ???????? ???????? ?????????????? ?????? ???????????? ???? ?????????? ?????????? ???????????????? ?????????????? ?????? 6698?? ?????????????? ?????? ??????????????";
                        _innerHtml += "<a href=\"" + (typeof (_kvkkLink) === "undefined" ? "/veri-politikasi" : _kvkkLink) + "#cookiesAr\" target=\"_blank\">???????????? ???????????? ???????????????? </a>";
                        _innerHtml += " ?????????????????? ???? ???????????? ?????? ???????????? ???? ?????????????????? ?????? ??????????";
                    }

                    _html += _innerHtml != "" ? "  <span>" + _innerHtml + "  </span>" : "";
                }
                // End - Site ana dili

                // Start - Default Turkce metin
                _html += "  <span class = 'tr'>";
                _html += "      6698 say??l?? Ki??isel Verilerin Korunmas?? Kanunu uyar??nca haz??rlanm???? ayd??nlatma metnimizi okumak ve sitemizde ilgili mevzuata uygun olarak kullan??lan ";
                _html += "      <a href=\"" + (typeof (_kvkkLink) === "undefined" ? "/veri-politikasi" : _kvkkLink) + "#cookies\" target=\"_blank\">??erezlerle</a>";
                _html += " ilgili bilgi almak i??in l??tfen ";
                _html += "      <a href=\"" + (typeof (_kvkkLink) === "undefined" ? "/veri-politikasi" : _kvkkLink) + "#privacy\" target=\"_blank\">t??klay??n??z. </a>";
                _html += "  </span>";
                // End - Default Turkce metin

                _html += "  <span class=\"close\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span>";
                _html += "</div>";

                var _container = $("<div />");
                $(_container).addClass("veriAltBar");
                $(_container).append(_html);

                $("span.close", $(_container)).click(function () {
                    _cookieValue.push(_virtualPath);                   
					
					setStorage(_cookieName, _cookieValue,30);
					
                    $('.stickyLink').css("bottom", "");

                    $(this).parent().parent().remove();
					//alert(getStorage(_cookieName));
                })

                setTimeout(function () {
                    $("body").append($(_container));

                    if ($("span.close", $(_container)).length > 0)
                        $(".stickyLink").css("bottom", $(_container).outerHeight(true));
                }, 2000);
            }
            catch (ex) {
            }
        }
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
	
	
	// ------------------------------------------------------------------------------------------------
	// Bu Javascript yap??lan ilk versiyonla jQuery Cookie k??t??phanesiyle yap??lm????,
	// ancak iPhone safalerilerde baz?? sorunlarla kar????la????lm????t??.
	// Buna istinaden localStorage sistemine ge??ilmi?? ve sorunun ortadan kalkt?????? g??zlemlenmi??tir.
	// 
	// Normalde expires s??resi olmayan localStorage i??in a??a????daki ??ekilde 3 fonksiyon tan??mlanm????,
	// expires time olay?? etkin hale getirilmi??tir.
	//
	// removeStorage => S??resi dolmu?? localStorage'?? siler
	// getStorage => Kay??tl?? localStorage objesini ??eker
	// setStorage => localStorage objesi tan??mlar. Expires olarak verece??imiz de??er g??n de??eridir.	
	// 
	// S??leyman ??etiner - 26.08.2019
	// ------------------------------------------------------------------------------------------------
	
	
	function removeStorage(name) {
		try {
			localStorage.removeItem(name);
			localStorage.removeItem(name + '_expiresIn');
		} catch(e) {
			//console.log('removeStorage: localStorage silinirken hata olu??tu => ['+ key + '] from localStorage: ' + JSON.stringify(e) );
			return false;
		}
		return true;
	}
		
	
	function getStorage(key) {

		var now = Date.now();  		
		var expiresIn = localStorage.getItem(key+'_expiresIn');
		if (expiresIn===undefined || expiresIn===null) { expiresIn = 0; }

		if (expiresIn < now) { // s??resi dolmu??sa localStorage de??erini ve bu de??er ile tuttu??umuz expiresIn de??erini siliyoruz.
			removeStorage(key);
			return null;
		} else {
			try {
				var value = localStorage.getItem(key);
				return value;
			} catch(e) {
				console.log('getStorage: Error reading key ['+ key + '] from localStorage: ' + JSON.stringify(e) );
				return null;
			}
		}
	}
	
	
	
	function setStorage(key, value, expires) {

		if (expires===undefined || expires===null) {
			expires = 1;  // E??er expires bo?? gelirse default olarak 1 g??n at??yoruz.
		} else {
			expires = Math.abs(expires); //Gelen expires de??eri negatif yani -3, -5 bile gelse biz onu 3, 5 gibi tamsay??ya ??eviriyoruz.
			
			//Test i??in yukar??daki sat??r?? kapat??p a??a????daki sat??r?? a??t??????m??zda localStorage'??n 20 saniyede silindi??ini g??zlemledik.
			//expires = 20
		}

		var now = Date.now();  //millisecs since epoch time, lets deal only with integer
		var schedule = now + (expires*24*60*60*1000); 
		try {
			localStorage.setItem(key, value);
			localStorage.setItem(key + '_expiresIn', schedule);
		} catch(e) {
			//console.log('setStorage: localStorage eklenirken hata olu??tu => ['+ key + '] in localStorage: ' + JSON.stringify(e) );
			return false;
		}
		return true;
	}
	
});