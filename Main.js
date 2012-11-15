(function () {
	"use strict";
	require.config({
		paths: {
			formatter:"OOXMLFormatter"
		}
	});

	require([
		"formatter/Workbook",
		"formatter/Worksheet"],
		function (Workbook, Worksheet) {
			console.log("ExcelBody:" + Workbook.render());
		});
}());