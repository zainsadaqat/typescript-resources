# Common Errors in TypeScript  

## Binding XYZ has implicitly any type

You're getting the "Binding XYZ has implicitly any type" error because TypeScript doesn't know what type XYZ is. Since you're using TypeScript, you need to explicitly define the type for XYZ.

### Example

```tsx
type ListItemProps = {
  text: string;
};

const ListItem: React.FC<ListItemProps> = ({ text }) => {
  return <li>{text}</li>;
};

export default ListItem;
```

- Define a Type → ListItemProps ensures that text must be a string.
- Use React.FC<> → Specifies that ListItem is a functional component with text as a prop.
- Type Safety → TypeScript will now enforce text to always be a string.


