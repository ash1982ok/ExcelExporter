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

   sample comment
 */
require([
	"js/Workbook",
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
		//console.log(Excel.render());
	});
