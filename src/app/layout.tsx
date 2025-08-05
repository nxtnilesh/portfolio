import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Professional Developer',
  description: 'Full-stack developer specializing in modern web applications with React, Next.js, and TypeScript',
  keywords: ['portfolio', 'developer', 'react', 'nextjs', 'typescript', 'fullstack','nxtnilesh'],
  authors: [{ name: 'Nilesh Sharma' }],
  openGraph: {
    title: 'Portfolio',
    description: 'Full-stack developer specializing in modern web applications',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}