import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Test Site - Professional Solutions',
  description: 'Welcome to our test website. Discover innovative solutions and services tailored to your needs.',
  keywords: ['test', 'solutions', 'services', 'professional'],
  authors: [{ name: 'Test Site Team' }],
  openGraph: {
    title: 'Test Site - Professional Solutions',
    description: 'Welcome to our test website. Discover innovative solutions and services tailored to your needs.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Site - Professional Solutions',
    description: 'Welcome to our test website. Discover innovative solutions and services tailored to your needs.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}