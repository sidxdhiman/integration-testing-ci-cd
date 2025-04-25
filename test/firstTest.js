import {should} from "chai";
// import { addTwo } from "../math/math.js";
import { getTotalPrice } from "../math/math.js";
import {greet} from "../math/math.js";
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

describe("Statement Coverage", function() {
    it("should return Hi! Alice is greet(Alice)", function(){
        const result = greet("Alice");
        result.should.equal("Hi! Alice");
    })

    it("should return error for greet()", function(){
        const result = greet();
        result.should.equal("Hi! Alice");
    })
})
