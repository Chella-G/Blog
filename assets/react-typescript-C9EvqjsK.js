var e=`## Introduction

React and TypeScript are an indispensable combination for building resilient, enterprise-grade web applications. TypeScript adds compile-time static type checking to JavaScript, eliminating entire classes of runtime errors while supercharging developer productivity.

## Setting Up Your Project

The fastest way to kick off a modern React and TypeScript application is with Vite:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
\`\`\`

## Core TypeScript Patterns in React

### Typing Component Props

Strongly typing props guarantees that components are consumed correctly and makes refactoring effortless.

\`\`\`tsx
interface UserCardProps {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  isActive?: boolean;
}

export const UserCard = ({ name, email, role, isActive = true }: UserCardProps) => {
  return (
    <div className={\`card \${isActive ? 'active' : 'inactive'}\`}>
      <h3>{name}</h3>
      <p>{email}</p>
      <span className="badge">{role}</span>
    </div>
  );
};
\`\`\`

### Typing Hooks and Events

TypeScript infers simple \`useState\` types automatically, but union types or complex objects benefit from explicit generics:

\`\`\`tsx
const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
\`\`\`

## Why Adopt TypeScript?

- **Confidence in Refactoring**: Rename props or modify data structures across thousands of files without fear.
- **Superior IDE Autocomplete**: Contextual suggestions, automatic imports, and inline documentation right in your editor.
- **Self-Documenting Codebase**: Type definitions function as continuously verified living documentation.
- **Fewer Regressions**: Catch \`undefined is not a function\` and missing property bugs during development before code ever touches production.

## Conclusion

TypeScript has become the industry standard for React development. By combining TypeScript's type system with React's component model, you gain a maintainable, robust architecture that scales effortlessly with your product.
`;export{e as default};