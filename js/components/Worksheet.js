/*
*  This module represent the Excel Worksheet
*/

define(
	function () {
		"use strict";
		return {
			Sheet: {
				Header: '"<ss:Worksheet ss:Name="Ashok"><Table ss:StyleID="ta1"><Column ss:AutoFitWidth="1" ss:Width="150" ss:StyleID="Default" /><Column ss:AutoFitWidth="1" ss:Width="150" ss:StyleID="Default" ss:Span="254" />',
				Footer: '</Table><x:WorksheetOptions /></ss:Worksheet>',
				render: function () {
					return this.Header + this.Footer;
				}
			}
		};
	}
);