/*
   Copyright 2013 Ashok Kumar

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*  This module represent the Excel Worksheet
*/

define(['js/components/ExlRow'],
	function (row) {
		"use strict";
		return {
			Header: '"<ss:Worksheet ss:Name="Ashok"><Table ss:StyleID="ta1"><Column ss:AutoFitWidth="1" ss:Width="150" ss:StyleID="Default" /><Column ss:AutoFitWidth="1" ss:Width="150" ss:StyleID="Default" ss:Span="254" />',
			Footer: '</Table><x:WorksheetOptions /></ss:Worksheet>',
			render: function () {
				return this.Header + row.render() + this.Footer;
			}
		};
	}
	);