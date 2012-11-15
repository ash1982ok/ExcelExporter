/*
*  This module represent the Excel WorkBook
*/

define(["ExcelConfig", "Worksheet"],
      function (ExcelConfig, Worksheet) {

    /* Header component for ExcelSheet   */

    // TODO: Need to extract configuration from the below string and thoese will come from 
    // ExcelConfig object

        "use strict";
        var Workbook = {

                Header : '<?xml version="1.0" encoding="UTF-8" ?>' +
                       '<?mso-application progid="Excel.Sheet"?>' +
                       '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:x2="http://schemas.microsoft.com/office/excel/2003/xml" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:html="http://www.w3.org/TR/REC-html40" xmlns:c="urn:schemas-microsoft-com:office:component:spreadsheet">' +
                       '<OfficeDocumentSettings xmlns="urn:schemas-microsoft-com:office:office">' +
                       '<Colors>' +
                       '<Color>' +
                       '<Index>3</Index>' +
                       '<RGB>#c0c0c0</RGB>' +
                       '</Color>' +
                       '<Color>' +
                       '<Index>4</Index>' +
                       '<RGB>#ff0000</RGB>' +
                       '</Color>' +
                       '</Colors>' +
                       '</OfficeDocumentSettings>' +
                       '<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel">' +
                       '<WindowHeight>9000</WindowHeight>' +
                       '<WindowWidth>13860</WindowWidth>' +
                       '<WindowTopX>240</WindowTopX>' +
                       '<WindowTopY>75</WindowTopY>' +
                       '<ProtectStructure>False</ProtectStructure>' +
                       '<ProtectWindows>False</ProtectWindows>' +
                       '</ExcelWorkbook>' +
                       '<Styles>' +
                       '<Style ss:ID="Default" ss:Name="Default">' +
                       '<Font ss:FontName="Verdana" />' +
                       '</Style>' +
                       '<Style ss:ID="Result" ss:Name="Result">' +
                       '<Font ss:Bold="1" ss:FontName="Verdana" ss:Italic="1" ss:Underline="Single" />' +
                       '</Style>' +
                       '<Style ss:ID="Result2" ss:Name="Result2">' +
                       '<Font ss:Bold="1" ss:FontName="Verdana" ss:Italic="1" ss:Underline="Single" />' +
                       '<NumberFormat ss:Format="Currency" />' +
                       '</Style>' +
                       '<Style ss:ID="Heading" ss:Name="Heading">' +
                       '<Font ss:Bold="1" ss:FontName="Verdana" ss:Italic="1" ss:Size="16" />' +
                       '</Style>' +
                       '<Style ss:ID="Heading1" ss:Name="Heading1">' +
                       '<Alignment ss:Rotate="90" />' +
                       '<Font ss:Bold="1" ss:FontName="Verdana" ss:Italic="1" ss:Size="16" />' +
                       '</Style>' +
                       '<Style ss:ID="co1" />' +
                       '<Style ss:ID="co2" />' +
                       '<Style ss:ID="ta1" />' +
                       '<Style ss:ID="ta2" />' +
                       '<Style ss:ID="ta3" />' +
                       '<Style ss:ID="ce1">' +
                       '<Font ss:Bold="1" ss:FontName="Verdana" ss:Size="10" />' +
                       '</Style>' +
                       '<Style ss:ID="ce2">' +
                       '<NumberFormat ss:Format="[$$-409]#,##0.00"/>' +
                       '</Style>  <Style ss:ID="backed">' +
                       '<Font ss:FontName="Verdana" x:Family="Swiss" ss:Bold="1"/>' +
                       '<Interior ss:Color="#969696" ss:Pattern="Solid"/>' +
                       '</Style>' +
                       '<Style ss:ID="ce3">' +
                       '<Font ss:Bold="1" ss:FontName="Verdana" ss:Size="15" />' +
                       '</Style>' +
                       '<Style ss:ID="ce4">' +
                       '<Font ss:Bold="1" ss:FontName="Verdana" ss:Color="red" ss:Size="10" />' +
                       '</Style>' +
                       '<Style ss:ID="ce5">' +
                       '<Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>' +
                       '<Font ss:Bold="1" ss:FontName="Verdana"/>' +
                       '<Interior ss:Color="#91C489" ss:Pattern="Solid"/>' +
                       '</Style>' +
                       '<Style ss:ID="ce6">' +
                       '<Font ss:Bold="1" ss:FontName="Verdana"/>' +
                       '<Interior ss:Color="#91C489" ss:Pattern="Solid"/>' +
                       '</Style>' +
                       '<Style ss:ID="ce7">' +
                       '<Font ss:FontName="Verdana" ss:Bold="1" ss:Color="#FFFFFF" ss:Size="10"/>' +
                       '<Interior ss:Color="#E52828" ss:Pattern="Solid"/>' +
                       '</Style>' +
                       '<Style ss:ID="ce15">' +
                       '<Font ss:FontName="Verdana"/>' +
                       '<NumberFormat ss:Format="Percent"/>' +
                       '</Style>' +
                       '<Style ss:ID="ce9">' +
                       '<Font ss:Bold="1" ss:FontName="Verdana"/>' +
                       '<Interior ss:Color="#91C489" ss:Pattern="Solid"/>' +
                       '<NumberFormat ss:Format="Fixed"/>' +
                       '</Style>' +
                       '<Style ss:ID="ce50">' +
                       '<Font ss:FontName="Verdana" ss:Bold="1" ss:Size="10"/>' +
                       '<Interior ss:Color="#959595" ss:Pattern="Solid"/>' +
                       '</Style>' +
                       '<Style ss:ID="ce8">' +
                       '<Font ss:FontName="Verdana"/>' +
                       '<Interior ss:Color="#91C489"/>' +
                       '<NumberFormat ss:Format="Fixed"/>' +
                       '</Style>' +
                       '<Style ss:ID="ce55">' +
                       '<Font ss:FontName="Verdana" ss:Bold="1"/>' +
                       '<Interior ss:Color="#91C489" ss:Pattern="Solid"/>' +
                       '<Alignment ss:Horizontal="Left" ss:Vertical="Top"/>' +
                       '</Style>' +
                       '</Styles>',

                Footer: '</Workbook>',

                render: function (Worksheet) {
                    return this.Header + Worksheet.render() + this.Footer;
                }
            };
        return Workbook.render(Worksheet);
    });