
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

/* document.getElementById("INTRO_TEXT_BIG").innerHTML = languageGerman? "Hi, ich bin Rana" : "Merhaba ben Rana";
document.getElementById("INTRO_TEXT_SMALL").innerHTML = languageGerman? 
"Just another fine responsive site template designed by and released for free under the." : 
"Tarafindan tasarlanan ba??ka bir duyarli site ??ablonu altinda ??cretsiz olarak yayinlandi."; */

// Buttons
document.getElementById("LANG_BTN").innerHTML = languageGerman? "T??rk??e" : "Deutsch";
document.getElementById("MORE_BTN").innerHTML = languageGerman? "mehr erfahren" : "daha fazla bilgi edin";
document.getElementById("SEND_BTN").innerHTML = languageGerman? "Nachricht schicken" : "Mesaj g??nder";

// Nav Links
document.getElementById("NAV_WELCOME").innerHTML = languageGerman? "wilkommen" : "Ho?? geldin";
document.getElementById("NAV_WHO_WE_ARE").innerHTML = languageGerman? "Vermietung" : "kiralama";
document.getElementById("NAV_WHAT_WE_DO").innerHTML = languageGerman? "wer ich bin" : "ben kimim";
document.getElementById("NAV_CONTACT").innerHTML = languageGerman? "kontakt" : "??leti??im";

// Cards
document.getElementById("NACHHILFE").innerHTML = languageGerman? "Nachhilfe in Deutsch/T??rkisch" : "Almanca/T??rk??e ??zel ders";
document.getElementById("NACHHILFE_TEXT").innerHTML = languageGerman? 
"Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus." : 
"Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.";

document.getElementById("UEBERSETZUNG").innerHTML = languageGerman? "??bersetzerin/ Dolmetscherin" : "Terc??man/ terc??man";
document.getElementById("UEBERSETZUNG_TEXT").innerHTML = languageGerman? 
"??bersetzerin / Dolmetscherin f??r die t??rkische Sprache" : 
"T??rk dili i??in terc??man / terc??man";

document.getElementById("DOLMETSCHEN").innerHTML = languageGerman? "Event-Moderation/ AUTORIN" : "Etkinlik moderat??rl??????/ YAZAR";
document.getElementById("DOLMETSCHEN_TEXT").innerHTML = languageGerman? 
"Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus." : 
"Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.";


document.getElementById("WHAT_DO_WE_DO").innerHTML = languageGerman? "Sie suchen einen Schulungsraum zur Miete?" : "Kiral??k bir e??itim odas?? m?? ar??yorsunuz?";
document.getElementById("WHAT_DO_WE_DO_TEXT").innerHTML = languageGerman? 
"Vermiete sehr ger??umigen, gem??tlichen, sauberen & hellen Sminarraum / Tagungsraum in Toplage Elsenfeld." 
+"</br>" + 
"- F??r ca. 20 Personen geeignet"
+"</br>" +
"- WLAN & BEAMER sind verf??gbar."
+"</br>" +
"- Ausreichend Parkpl??tze vorhanden"
+"</br>" +
"- Festgelegte Tagespauschale 99,00???"
: 
"Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.";

// Contact me
document.getElementById("CONTACT_ME_INTRO").innerHTML = languageGerman? "Kontakt" : "Bana ula??in";
document.getElementById("CONTACT_ME_TEXT").innerHTML = languageGerman? 
  "Sie k??nnen mich gerne per E-mail oder Telefon erreichen.": 
  "Phasellus convallis elit id ullamcorper pam sem, sit amet impet quis lorem.";
document.getElementById("CONTACT_NAME").innerHTML = languageGerman? "Name" : "??sim";
document.getElementById("CONTACT_EMAIL").innerHTML = languageGerman? "E-Mail" : "E-posta";
document.getElementById("CONTACT_MESSAGE").innerHTML = languageGerman? "Nachricht" : "Haberler";
document.getElementById("ABOUT_ADDRESS").innerHTML = languageGerman? "Adresse" : "Adres";
/* document.getElementById("ABOUT_EMAIL").innerHTML = languageGerman? "E-mail" : "E-posta";
document.getElementById("ABOUT_PHONE").innerHTML = languageGerman? "Telefon" : "Telefon"; */


