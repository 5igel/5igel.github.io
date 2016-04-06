/**
 * Created by admin on 30.03.2016.
 */
const $ = require('jquery');

class AnonHashForm {
    constructor () {
        var $result = $('.result'),
            $form = $('.md5-form'),
            $input = $('#md5');

        this.setRandomAutocomplete($input);
        $form.on('submit', (e) => {
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
            this.setRandomAutocomplete($input);
        });
    }

    /**
     * Set random seed to autocomplete attribute
     * @param {jQuery} $el
     */
    setRandomAutocomplete($el) {
        $el.attr('autocomplete', Math.random() * (1000 - 9999999) + 9999999);
    }
}

module.exports = AnonHashForm;
