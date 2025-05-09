Q1--> What are some differences between interfaces and types in TypeScript?

Ans:--> Interface and Type aliases has few differences among them few are listed below

1. interfaces can be declared by the same name multiple times but types cannot be declared twice by same name so therefore whenever we declare a interface with same name twice it merges as to where types can be extended 

2. interfaces support OOP patterns you can implement them in class but in type aliases you have to use intersaction and union 


Q2:--> What is the use of the keyof keyword in TypeScript? Provide an example

Ans:--> keyof represents the key of an object in typescript keyof indicates the keys in a object what we do when we declare a type we write it as an object (key:value) pair so with keyof we take the key property and access it to make changes 
