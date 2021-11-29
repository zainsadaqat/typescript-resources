const add = (num1, num2) => {
  return num1 + num2;
};

// Never let typescript infer the return data type of func
const sub = (num1: number, num2: number): boolean => {
  return num2 > num1;
};

sub(1, 2);

// function that returns nothing
const voidFunction = (): void => {
  console.log('Void Function in TypeScript');
};
