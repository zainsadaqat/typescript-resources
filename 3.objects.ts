// Regular Objects in JavaScript
const obj1 = {
  first_name: 'Zain',
  last_name: 'Sadaqat',
  age: 23,
  gender: false,
};

// Objects in TypeScript
const obj2: {
  first_name: string;
  last_name: string;
  age: number;
  gender: boolean;
} = {
  first_name: 'John',
  last_name: 'Doe',
  age: 10,
  gender: true,
};

obj2.first_name.length;

const obj3: {} = {};
