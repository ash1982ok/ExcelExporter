/*
*  This module represent the Excel WorkBook
*/
  
  /*
  
  EXCEL TEMPLATE FOR WORKBOOK
  ----------------------------------------

    '<?xml version="1.0" encoding="utf-8"?>',
    '<ss:Workbook xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" 
    xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:o="urn:schemas-microsoft-com:office:office">',
      '<o:DocumentProperties>',
        '<o:Title>{title}</o:Title>',
      '</o:DocumentProperties>',
      '<ss:ExcelWorkbook>',
        '<ss:WindowHeight>{windowHeight}</ss:WindowHeight>',
        '<ss:WindowWidth>{windowWidth}</ss:WindowWidth>',
        '<ss:ProtectStructure>{protectStructure}</ss:ProtectStructure>',
        '<ss:ProtectWindows>{protectWindows}</ss:ProtectWindows>',
      '</ss:ExcelWorkbook>',
      '<ss:Styles>',
        '{joinedCompiledStyles}',
      '</ss:Styles>',
        '{joinedWorksheets}',
    '</ss:Workbook>'    
  
  */


  define(["excelConfig"], function (){

  });