/* import Translator from "./translator";

var translator = new Translator({
  persist: false,
  languages: ["de", "tr"],
  defaultLanguage: "de",
  detectLanguage: false,
  filesLocation: "/i18n"
});

translator.load();

document.querySelector("form").addEventListener("click", function(evt) {
  if (evt.target.tagName === "INPUT") {
    translator.load(evt.target.value);
  }
}); */


(function ($) {
  var $window = $(window),
    $body = $("body"),
    $sidebar = $("#sidebar");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: [null, "480px"],
  });

  // Hack: Enable IE flexbox workarounds.
  if (browser.name == "ie") $body.addClass("is-ie");

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Forms.

  // Hack: Activate non-input submits.
  $("form").on("click", ".submit", function (event) {
    // Stop propagation, default.
    event.stopPropagation();
    event.preventDefault();

    // Submit form.
    $(this).parents("form").submit();
  });

  // Sidebar.
  if ($sidebar.length > 0) {
    var $sidebar_a = $sidebar.find("a");

    $sidebar_a
      .addClass("scrolly")
      .on("click", function () {
        var $this = $(this);

        // External link? Bail.
        if ($this.attr("href").charAt(0) != "#") return;

        // Deactivate all links.
        $sidebar_a.removeClass("active");

        // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
        $this.addClass("active").addClass("active-locked");
      })
      .each(function () {
        var $this = $(this),
          id = $this.attr("href"),
          $section = $(id);

        // No section for this link? Bail.
        if ($section.length < 1) return;

        // Scrollex.
        $section.scrollex({
          mode: "middle",
          top: "-20vh",
          bottom: "-20vh",
          initialize: function () {
            // Deactivate section.
            $section.addClass("inactive");
          },
          enter: function () {
            // Activate section.
            $section.removeClass("inactive");

            // No locked links? Deactivate all links and activate this section's one.
            if ($sidebar_a.filter(".active-locked").length == 0) {
              $sidebar_a.removeClass("active");
              $this.addClass("active");
            }

            // Otherwise, if this section's link is the one that's locked, unlock it.
            else if ($this.hasClass("active-locked"))
              $this.removeClass("active-locked");
          },
        });
      });
  }

  // Scrolly.
  $(".scrolly").scrolly({
    speed: 1000,
    offset: function () {
      // If <=large, >small, and sidebar is present, use its height as the offset.
      if (
        breakpoints.active("<=large") &&
        !breakpoints.active("<=small") &&
        $sidebar.length > 0
      )
        return $sidebar.height();

      return 0;
    },
  });

  // Spotlights.
  $(".spotlights > section")
    .scrollex({
      mode: "middle",
      top: "-10vh",
      bottom: "-10vh",
      initialize: function () {
        // Deactivate section.
        $(this).addClass("inactive");
      },
      enter: function () {
        // Activate section.
        $(this).removeClass("inactive");
      },
    })
    .each(function () {
      var $this = $(this),
        $image = $this.find(".image"),
        $img = $image.find("img"),
        x;

      // Assign image.
      $image.css("background-image", "url(" + $img.attr("src") + ")");

      // Set background position.
      if ((x = $img.data("position"))) $image.css("background-position", x);

      // Hide <img>.
      $img.hide();
    });

  // Features.
  $(".features").scrollex({
    mode: "middle",
    top: "-20vh",
    bottom: "-20vh",
    initialize: function () {
      // Deactivate section.
      $(this).addClass("inactive");
    },
    enter: function () {
      // Activate section.
      $(this).removeClass("inactive");
    },
  });
})(jQuery);


// TRANSLATIONS ---------------------------------------------------------------------------------------------------------
var languageGerman = true;

document.getElementById("INTRO_TEXT_BIG").innerHTML = languageGerman? "Hi, ich bin Rana" : "Merhaba ben Rana";
document.getElementById("INTRO_TEXT_SMALL").innerHTML = languageGerman? 
"Just another fine responsive site template designed by and released for free under the." : 
"Tarafindan tasarlanan başka bir duyarli site şablonu altinda ücretsiz olarak yayinlandi.";

// Buttons
document.getElementById("LANG_BTN").innerHTML = languageGerman? "Türkçe" : "Deutsch";
document.getElementById("MORE_BTN").innerHTML = languageGerman? "mehr erfahren" : "daha fazla bilgi edin";
document.getElementById("SEND_BTN").innerHTML = languageGerman? "Nachricht schicken" : "Mesaj gönder";

// Nav Links
document.getElementById("NAV_WELCOME").innerHTML = languageGerman? "wilkommen" : "Hoş geldin";
document.getElementById("NAV_WHO_WE_ARE").innerHTML = languageGerman? "wer bin ich" : "Biz Kimiz";
document.getElementById("NAV_WHAT_WE_DO").innerHTML = languageGerman? "was ich machen" : "ne yapiyoruz";
document.getElementById("NAV_CONTACT").innerHTML = languageGerman? "kontaktiere mich" : "Bize Ulaşin";

// Cards
document.getElementById("NACHHILFE").innerHTML = languageGerman? "Nachhilfe in Deutsch/Türkisch" : "Almanca/Türkçe özel ders";
document.getElementById("NACHHILFE_TEXT").innerHTML = languageGerman? 
"Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus." : 
"Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.";

