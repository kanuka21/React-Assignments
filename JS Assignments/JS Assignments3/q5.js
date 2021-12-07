
var fullName = {
    firstName: "Shreya",
    lastName: "Doe",
  };
  
  document.write(
    "Before initializing data the values are " +
      fullName.firstName +
      " " +
      fullName.lastName
  );
  document.write("<br>");
  
  fullName.lastName = "Ghoshal";
  document.write(
    "After initializing data the values are " +
      fullName.firstName +
      " " +
      fullName.lastName
  );
  document.write("<br>");
  document.write(
    "Accessing the middle name Before assigning " + fullName.middleName
  );
  document.write("<br>");
  
  fullName.middleName = "Sam";
  
  document.write("Accessing the middle name After assigning " + fullName.middleName);
