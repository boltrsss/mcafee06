function googleTranslateElementInit() {
  new google.translate.TranslateElement(
  {
    pageLanguage: "en",
     layout: google.translate.TranslateElement.FloatPosition.TOP_RIGHT,
     autoDisplay: false,
    }
    ,
    "google_translate_element"
  );
}
(function () {
  var googleTranslateScript = document.createElement("script");
  googleTranslateScript.type = "text/javascript";
  googleTranslateScript.async = true;
  googleTranslateScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(googleTranslateScript);
}
)();
$(document).ready(function () {
  $("#google_translate_element").bind("DOMSubtreeModified", function () {
    setTimeout(function () {
      $("#topHide").fadeOut();
      $("body").css("overflow", "visible");
    }, 1000);
  });
});
let browser_language = navigator.language || navigator.userLanguage;
var lang = browser_language.split("-");
lang = lang[0];
Cookies.set("GoogleAccountsLocale_session", lang, { expires: 999 });
Cookies.set("googtrans", "/en/" + lang, { expires: 999 });
