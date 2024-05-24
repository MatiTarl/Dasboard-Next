import { montserrat } from "./ui/fonts";
import "./ui/global.css"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className="py-1' flex justify-center items-center">
          hecho con amor por el mati (Footer)
        </footer>
      </body>
    </html>
  );
}
