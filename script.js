$().ready(function() {
    $('.send').click(function() {
        setTimeout(function() {
            $('#plate').removeClass('front');
            $('#container').removeClass('beginning');
            $('.curvable').addClass('curved');
            setTimeout(function() {
                $('#container').addClass('hover');
                setTimeout(function() {
                    $('#container').addClass('fly_away_first');
                    setTimeout(function() {
                        $('#container').addClass('fly_away');
                        setTimeout(function(){
                            $('#aftermsg').addClass('show');
                        },2000);
                    }, 600);
                }, 2000);
            }, 2800);
        }, 200);
    });
});