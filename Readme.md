This is a javascript library which will output the data in Excel format using Open office xml format.

Contributors are welcome :)


A Big Thanks to :

1) Downloadify Project 

2) Ext.ux.Exporter Project

This will work only on server because of Flash Player Security Sandbox.


The end result of the library will be a long string having data provided wrapped on ooxml format.

Sample Office XML 
----------------------------
<?xml version="1.0"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xmlns:x2="http://schemas.microsoft.com/office/excel/2003/xml">

 <DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">
  <Title>Test</Title>
  <Subject>Test sub</Subject>
  <Author>Ashok Kumar</Author>
  <Manager>DD</Manager>
  <Company>xyz</Company>
  <Version>10.2625</Version>
 </DocumentProperties>

 <OfficeDocumentSettings xmlns="urn:schemas-microsoft-com:office:office">
  <Colors>
   <Color>
    <Index>3</Index>
    <RGB>#C0C0C0</RGB>
   </Color>
   <Color>
    <Index>4</Index>
    <RGB>#FF0000</RGB>
   </Color>
  </Colors>
 </OfficeDocumentSettings>

 <ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel">
  <WindowHeight>9000</WindowHeight>
  <WindowWidth>13860</WindowWidth>
  <WindowTopX>240</WindowTopX>
  <WindowTopY>75</WindowTopY>
  <ProtectStructure>False</ProtectStructure>
  <ProtectWindows>False</ProtectWindows>
 </ExcelWorkbook>

 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font/>
   <Interior/>
   <NumberFormat/>
   <Protection/>
  </Style>
  <Style ss:ID="s21" ss:Name="Default">
   <Font ss:FontName="Verdana"/>
  </Style>
 </Styles>

 <Worksheet ss:Name="Ashok">
  <Table ss:ExpandedColumnCount="256" ss:ExpandedRowCount="1" x:FullColumns="1"
   x:FullRows="1" ss:StyleID="s21">
   <Column ss:StyleID="s21" ss:Width="150" ss:Span="255"/>
  </Table>
  <WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel">
   <Selected/>
   <Panes>
    <Pane>
     <Number>3</Number>
     <ActiveRow>13</ActiveRow>
     <ActiveCol>3</ActiveCol>
    </Pane>
   </Panes>
   <ProtectObjects>False</ProtectObjects>
   <ProtectScenarios>False</ProtectScenarios>
  </WorksheetOptions>
  <x:WorksheetOptions/>
 </Worksheet>
</Workbook>
