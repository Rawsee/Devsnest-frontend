/*5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder */

// function Cylinder(height, diameter) {
//     this.height = height;
//     this.diameter = diameter;
//   }
  
//   Cylinder.prototype.Volume = function () {
//     var radius = this.diameter / 2;
//     return this.height * Math.PI * radius * radius;
//   };
  
//   var cyl = new Cylinder(10, 6);
//   console.log("The volume of cylinder is =", cyl.Volume().toFixed(4));
  

// const obj = {height: 10, diameter: 10}

function volume(height, diameter){
      return height * Math.PI * diameter/2 * diameter/2;

}

console.log(volume(7,7).toFixed(4))