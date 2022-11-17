import {splitIntoWords, sum} from "./01-hello";

let a:number;
let b:number;
let c:number;

beforeEach(()=>{
a=1;
b=2;
c=3;
})
test("all correct", ()=>{


    const result1 = sum(a,b);
    const result2 = sum(c,b);

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test("all split", ()=>{
    const result = splitIntoWords("ddd bbb ccc")
    expect(result).toBe(["d", "d", "d", " ", "b", "b", "b", " ", "c", "c", "c"])
})