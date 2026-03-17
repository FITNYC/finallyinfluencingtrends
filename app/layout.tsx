import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Brand | Modern websites that feel premium',
  description: 'A clean Next.js brand website template that exports statically for GitHub Pages.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
