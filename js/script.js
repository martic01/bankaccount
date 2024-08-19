window.onload = function () {
    $(".signto").click(function () {
        $(".signup").show()
        $(".login").hide()
        $(".continue").hide()
        $(".signupin").slideDown()
    })
    $(".loginto").click(function () {
        $(".login").show()
        $(".signup").hide()
    })
    $(".signupin").submit(function (refresh) {
        refresh.preventDefault()
        $(".continue").slideDown()
        $(".signupin").slideUp()
    })

    $(".def").click(function () {
        let control = $(".def").index(this);
        switch (control) {
            case 0:
                $(".hide1").fadeIn();
                $(".hide2").slideUp();
                $(".hide3").slideUp();
                break;
            case 1:
                $(".hide2").fadeIn();
                $(".hide1").slideUp();
                $(".hide3").slideUp();
                break;
            default:
                $(".hide3").fadeIn();
                $(".hide2").slideUp();
                $(".hide1").slideUp();
        }
    })
$(".cancel").click(function () {
    $(".back").slideUp()
})
    // $(".fund").click(function () {
    //     $(".hide1").slideDown()

    // })
    // $(".ment").click(function () {
    //     $(".hide2").slideDown()
    // })
    // $(".ment2").click(function () {
    //     $(".hide3").slideDown()
    // })

}
