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

}