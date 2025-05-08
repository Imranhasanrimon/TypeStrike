# TypeStrike

This repository contains solutions to a set of beginner-friendly TypeScript problems designed to reinforce core concepts such as types, interfaces, generics, classes, enums, type guards, and asynchronous programming.

## Blog
#### What are some differences between __interfaces__ and __types__ in TypeScript?

| Interface                                  | Type                            |
|:-------------------------------------------|:--------------------------------|
| can only be used with objects              |can be used with different data types|
| can be merged by **extends** keyword       |can be extended by intersection (**&**)|
| unions/tuples cannot be declared           |unions/tuples can be declared|
| specific for objects and class contracts   |flexible for any data type|


**[Reference](https://www.typescriptlang.org/docs/handbook/2/objects.html)**


#### What is the use of the __keyof__ keyword in TypeScript? Provide an example.
The keyof keyword in TypeScript is used to extract the keys of a given object type as a union of string literal types. It helps build type-safe utilities, especially when we want to work dynamically with object properties while ensuring type safety.
#### Example
```typescript
 type Person = {
  name: string;
  age: number;
  email: string;
};

type PersonKeys = keyof Person; 
//Now PersonKeys: "name" | "age" | "email";

```
**[Reference](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#handbook-content)**
## TS Topics Covered
- TS Data Types
- Type Aliases
- Union and Intersection
- ernary, Optional Chaining
- Interface, Type vs Interface
- Generics
- Asynchronous TypeScript
- Type Guard
- OOP With Class


## Installation

Install TypeStrike project with npm

```bash
  git clone https://github.com/Imranhasanrimon/TypeStrike.git
  cd sales-rank
  npm install
```