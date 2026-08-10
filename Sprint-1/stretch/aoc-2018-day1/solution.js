import {readFileSync} from "fs";

let lines = readFileSync("input.txt").toString().split("\n");
let frequency = 0;

for (const i of lines) {
    frequency += Number(i);
}

console.log("the resulting frequency is "+frequency);