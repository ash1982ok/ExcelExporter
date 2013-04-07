/*
*  This module represent a Data
*  
*  TBD: Might use some templating engine for string creation.
*/

define(
    function () {
        "use strict";
        return {
            render: function (dataConfig) {
				var tpl = '<Data ss:Type="' +
					dataConfig.ssType +
					'">' +
					dataConfig.data +
					'</Data>';
				//console.log(tpl);
				return tpl;
            }
        };
    }
);