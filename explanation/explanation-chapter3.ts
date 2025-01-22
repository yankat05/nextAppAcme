// chapter 3 optimizing fonts and images

// In this chapter...

// Here are the topics we’ll cover

// How to add custom fonts with next/font.

// How to add images with next/image.

// How fonts and images are optimized in Next.js.

// Why optimize fonts?
// Fonts play a significant role in the design of a website, but using custom fonts in your project can affect performance if the font files need to be fetched and loaded.

// Cumulative Layout Shift is a metric used by Google to evaluate the performance and user experience of a website. With fonts, layout shift happens when the browser initially renders text in a fallback or system font and then swaps it out for a custom font once it has loaded. This swap can cause the text size, spacing, or layout to change, shifting elements around it.

// Next.js automatically optimizes fonts in the application when you use the next/font module. It downloads font files at build time and hosts them with your other static assets. This means when a user visits your application, there are no additional network requests for fonts which would impact performance.

// Adding a primary font
// Let's add a custom Google font to your application to see how this works.

// In your /app/ui folder, create a new file called fonts.ts. You'll use this file to keep the fonts that will be used throughout your application.

// Import the Inter font from the next/font/google module - this will be your primary font. Then, specify what subset you'd like to load. In this case, 'latin':

// import { Inter } from 'next/font/google';
 
// export const inter = Inter({ subsets: ['latin'] });
// Finally, add the font to the <body> element in /app/layout.tsx:

// /app/layout.tsx

// import '@/app/ui/global.css';
// import { inter } from '@/app/ui/fonts';
 
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} antialiased`}>{children}</body>
//     </html>
//   );
// }

// By adding Inter to the <body> element, the font will be applied throughout your application. Here, you're also adding the Tailwind antialiased class which smooths out the font. It's not necessary to use this class, but it adds a nice touch.

// Navigate to your browser, open dev tools and select the body element. You should see Inter and Inter_Fallback are now applied under styles.

// Practice: Adding a secondary font
// You can also add fonts to specific elements of your application.

// app/ui/fonts.ts

// import { Inter, Lusitana } from 'next/font/google';
 
// export const inter = Inter({ subsets: ['latin'] });
 
// export const lusitana = Lusitana({
//   weight: ['400', '700'],
//   subsets: ['latin'],
// });

// import { lusitana } from '@/app/ui/fonts';

// why optimize images?
// Next.js can serve static assets, like images, under the top-level /public folder. Files inside /public can be referenced in your application.

// However, this means you have to manually:

// Ensure your image is responsive on different screen sizes.
// Specify image sizes for different devices.
// Prevent layout shift as the images load.
// Lazy load images that are outside the user's viewport.

// the <Image> component

// The <Image> Component is an extension of the HTML <img> tag, and comes with automatic image optimization, such as:

// Preventing layout shift automatically when images are loading.
// Resizing images to avoid shipping large images to devices with a smaller viewport.
// Lazy loading images by default (images load as they enter the viewport).
// Serving images in modern formats, like WebP and AVIF, when the browser supports it.

// Let's use the <Image> component. If you look inside the /public folder, you'll see there are two images: hero-desktop.png and hero-mobile.png. These two images are completely different, and they'll be shown depending if the user's device is a desktop or mobile

// Here, you're setting the width to 1000 and height to 760 pixels. It's good practice to set the width and height of your images to avoid layout shift, these should be an aspect ratio identical to the source image. These values are not the size the image is rendered, but instead the size of the actual image file used to understand the aspect ratio.

// You'll also notice the class hidden to remove the image from the DOM on mobile screens, and md:block to show the image on desktop screens.

// This is what your home page should look like now: