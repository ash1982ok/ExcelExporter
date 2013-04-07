/*
*  This module represent a Cell
*/

define(['js/components/ExlData'],
    function (data) {
        "use strict";
        return {
            render: function () {
                var dataConfig = {
                  ssType:"String",
                  data:"Sample Text"
                };
                return '<Cell>' + data.render(dataConfig) + '</Cell>';
            }
        };
    }
    );