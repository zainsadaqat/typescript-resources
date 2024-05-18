# tsconfig.json guide

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
