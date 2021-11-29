// TypeScript infer that it's an array of string values
const array1 = ['a', 'b', 'c', 'd', 'e'];
// array1.push(true); // Error

const array2: (string | boolean)[] = ['a', 'b', 'c', 'd', 'e'];

array2.push(true);
array2.push(true);
array2.push(false);
array2.push(false);
array2.push('f');

const booleanArray: boolean[] = [true, false, true, false];

// Array of Objects
const arrayOfObjects: { name: string; age: number; gender: false }[] = [
  { name: 'Zain', age: 23, gender: false },
];

const arrayOfObjects2: { first_name: string }[] = [{ first_name: '' }];
arrayOfObjects2.push({first_name: 'Zain Sadaqat'});

arrayOfObjects.push({ name: '', age: 0, gender: false });

// Arrays of Arrays
const arraysOfArrays: string[][] = [[''], ['']];
