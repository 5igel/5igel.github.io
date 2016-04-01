/**
 * Created by admin on 30.03.2016.
 */
/**
 * Set random seed to autocomplete attribute
 * @param {jQuery} $el
 */
function setRandomAutocomplete($el) {
    $el.attr('autocomplete', Math.random() * (1000 - 9999999) + 9999999);
}

$(function () {
    var $result = $('.result'),
        $form = $('.md5-form'),
        $input = $('#md5');

    setRandomAutocomplete($input);
    $form.on('submit', function (e) {
        e.preventDefault();
        var result = md5($input.val());
        $result
            .text(result)
            .attr('data-clipboard-text', result);
            //.data('test', '123');

        //$result.attr('data-pis', 'data');

        var clipboard = new Clipboard('.result');
        clipboard.on('success', function(e) {
            console.log(e);
        });
        clipboard.on('error', function(e) {
            console.log(e);
        });
        setRandomAutocomplete($input);
    });


});
