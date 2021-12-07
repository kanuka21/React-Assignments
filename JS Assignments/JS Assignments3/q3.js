
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    get getArea() {
      return this.height * this.width;
    }
  }
  
  const rect1 = new Rectangle(4, 5);
  
  
  rect1.hieght = 50;
  
  
  document.write(rect1.getArea);
