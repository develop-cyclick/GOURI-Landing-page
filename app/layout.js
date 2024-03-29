import { Prompt } from "next/font/google";
import "./globals.css";


const inter = Prompt({
  subsets: ["latin"],
  display: "swap",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
