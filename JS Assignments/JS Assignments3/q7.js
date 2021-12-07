      
var str = '{"fname" : "Shilpi", "lname" : "Singh"}';

//var obj = eval(str);
var obj=JSON.parse(str);

obj.lname="Athira"
alert(obj.fname + " , " + obj.lname);
