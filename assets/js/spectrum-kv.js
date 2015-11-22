/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2015
 * @version 1.0.1
 * 
 * Additional jQuery plugin enhancements for ColorInput Spectrum plugin by Krajee.
 * 
 * Author: Kartik Visweswaran
 * Copyright: 2015, Kartik Visweswaran, Krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */
(function ($) {
    "use strict";
    $(document).on('ready', function () {
        $('.spectrum-group').on('change', 'input', function (e, color) {
            var $el = $(this), $group = $el.closest('.spectrum-group'), val = $el.val();
            if ($el.is('.spectrum-source')) {
                $group.find('.spectrum-input').val(color.toString());
                val = color.toHslString();
            }
            $group.find('.spectrum-source').spectrum('set', val);
        });
    });
})(window.jQuery);