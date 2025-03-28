# tsconfig.json guide
Here in this guide, Only most commonly used typescript configuration settings have been discussed.

## 1. Including and Excluding Files and Folders
After the nested curly brace and before the last curly brace:

### 1.1 Excluding Files
To exclude a file that you don't want to compile
```
"exclude": ["file-name-with-path.ts"]
```

We can also use wild cards to select multiple files
```
"exclude": ["*.dev.ts"]
```
Any file with the following pattern in any folder will be ignored
```
"exclude": ["**/*.dev.ts"]
```

### 1.2 Including Files and Folders
Include a file that you want to compile
```
"include": ["**/*.ts", "**/*.tsx"]
```

### 1.3 Including Files Only
```
"files": [file-name.ts]
```

## 2. Target
it's used to target the JavaScript version it will convert into
```
"target": "es5" // old version where we don't have let, const, etc
```
```
"target": "es6" // Where we do have access to let and const and other most commonly used features
```

## 3. Lib
lib option is used to specify what default objects and features typescript should know

## 4. AllowJS
It allows javascript files to be compiled by typescript `allowJ: true`

## 5. noImplicitAny
If set to true, it'll throw an error if anything contains a data type of any.

## 6. strictNullCheck
If set to true, it'll throw an error. if an element might be null. A value can be null

## 7. noUnusedLocals
If set to true, it'll throw an error if there's any unused local variable but won't throw any error for the global variable.

## 8. noUnusedParameters
If set to true, it'll throw an error if there's any unused parameter in a function.

## 9. noImplicitReturns
If set to true, it'll throw an error if there's any function implicitly returning somthing. Always try to set a return value of a function.
