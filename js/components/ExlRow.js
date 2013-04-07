/*
*  This module represent a Row
*  The data for row will be provided and this module will return all the cells
*  populated with the data provided.
*  Cell.js exposed funtions will be utilized here
*/

define(['js/components/ExlCell'],
    function (cell) {
        "use strict";

        var rowIndex = 1,
			rowHeader = '<Row ss:Index="' + rowIndex + '">',
			rowFooter = '</Row>';
        return {
			render: function () {
				//console.log("Row:" + rowHeader + cell.render() + rowFooter);
				return rowHeader + cell.render() + rowFooter;
			}
        };
    }
	);