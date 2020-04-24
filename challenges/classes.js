// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakertwo {
constructor(attr){
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }
  volume() {
    return `${this.length *this.width * this.height}`;
  }
  area() {
    return `${2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`;
  }
}; 

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.area()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakertwo {
    constructor(attr){
    super(attr);
    
    }
       cubeVolume() {
           return Math.pow(`${this.length}`, 3);
       } 
       
       cubeSurfaceArea() {
           return (this.length * this.width) * 6;
       }

}

const acube = new CubeMaker ({
    height: 5,
    length: 3,
    width: 4

})


console.log(acube.cubeVolume());

console.log(acube.cubeSurfaceArea());