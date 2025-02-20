import type { Metadata } from 'next';
import './globals.css';
import NavBar from './ui/nav-bar';

export const metadata: Metadata = {
  title: 'Handcrafted Haven',
  description: 'A innovative marketplace for connecting artisans and crafters.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
