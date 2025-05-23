import {should} from "chai";
// import { addTwo } from "../math/math.js";
// import { getTotalPrice, isAdult } from "../math/math.js";
// import {greet, process} from "../math/math.js";
// import { isAdult } from "../math/math.js";
import { process } from "../math/math.js";
import { canDrive } from "../math/math.js";
import { getUserById } from "../math/math.js";
should()

//testing
// describe("Testing math function", function(){
//     // it("should return 10 for addTwo(5,5)", function(){
//     //     const result = addTwo(5, 5);
//     //     result.should.equal(10)
//     // })
//     it("should return 105 for getTotalPrice(100, 5)", function(){
//         const result = getTotalPrice(100,5)
//         result.should.equal(105);
//     })
// })

//Statement coverage

// describe("Statement Coverage", function() {
//     it("should return Hi! Alice is greet(Alice)", function(){
//         const result = greet("Alice");
//         result.should.equal("Hi! Alice");
//     })

//     it("should return error for greet()", function(){
//         const result = greet();
//         result.should.equal("Hi! Alice");
//     })
// })

//Branch Coverage 

// describe("Branch Coverage", function(){
//     it("should return Adult for isAdult(20)", function(){
//         const result = isAdult("20");
//         result.should.equal("Adult");
//     })
//     it("should return Minor for isAdult(12)", function(){
//         const result = isAdult("12");
//         result.should.equal("Minor");
//     })
// })

// Path Coverage

// describe("Path coverage", function() {
//     it("should return both x and y are positive", function() {
//         const result = process(5, 5);
//         result.should.equal("both x and y are positive");
//     });

//     it("should return x is positive", function() {
//         const result = process(5, -1);
//         result.should.equal("x is positive");
//     });

//     it("should return x is not positive", function() {
//         const result = process(-3, 5);
//         result.should.equal("x is not positive");
//     });
// });

//Condition Coverage

// describe("Condition Coverage", function(){
//     it("should return allowed to drive", function(){
//         const result = canDrive(19,true);
//         result.should.equal("allowed to drive");
//     })
//     it("should return not allowed to drive", function(){
//         const result = canDrive(19,false);
//         result.should.equal("not allowed to drive");
//     })
//     it("should return not allowed to drive", function(){
//         const result = canDrive(15,false);
//         result.should.equal("not allowed to drive");
//     })
//     it("should return not allowed to drive", function(){
//         const result = canDrive(12,true);
//         result.should.equal("not allowed to drive");
//     })
// })

//Line Coverage

describe("Line Coverage", function() {
    it("should return user id found", function(){
        const result = getUserById("123")
        result.data.name.should.equal("Alice")
    })
    it("should return User id is required", function(){
        const result = getUserById()
        result.message.should.equal("User id is required")
    })
    it("should return Not found", function(){
        const result = getUserById("113")
        result.message.should.equal("Not found")
    })
})