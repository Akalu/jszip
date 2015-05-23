var zip = new JSZip();

var base64zip = "UEsDBAoAAAAIAE2au0pV5kg/qQAAAO8AAAAYAAAAb2JqZWN0cy93aXRoSW5uZXIub2JqZWN0TY7NCsIwEIRfJbec7FYREUkjInjUi54lJqtG8lOTjejbW4pW9zJ8DDM7Yvn0jj0wZRtDw8dVzRkGHY0Nl4Yf9pvRnC+lWJdM0e9ON9TEukTIDb8StQuAHFVb5XNMGisdPUzqegb1FDySMooUl2w4cbboTJYfKM5tlUfJVDGWjseVjyV0qgX8PJHwXmxCIykVFDBg10CvFuW6pNRNfgnosa+G7yMB/9PlG1BLAwQKAAAACABNmrtKImSJtqsAAAD6AAAACwAAAHBhY2thZ2UueG1sRU/LCsIwEPyV3HIyGx+IyDZFBMGbBz1LTNc2aJLSpD7+3qKt3cuw82AYzF/uzh7URBt8xqdCckbehML6MuOn426y4rlieNDmpktindvHjFcp1WuAGHQt4jU0hoQJDmZSLkEuwFHShU6aKzYepndNcWTQkbt0xeppU7X3nhqh28Km83njQus7NAiD5x/y2pHatjEFt7N0LxC+zE+EsQL7TWq+FBJh+BD6JeoDUEsBAhQACgAAAAgATZq7SlXmSD+pAAAA7wAAABgAAAAAAAAAAAAAAAAAAAAAAG9iamVjdHMvd2l0aElubmVyLm9iamVjdFBLAQIUAAoAAAAIAE2au0oiZIm2qwAAAPoAAAALAAAAAAAAAAAAAAAAAN8AAABwYWNrYWdlLnhtbFBLBQYAAAAAAgACAH8AAACzAQAAAAA=";

var b = "UEsDBBQACAgIAJBZvEoAAAAAAAAAAAAAAAAEAAAAZGF0YbWST2sbMRDFv8qytDfX0YxWKym34MZQSP9A0lMpZjQaNVvWXrO7hoTS7165jguGOHYOvQjmad7o98R8+1UO91RelkTeecBQOdGgSSuta2sgFyBMBpg1sY9STkruluu7x7Vk19VaHmYtDcOT/ImWW/n9zQIULiCr+XL82MUmNRLLy9WmbSfl8oaCtLmPt1YZLvb9U263kwINUle3Y78z/J7sIW1tYoghSbDGe48oBo21FhgiBWUr1DaiwkPI2WYYu+Xn8FN4fIazWsBiwadQu7/2J9SdZdrtRx4FTuSSg8oljih1FJMYWceAmIJWytXgyCKnQ+BVN97O/wPpm9zfxhd/WDustKqNscrHlJRgomi0VwhgXUBDFjQnOAT+0nepaeUQ+WpF7ePY8FDM2m4Tiw+rUX70NDbdqvg6SH8qx3o3dLg4NWi6/vf80Vx5uZmAYq0RBAl8AvGgbJBcuUozU61E+TNyze5pHKUvrh/ymdFeF+ZZ91kJghKvFRsXxbsaHTJXFRjjo1I6sYa8R2jiGQnmXc/yFq+zVLwr5r3I6zIc8b+Q4vsfUEsHCJz5DOCmAQAAaAQAAFBLAQIUABQACAgIAJBZvEqc+QzgpgEAAGgEAAAEAAAAAAAAAAAAAAAAAAAAAABkYXRhUEsFBgAAAAABAAEAMgAAANgBAAAAAA==";

// CustomObject
var file1a = "<?xml version='1.0' encoding='UTF-8'?><CustomObject xmlns='http://soap.sforce.com/2006/04/metadata'>   <label>CUSTOM METADATA</label>    <pluralLabel>CUSTOM METADATAs</pluralLabel>    <visibility>Public</visibility> </CustomObject>";
var file1b = "<?xml version='1.0' encoding='UTF-8'?><CustomObject xmlns='http://soap.sforce.com/2006/04/metadata'>   <label>Changed label</label>    <pluralLabel>CUSTOM METADATAs</pluralLabel>    <visibility>Public</visibility> </CustomObject>";
var fileName1 = "objects/Simple1.object";

var package1 = "<?xml version='1.0' encoding='UTF-8'?> <Package xmlns='http://soap.sforce.com/2006/04/metadata'>    <types>        <members>Simple1</members>        <name>CustomObject</name>     </types>    <version>36.0</version></Package>";

// customField
var file2a = "<?xml version='1.0' encoding='UTF-8'?><CustomObject xmlns='http://soap.sforce.com/2006/04/metadata'>          <fields>     <fullName> audit__Amount__c</fullName> <required>true</required>  <type>Currency</type>    </fields> </CustomObject>";
var file2b = "<?xml version='1.0' encoding='UTF-8'?><CustomObject xmlns='http://soap.sforce.com/2006/04/metadata'>          <fields>     <fullName> audit__Amount__c</fullName> <required>true</required>  <type>Currency</type>    </fields> </CustomObject>";
var fileName2 = "objects/withInner.object";

var package2 = "<?xml version='1.0' encoding='UTF-8'?> <Package xmlns='http://soap.sforce.com/2006/04/metadata'>           <types>         <members>withInner.audit__Amount__c</members>        <name>CustomField</name>     </types>    <version>36.0</version></Package>";

const packName = "package.xml";

// list of files: withInner.audit__Amount__c



var zip = new JSZip();
zip.file(fileName1,file1a,{binary:true});
zip.file(packName,package1,{binary:true});
var base64 = zip.generate({type:"base64",compression:"DEFLATE"}); 
console.log(base64);

var zip1 = new JSZip();
zip1.file(fileName2,file2a,{binary:true});
zip1.file(packName,package2,{binary:true});
var base64 = zip1.generate({type:"base64",compression:"DEFLATE"}); 
console.log(base64);

var zip2 = new JSZip();
var list = [];
list.push('withInner.audit__Amount__c');
zip2.file('Data',JSON.stringify(list),{binary:true});
var base64 = zip2.generate({type:"base64",compression:"DEFLATE"}); 
console.log(base64);



var tempSrcZip = new JSZip(base64zip, {base64:true}); 
console.log("_______________");
for (var fileName in tempSrcZip.files){
    var source = tempSrcZip.file(fileName).asText();
    console.log(fileName +' : '+source); 
}

var tempSrcZip1 = new JSZip(b, {base64:true}); 
console.log("_______________");
for (var fileName in tempSrcZip1.files){
    var source = tempSrcZip1.file(fileName).asText();
    console.log(fileName +' : '+source); 
}

