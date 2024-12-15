import "./globals.css";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={styles.main}>
          <div className={styles.content}>{children}</div>
        </main>
      </body>
    </html>
  );
}
