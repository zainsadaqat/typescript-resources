const obj1 = {
  first_name: 'Zain',
  last_name: 'Sadaqat',
  age: 23,
  gender: false,
};

// Interface returns a type of Object
interface Person {
  first_name: string;
  last_name: string;
  age: number;
  gender: boolean;
}

const obj2: Person = {
  first_name: 'Zain',
  last_name: 'Sadaqat',
  age: 23,
  gender: false,
};

// Type can return obj, array of obj, string etc.
type PersonType = {
  first_name: string;
  last_name: string;
  age: number;
  gender: boolean;
}[];

const obj3: PersonType = [
  {
    first_name: 'Zain',
    last_name: 'Sadaqat',
    age: 23,
    gender: false,
  },
  {
    first_name: 'Zain',
    last_name: 'Sadaqat',
    age: 23,
    gender: false,
  },
];

type Name = string;
const myName: Name = 'zain';

type arrayOfObjects = {}[];
const aOO: arrayOfObjects = [{}];
