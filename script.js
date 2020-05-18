$('#check').click(function() {
    $('.resultContent').hide();
    $('#oddOrEven').hide();
    $('#isPrime').hide();
    if ($('#num').val() == '' || $('#num').val() < 0) {
        $('.err').show();
    } else {
        $('.err').hide();
        $('.resultContent').show();
        $('#oddOrEven').show();
        $('#isPrime').show();
        var num = $('#num').val();
        var isPrime = 1;
        if ((num % 2) == 0) {
            $('#oddOrEven').html(num + " is an Even no.");
        } else if ((num % 2) != 0) {
            $('#oddOrEven').html(num + " is an Odd no.");
        } else {
            $('#oddOrEven').hide();
        }
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = 0;
                break;
            }
        }
        if (isPrime) {
            $('#isPrime').html("And guess what? " + num + " is also a prime number<br>");
        } else {
            $('#isPrime').hide();
        }
    }

})