// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports

import '@mantine/core/styles.css';

import { ColorSchemeScript, createTheme, MantineProvider, DEFAULT_THEME } from '@mantine/core';
import {HeaderMenu}   from './components/HeaderMenu';
import { FooterSimple } from './components/FooterSimple';

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={DEFAULT_THEME}>
          <header>
          <nav>
          <HeaderMenu />
          </nav>
          </header>


          {children}

          <footer>
            <FooterSimple />
          </footer>
          
        </MantineProvider>
      </body>
    </html>
  );
}
