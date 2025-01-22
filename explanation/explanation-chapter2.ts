// Chapter 2 css Styling
// How to add a global CSS file to your application.

// Two different ways of styling: Tailwind and CSS modules.

// How to conditionally add class names with the clsx utility package.

// 1 Global styles
// if you look inside the /app/ui folder, you'll see a file called global.css. You can use this file to add CSS rules to all the routes in your application - such as CSS reset rules, site-wide styles for HTML elements like links, and more.

// You can import global.css in any component in your application, but it's usually good practice to add it to your top-level component. In Next.js, this is the root layout (more on this later).

// Although the CSS styles are shared globally, each class is singularly applied to each element. This means if you add or delete an element, you don't have to worry about maintaining separate stylesheets, style collisions, or the size of your CSS bundle growing as your application scales.

// 2 css modules 
// CSS Modules allow you to scope CSS to a component by automatically creating unique class names, so you don't have to worry about style collisions as well.

// We'll continue using Tailwind in this course, but let's take a moment to see how you can achieve the same results from the quiz above using CSS modules.

// Inside /app/ui, create a new file called home.module.css and add the following CSS rules:

// /app/ui/home.module.css

// .shape {
//   height: 0;
//   width: 0;
//   border-bottom: 30px solid black;
//   border-left: 20px solid transparent;
//   border-right: 20px solid transparent;
// }

// 3 using the clsx library to toggle class names
// There may be cases where you may need to conditionally style an element based on state or some other condition.

// clsx is a library that lets you toggle class names easily. We recommend taking a look at documentation for more details, but here's the basic usage:

// Suppose that you want to create an InvoiceStatus component which accepts status. The status can be 'pending' or 'paid'.
// If it's 'paid', you want the color to be green. If it's 'pending', you want the color to be gray.
// You can use clsx to conditionally apply the classes, like this:

// import clsx from 'clsx';
 
// export default function InvoiceStatus({ status }: { status: string }) {
//   return (
//     <span
//       className={clsx(
//         'inline-flex items-center rounded-full px-2 py-1 text-sm',
//         {
//           'bg-gray-100 text-gray-500': status === 'pending',
//           'bg-green-500 text-white': status === 'paid',
//         },
//       )}
//     >
//     // ...
// )}
