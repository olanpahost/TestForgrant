
$(document).ready(function() {
    function loadAjax(IdOfBlock,che, addresshtm) {
        var obj = $(IdOfBlock).find(".block__info-items");
        $.ajax({
            url: addresshtm,
            type: "GET",
            success: function (data) {
                var x,
                    y="%";
                che ? x = data.changes.price : x = data.changes.percent;
                che ? y = " $" : y = "%";
                console.log(x.hour);
                obj.find(".Hour").text(x.hour + y);
                obj.find(".Day").text(x.day + y);
                obj.find(".Week").text(x.week + y);
                obj.find(".Month").text(x.month + y);
            },
            error: function () {
                console.log('дані не завантажились');
            }
        });//end ajax
    }
    var sp = $("#selectpicker"),
        val = $('.selectpicker option:selected').val(),
        bl = $(".block"),
        addresshtm = "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC" + val;
    sp.change(function () {
        for (i=0; i<3; i++) {
            var x = $(bl[i]).find("input"),
                che=x.prop("checked"),
                idofbl = "#"+ $(bl[i]).attr("id");
            loadAjax(idofbl, che, addresshtm );
        }

    });
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        $('.selectpicker').selectpicker('mobile');
    };
})