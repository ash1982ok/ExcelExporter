
/* Copyright 2013 Ashok Kumar

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

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