import localFont from "next/font/local";
import "./globals.css";
import SideBar from "@/components/Sidebar";
import TopBar from "@/components/Topbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Insurance Dashboard",
  description: "Created as part of SE200's capstone project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-slate-100 h-screen">
          <SideBar />
          <div className="ml-14">
            <TopBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
