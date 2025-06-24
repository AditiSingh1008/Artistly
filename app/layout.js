'use client';

import './globals.css';
import { ThemeProvider } from 'next-themes';
import ConditionalHeader from '../components/ConditionalHeader';
import PageWrapper from '../components/PageWrapper';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-500 ease-in-out min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ConditionalHeader />
          <PageWrapper>
            {children}
          </PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
