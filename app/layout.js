import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata = {
  title: 'Artistly',
  description: 'Book Artists for your events',
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