document.getElementById("UEBERSETZUNG").innerHTML = languageGerman? "Übersetzung Deutsch/Türkisch" : "Almanca/Türkçe çeviri";
document.getElementById("UEBERSETZUNG_TEXT").innerHTML = languageGerman? 
"Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus." : 
"Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.";

document.getElementById("DOLMETSCHEN").innerHTML = languageGerman? "Dolmetschen Deutsch/Türkisch" : "Almanca/Türkçe Tercümanlik";
document.getElementById("DOLMETSCHEN_TEXT").innerHTML = languageGerman? 
"Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus." : 
"Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.";


document.getElementById("WHAT_DO_WE_DO").innerHTML = languageGerman? "Was ich mache" : "Ne yaparim";
document.getElementById("WHAT_DO_WE_DO_TEXT").innerHTML = languageGerman? 
"Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus." : 
"Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.";

// Contact me
document.getElementById("CONTACT_ME_INTRO").innerHTML = languageGerman? "Kontaktiere mich" : "Bana ulaşin";
/* document.getElementById("CONTACT_ME_TEXT").innerHTML = languageGerman? 
  "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem." : 
  "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem."; */
document.getElementById("CONTACT_NAME").innerHTML = languageGerman? "Name" : "İsim";
document.getElementById("CONTACT_EMAIL").innerHTML = languageGerman? "E-Mail" : "E-posta";
document.getElementById("CONTACT_MESSAGE").innerHTML = languageGerman? "Nachricht" : "Haberler";
document.getElementById("ABOUT_ADDRESS").innerHTML = languageGerman? "Adresse" : "Adres";
document.getElementById("ABOUT_EMAIL").innerHTML = languageGerman? "E-mail" : "E-posta";
document.getElementById("ABOUT_PHONE").innerHTML = languageGerman? "Telefon" : "Telefon";


function changeLang(){
  languageGerman = !languageGerman;

  document.getElementById("INTRO_TEXT_BIG").innerHTML = languageGerman? "Hi, ich bin Rana" : "Merhaba ben Rana";
  document.getElementById("INTRO_TEXT_SMALL").innerHTML = languageGerman? 
  "Just another fine responsive site template designed by and released for free under the." : 
  "Tarafından tasarlanan başka bir duyarli site şablonu altinda ücretsiz olarak yayinlandi.";

  // Buttons
  document.getElementById("LANG_BTN").innerHTML = languageGerman? "Türkçe" : "Deutsch";
  document.getElementById("MORE_BTN").innerHTML = languageGerman? "mehr erfahren" : "daha fazla bilgi edin";
  document.getElementById("SEND_BTN").innerHTML = languageGerman? "Nachricht schicken" : "Mesaj gönder";

  // Nav Links
  document.getElementById("NAV_WELCOME").innerHTML = languageGerman? "wilkommen" : "Hoş geldin";
  document.getElementById("NAV_WHO_WE_ARE").innerHTML = languageGerman? "wer bin ich" : "Biz Kimiz";
  document.getElementById("NAV_WHAT_WE_DO").innerHTML = languageGerman? "was ich machen" : "ne yapiyoruz";
  document.getElementById("NAV_CONTACT").innerHTML = languageGerman? "kontaktiere mich" : "Bize Ulaşin";

  // Cards
  document.getElementById("NACHHILFE").innerHTML = languageGerman? "Nachhilfe in Deutsch/Türkisch" : "Almanca/Türkçe özel ders";
  document.getElementById("NACHHILFE_TEXT").innerHTML = languageGerman? 
  "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus." : 
  "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.";

  document.getElementById("UEBERSETZUNG").innerHTML = languageGerman? "Übersetzung Deutsch/Türkisch" : "Almanca/Türkçe çeviri";
  document.getElementById("UEBERSETZUNG_TEXT").innerHTML = languageGerman? 
  "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus." : 
  "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.";

  document.getElementById("DOLMETSCHEN").innerHTML = languageGerman? "Dolmetschen Deutsch/Türkisch" : "Almanca/Türkçe Tercümanlik";
  document.getElementById("DOLMETSCHEN_TEXT").innerHTML = languageGerman? 
  "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus." : 
  "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.";

  document.getElementById("WHAT_DO_WE_DO").innerHTML = languageGerman? "Was ich mache" : "Ne yaparim";
  document.getElementById("WHAT_DO_WE_DO_TEXT").innerHTML = languageGerman? 
  "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus." : 
  "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.";

  // Contact me
  document.getElementById("CONTACT_ME_INTRO").innerHTML = languageGerman? "Kontaktiere mich" : "Bana ulaşn";
  /* document.getElementById("CONTACT_ME_TEXT").innerHTML = languageGerman? 
  "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem." : 
  "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem."; */
  
  document.getElementById("CONTACT_NAME").innerHTML = languageGerman? "Name" : "İsim";
  document.getElementById("CONTACT_EMAIL").innerHTML = languageGerman? "E-Mail" : "E-posta";
  document.getElementById("CONTACT_MESSAGE").innerHTML = languageGerman? "Nachricht" : "Haberler";
  document.getElementById("ABOUT_ADDRESS").innerHTML = languageGerman? "Adresse" : "Adres";
  document.getElementById("ABOUT_EMAIL").innerHTML = languageGerman? "E-mail" : "E-posta";
  document.getElementById("ABOUT_PHONE").innerHTML = languageGerman? "Telefon" : "Telefon";
}