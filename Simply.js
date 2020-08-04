function kirimWA(_0xd556x2) {
    var _0xd556x3 = !0;
    if (jQuery("#" + _0xd556x2 + " .wajib").each(function () {
            "" != $.trim(jQuery(this).val()) && "default" != $.trim(jQuery(this).val()) || jQuery(this).addClass("focus")
        }), jQuery("#" + _0xd556x2 + " .wajib").each(function () {
            return "" == $.trim(jQuery(this).val()) ? (_0xd556x3 = !1, jQuery(this).parents("label").find(".validasi").addClass("show"), jQuery(this).focus(), !1) : "default" == $.trim(jQuery(this).val()) ? (_0xd556x3 = !1, jQuery(this).parents("label").find(".validasi").addClass("show"), !1) : void(0)
        }), _0xd556x3 === !0) {
        var _0xd556x4 = "",
            _0xd556x5 = "https://web.whatsapp.com/send";
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (_0xd556x5 = "whatsapp://send"), "konsultasi" === _0xd556x2) {
            var _0xd556x6 = 62,
                _0xd556x7 = 8875820426,
                _0xd556x8 = "Admin",
                _0xd556x9 = "Hello",
                _0xd556xa = (jQuery("#" + _0xd556x2 + " .title-content").text(), jQuery("#" + _0xd556x2 + " .pesan").val()),
                _0xd556x4 = _0xd556x5 + "\?phone=" + _0xd556x6 + _0xd556x7 + "&text=\*" + _0xd556x9 + " " + _0xd556x8 + "...\* %0A%0A" + _0xd556xa
        };
        jQuery(this).attr("href", _0xd556x4);
        var _0xd556xb = 960,
            _0xd556xc = 540,
            _0xd556xd = Number(screen.width / 2 - _0xd556xb / 2),
            _0xd556xe = Number(screen.height / 2 - _0xd556xc / 2),
            _0xd556xf = window.open(this.href, "", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=" + _0xd556xb + ", height=" + _0xd556xc + ", top=" + _0xd556xe + ", left=" + _0xd556xd);
        return _0xd556xf.focus(), !1
    }
}
window.addEventListener("load", function () {
    var _0xd556x2 = jQuery("title").text();
    jQuery(".waFix").on("click", function () {
        jQuery(this).removeClass("show"), jQuery("title").text(_0xd556x2)
    }), jQuery(".formWA input, .formWA textarea").on("keypress", function () {
        13 === event.keyCode && jQuery(this).parents(".formWA").find(".submit").trigger("click")
    }), jQuery(".formWA .wajib").each(function () {
        title = jQuery(this).attr("placeholder"), label = jQuery(this).parents("label"), jQuery('<span class="validasi">\(Required\)</span>').appendTo(label)
    }), jQuery(".formWA .wajib").keyup(function () {
        "" != jQuery(this).val() && (jQuery(this).removeClass("focus"), jQuery(this).parents("label").find(".validasi").removeClass("show"))
    }), jQuery(".formWA select").change(function () {
        jQuery(this).removeClass("focus"), jQuery(this).parents("label").find(".validasi").removeClass("show")
    })
}, !1), jQuery(".formWA .submit").on("click", function () {
    return kirimWA(jQuery(this).parents(".poptamv").attr("id")), !1
}), $(document).on("click", ".close-chat", function () {
    $("#whatsapp-chat").addClass("hide").removeClass("show")
}), $(document).on("click", ".nabil-live", function () {
    $("#whatsapp-chat").addClass("show").removeClass("hide")
})
