// Sample blog post data - in a real app this would come from a database or CMS
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  category: string;
  slug: string;
  readTime: number; // Estimated reading time in minutes
}

const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn the basics of Next.js and how to create your first application.',
    content: `Next.js is a popular React framework that enables many useful features, including server-side rendering and static site generation. In this post, we'll cover the basics of getting started with Next.js and creating your first application.

## Installation

To create a new Next.js app, you can use the create-next-app command:

\`\`\`bash
npx create-next-app@latest my-app --typescript --eslint
cd my-app
npm run dev
\`\`\`

## Pages and Routing

In Next.js, each page is a React component exported from a file in the pages directory. The file name corresponds to the route. For example, pages/index.js maps to the / route.

## API Routes

Next.js allows you to create API endpoints by placing functions inside the pages/api directory. These functions run in a serverless environment.

This is just a brief overview. Next.js has many more features like automatic code splitting, built-in CSS support, and more.`,
    date: '2023-06-15',
    author: 'John Doe',
    tags: ['Next.js', 'React', 'Tutorial'],
    category: 'Development',
    slug: 'getting-started-with-nextjs',
    readTime: 5
  },
  {
    id: '2',
    title: 'Understanding TypeScript Generics',
    excerpt: 'A deep dive into TypeScript generics and how to use them effectively.',
    content: `Generics are a powerful feature in TypeScript that allow you to create reusable components that work with multiple types. They provide a way to create components that can work with a variety of types rather than a single one.

## Basic Syntax

The syntax for generics involves using angle brackets and a type variable:

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

The type variable T allows the identity function to capture the type provided by the caller, so nothing is lost in the return type.

## Generic Types

Generics can also be used in type definitions:

\`\`\`typescript
interface GenericIdentityFn {
  <T>(arg: T): T;
}
\`\`\`

## Generic Classes

Classes can also make use of generics:

\`\`\`typescript
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
\`\`\`

Generics help make your code more flexible and reusable while maintaining type safety.`,
    date: '2023-07-22',
    author: 'Jane Smith',
    tags: ['TypeScript', 'Generics', 'Tutorial'],
    category: 'Programming',
    slug: 'understanding-typescript-generics',
    readTime: 8
  },
  {
    id: '3',
    title: 'Optimizing React Performance',
    excerpt: 'Tips and tricks for improving the performance of your React applications.',
    content: `Performance is a critical aspect of any React application. Here are some key techniques to optimize your React app:

## 1. React.memo

React.memo is a higher-order component that can prevent unnecessary re-renders:

\`\`\`javascript
const MyComponent = React.memo(function MyComponent({ name }) {
  return <div>{name}</div>;
});
\`\`\`

## 2. useCallback and useMemo

useCallback memoizes functions while useMemo memoizes values:

\`\`\`javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## 3. Code Splitting

Use React.lazy and Suspense for code splitting:

\`\`\`javascript
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </React.Suspense>
    </div>
  );
}
\`\`\`

## 4. Virtualize Long Lists

For large lists, consider using libraries like react-window to only render visible items.

These techniques can significantly improve the performance of your React applications.`,
    date: '2023-08-10',
    author: 'Bob Johnson',
    tags: ['React', 'Performance', 'Optimization'],
    category: 'Development',
    slug: 'optimizing-react-performance',
    readTime: 6
  }
];

export async function getBlogPosts(): Promise<BlogPost[]> {
  // In a real application, this would fetch from an API or database
  return new Promise((resolve) => {
    setTimeout(() => resolve(sampleBlogPosts), 300); // Simulate network delay
  });
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug);
}

export async function getBlogPostById(id: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find(post => post.id === id);
}