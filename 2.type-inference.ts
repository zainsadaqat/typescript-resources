// We're not utilizing TypeScript here
let amount;
amount = "Zain";
amount = 23;
amount = false;

// That's how we should utilize TypeScript
let price: number;
price  = 223.50;
// price = false; // Error
// price = "Zain"; // Error

// Multiple Types
let isAlive: boolean | string;
isAlive = true;
isAlive = "True";
// isAlive = 0; // Error