require([
	"OOXMLFormatter/Workbook",
	"thirdparty/jquery-1.8.2.min.js",
	"thirdparty/downloadify/js/swfobject.js",
	"thirdparty/downloadify/js/downloadify.min.js"
	],
	function (Excel,$,swfobject,downloadify) {
		"use strict";
		//$("#downloadExcel").downloadify( options );
		Downloadify.create('downloadify',{
					filename: function(){
						return "excel_test.xml";
					},
					data: function(){ 
						return Excel.render();
					},
					onComplete: function(){ alert('Your File Has Been Saved!'); },
					onCancel: function(){ alert('You have cancelled the saving of this file.'); },
					onError: function(){ alert('You must put something in the File Contents or there will be nothing to save!'); },
					swf: 'thirdparty/downloadify/media/downloadify.swf',
					downloadImage: 'thirdparty/downloadify/images/download.png',
					width: 100,
					height: 30,
					transparent: true,
					append: false
				});
		console.log(Excel.render());
	});
