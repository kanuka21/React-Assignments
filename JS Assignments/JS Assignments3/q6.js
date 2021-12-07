var str = '({"fname" : "Shilpi", "lname" : "Singh"})';

var obj = eval(str);
//testing if its working like object
obj.lname="Athira"
document.write(obj.fname + " " + obj.lname);
