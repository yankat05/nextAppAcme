// chapter 5; Navigating between pages

// let's add some links to allow users to navigate between the dashboard routes.

// n this chapter...

// Here are the topics we’ll cover

// How to use the next/link component.

// How to show an active link with the usePathname() hook.

// How navigation works in Next.js.

// To link between pages, you'd traditionally use the <a> HTML element. At the moment, the sidebar links use <a> elements, but notice what happens when you navigate between the home, invoices, and customers pages on your browser.

// Did you see it?

// There's a full page refresh on each page navigation!

// The <Link> component
// In Next.js, you can use the <Link /> Component to link between pages in your application. <Link> allows you to do client-side navigation with JavaScript.

// To use the <Link /> component, open /app/ui/dashboard/nav-links.tsx, and import the Link component from next/link. Then, replace the <a> tag with <Link>:

// /app/ui/dashboard/nav-links.tsx

// import {
//   UserGroupIcon,
//   HomeIcon,
//   DocumentDuplicateIcon,
// } from '@heroicons/react/24/outline';
// import Link from 'next/link';
 
// // ...
 
// export default function NavLinks() {
//   return (
//     <>
//       {links.map((link) => {
//         const LinkIcon = link.icon;
//         return (
//           <Link
//             key={link.name}
//             href={link.href}
//             className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
//           >
//             <LinkIcon className="w-6" />
//             <p className="hidden md:block">{link.name}</p>
//           </Link>
//         );
//       })}
//     </>
//   );
// }

// Save your changes and check to see if it works in your localhost. You should now be able to navigate between the pages without seeing a full refresh. Although parts of your application are rendered on the server, there's no full page refresh, making it feel like a native web app. Why is that?

// Automatic code-sliting and prefetching

// To improve the navigation experience, Next.js automatically code splits your application by route segments. This is different from a traditional React SPA, where the browser loads all your application code on the initial page load.

// Splitting code by routes means that pages become isolated. If a certain page throws an error, the rest of the application will still work. This is also less code for the browser to parse, which makes your application faster.

// Furthermore, in production, whenever <Link> components appear in the browser's viewport, Next.js automatically prefetches the code for the linked route in the background. By the time the user clicks the link, the code for the destination page will already be loaded in the background, and this is what makes the page transition near-instant!

// Pattern: Showing active links

// A common UI pattern is to show an active link to indicate to the user what page they are currently on. To do this, you need to get the user's current path from the URL. Next.js provides a hook called usePathname() that you can use to check the path and implement this pattern.

// Since usePathname() is a React hook, you'll need to turn nav-links.tsx into a Client Component. Add React's "use client" directive to the top of the file, then import usePathname() from next/navigation:


// You can use the clsx library introduced in the chapter on CSS styling to conditionally apply class names when the link is active. When link.href matches the pathname, the link should be displayed with blue text and a light blue background.




