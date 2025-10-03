console.log("Hello ji")

// oblect creation
let rectangle = {
    length : 1,
    breadth : 2,
    // draw : function(){
    //     console.log('draw');
    // }
    draw() {
        console.log("draw");
    }
};
console.log(rectangle.length);
console.log(rectangle.breadth);
rectangle.draw();

//factory method
function createRectangle(length, breadth) {
    return rectangle = {
        length,
        breadth,
        draw(){
            console.log("draw by factory method");
        }
    };
}

let obj = createRectangle(5,3);
console.log(obj.length);
console.log(obj.breadth);
obj.draw();

// constructor method
// function Rectangle(length, breadth) {
//     this.length = length,
//     this.breadthbreadth = breadth,
//     this.draw = function(){
//         console.log("draw by constructor method");
//     }
// }
// let rectangleObjectFactory = createRectangle(5,4);
// let rectangleObjectConstructor = new Rectangle();
// rectangleObjectFactory.draw();
// rectangleObjectConstructor.draw();

// console.log(rectangleObjectConstructor);
// rectangleObjectConstructor.color = "yellow";
// console.log(rectangleObjectConstructor);
// delete rectangleObjectConstructor.color;
// console.log(rectangleObjectConstructor);

let Rectangle = Function(
    'length',
    'breadth',
    `this.length = length,
    this.breadth = breadth,
    this.draw = function(){ 
        console.log("draw by constructor method");
    }`
)
let rectangleObject = new Rectangle(5,4);
console.log(rectangleObject.breadth);

let Circle = new Function(
    'radius',
    `this.radius = radius,
    this.draw = function(){
        console.log("draw the circle");
    }`
);
let circleObject = new Circle(5);
console.log(circleObject.radius);

let square = {
    side : 2,
    draw : function(){
        console.log("draw a square");
    }
}

function createSquare(){
    return square = {
        side : 2,
        draw : function(){
            console.log("draw square by factory mathod");
        }
    }
}

function Square(){
    this.side = 2,
    this.draw = function(){
        console.log("draw a square by constructor method");
    }
}

let primitive1 = 10;
let primitive2 = primitive1;
primitive1++;
console.log(primitive1);
console.log(primitive2);

let reference1 = {value : 10};
let reference2 = reference1;
reference1.value++;
console.log(reference1.value);
console.log(reference2.value);

// pass by value
let primitive3 = 100;
function incrementPrimitive(primitive){
    primitive++;
}
incrementPrimitive(primitive3);
console.log(primitive3);

let reference3 = {value : 100};
function incrementReference(reference){
    reference.value++;
}
incrementReference(reference3);
console.log(reference3);

// for-in loop
let rectangle1 = new Rectangle(10,5);
for(let key in rectangle1){
    console.log(key, rectangle1[key]);
}

for(let key of Object.keys(rectangle1)){
    console.log(key);
}

console.log('color' in rectangle1) ;

let src = {
    property1 : 'value1',
    property2 : 'value2',
    property3 : 'value3',
    property4 : 'value4'
};

for(let key in src){
    console.log(key, src[key]);
}

// iteration method
let dest = {};
for(let key in src){
    dest[key] = src[key];
}
for(let key in dest){
    console.log(key, dest[key]);
}

// assign method
let dest2 = Object.assign({}, src);
for(let key in dest2){
    console.log(key, dest2[key]);
}

// spread method
let dest3 = {...src};
for(let key in dest3){
    console.log(key, dest3[key]);
}

