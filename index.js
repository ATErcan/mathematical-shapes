// a. Write a JavaScript program to find the diagonal of a
// square where the length of each side is 9.

const diagonalOfSquare = (side) => {
  let hypotenuse = (side ** 2) * 2
  let diagonal = Math.sqrt(hypotenuse);
  return diagonal;
}

console.log(diagonalOfSquare(9));

// b. Write a JavaScript program to find the area of a 
// triangle where lengths of the three of its sides are 5, 
// 6 and 7.

const areaOfTriangle = (side1, side2, side3) => {
  // s = semi-peremeter
  let s = (side1 + side2 + side3)/2;
  let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))
  return area;
}

console.log(areaOfTriangle(5, 6, 7));

// c. Write a JavaScript program to find the circumference 
// and surface area of a circle whose radius is 4

const circumferenceOfCircle = (r) => {
  return 2 * Math.PI * r;
} 

const areaOfCircle = (r) => {
  return Math.PI * r ** 2;
}

console.log(circumferenceOfCircle(4));
console.log(areaOfCircle(4));