export const metadata = {
  title: 'Next SSR stack fixture',
  description: 'Read-only admission corpus example',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
