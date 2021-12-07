
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    
    get getArea() {
      return this.height * this.width;
    }
  }
  
  const rect1 = new Rectangle(20, 10);
  
  
  document.write(rect1.getArea);
