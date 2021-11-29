// Union Type
let unionType: string | boolean = 'Zain';
unionType = false;

let unionType2: null | undefined = null;

const array: (string | number | boolean | {})[] = [
  '',
  0,
  false,
  null,
  undefined,
  {},
];

// Literal types in combination with Union Types. You can do the same thing in a cleaner way using Enum
let rainbowColor: 'red' | 'orange' | 'blue' | 'yellow' | 'violet' | 'indigo';
rainbowColor = 'red';
rainbowColor = 'orange';
rainbowColor = 'blue';
rainbowColor = 'indigo';
rainbowColor = 'yellow';
rainbowColor = 'violet';

// Enum for fixed values
enum RainbowTypes {
  RED,
  ORANGE,
  YELLOW,
  BLUE,
  INDIGO,
  VIOLET,
}

let rainbowColors: RainbowTypes;
rainbowColors = RainbowTypes.BLUE;
rainbowColors = RainbowTypes.RED;

// ? Property ( Optional )
const optionalProperty: { first_name: string; age?: number; gender?: boolean } =
  {
    first_name: '',
    age: 0,
  };
