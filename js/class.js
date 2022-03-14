// unnamed
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// 출력: "Rectangle"

// named
const Triangle = class Triangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  printTriangle() {
    console.log(Triangle.length);
  }

  printTriangle2() {
    // Triangle body의 local scope에 한해 유효함.
    console.log(Triangle2.length);
  }
};
console.log(Triangle.name);
// 출력: "Rectangle2"

const rectangle = new Rectangle(10, 10);
console.log(rectangle.height);

const triangle = new Triangle(10, 20);
console.log(triangle.width);

triangle.printTriangle();
triangle.printTriangle2();

// const triangle2 = new Triangle2(10, 20); // Error

/*
Mix-ins
*/

const calculatorMixin = (Base) =>
  class extends Base {
    calc() {
      throw new Error("calc() must be implement.");
    }
  };

const randomizerMixin = (Base) =>
  class extends Base {
    randomize() {
      // console.log("randomizerMixin");
    }
  };

class Foo {}

class Bar extends calculatorMixin(randomizerMixin(Foo)) {
  // calc() {
  //   console.log("bar calc");
  // }
}

const bar = new Bar();
bar.calc();