function changeLang(){
  languageGerman = !languageGerman;

  /* document.getElementById("INTRO_TEXT_BIG").innerHTML = languageGerman? "Hi, ich bin Rana" : "Merhaba ben Rana";
  document.getElementById("INTRO_TEXT_SMALL").innerHTML = languageGerman? 
  "Just another fine responsive site template designed by and released for free under the." : 
  "Taraf??ndan tasarlanan ba??ka bir duyarli site ??ablonu altinda ??cretsiz olarak yayinlandi."; */

  // Buttons
  document.getElementById("LANG_BTN").innerHTML = languageGerman? "T??rk??e" : "Deutsch";
  document.getElementById("MORE_BTN").innerHTML = languageGerman? "mehr erfahren" : "daha fazla bilgi edin";
  document.getElementById("SEND_BTN").innerHTML = languageGerman? "Nachricht schicken" : "Mesaj g??nder";

  // Nav Links
  document.getElementById("NAV_WELCOME").innerHTML = languageGerman? "wilkommen" : "Ho?? geldin";
  document.getElementById("NAV_WHO_WE_ARE").innerHTML = languageGerman? "Vermietung" : "kiralama";
  document.getElementById("NAV_WHAT_WE_DO").innerHTML = languageGerman? "wer ich bin" : "ben kimim";
  document.getElementById("NAV_CONTACT").innerHTML = languageGerman? "kontakt" : "??leti??im";

  // Cards
  document.getElementById("NACHHILFE").innerHTML = languageGerman? "Nachhilfe in Deutsch/T??rkisch" : "Almanca/T??rk??e ??zel ders";
  document.getElementById("NACHHILFE_TEXT").innerHTML = languageGerman? 
  "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus." : 
  "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.";

  document.getElementById("UEBERSETZUNG").innerHTML = languageGerman? "??bersetzerin / Dolmetscherin" : "Terc??man / terc??man";
  document.getElementById("UEBERSETZUNG_TEXT").innerHTML = languageGerman? 
  "??bersetzerin / Dolmetscherin f??r die t??rkische Sprache" : 
  "T??rk dili i??in terc??man / terc??man";

  document.getElementById("DOLMETSCHEN").innerHTML = languageGerman? "Event-Moderation/ AUTORIN" : "Etkinlik moderat??rl??????/ YAZAR";
  document.getElementById("DOLMETSCHEN_TEXT").innerHTML = languageGerman? 
  "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus." : 
  "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.";

  document.getElementById("WHAT_DO_WE_DO").innerHTML = languageGerman? "Sie suchen einen Schulungsraum zur Miete?" : "Kiral??k bir e??itim odas?? m?? ar??yorsunuz?";
  document.getElementById("WHAT_DO_WE_DO_TEXT").innerHTML = languageGerman? 
  "Vermiete sehr ger??umigen, gem??tlichen, sauberen & hellen Sminarraum / Tagungsraum in Toplage Elsenfeld." : 
  "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.";

  // Contact me
  document.getElementById("CONTACT_ME_INTRO").innerHTML = languageGerman? "Kontakt" : "Bana ula??n";
  document.getElementById("CONTACT_ME_TEXT").innerHTML = languageGerman? 
  "Sie k??nnen mich gerne per E-mail oder Telefon erreichen.": 
  "Phasellus convallis elit id ullamcorper pam sem, sit amet impet quis lorem.";
  
  document.getElementById("CONTACT_NAME").innerHTML = languageGerman? "Name" : "??sim";
  document.getElementById("CONTACT_EMAIL").innerHTML = languageGerman? "E-Mail" : "E-posta";
  document.getElementById("CONTACT_MESSAGE").innerHTML = languageGerman? "Nachricht" : "Haberler";
  document.getElementById("ABOUT_ADDRESS").innerHTML = languageGerman? "Adresse" : "Adres";
/*   document.getElementById("ABOUT_EMAIL").innerHTML = languageGerman? "E-mail" : "E-posta";
  document.getElementById("ABOUT_PHONE").innerHTML = languageGerman? "Telefon" : "Telefon"; */
}

function handleImageClick(){

};