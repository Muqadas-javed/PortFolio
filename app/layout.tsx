import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salman Ahmed | AWS Cloud Engineer & DevOps Engineer",
  description:
    "Portfolio of Salman Ahmed — AWS Cloud and DevOps Engineer specializing in Kubernetes, Terraform, CI/CD automation, and cloud-native infrastructure based in Islamabad, Pakistan.",
  keywords: [
    "AWS Cloud Engineer",
    "DevOps Engineer",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "EKS",
    "Serverless",
    "Islamabad",
    "Pakistan",
    "Cloud Infrastructure",
    "Infrastructure as Code",
  ],
  authors: [{ name: "Salman Ahmed" }],
  openGraph: {
    title: "Salman Ahmed | AWS Cloud Engineer & DevOps Engineer",
    description:
      "AWS Cloud and DevOps Engineer with expertise in Kubernetes, Terraform, CI/CD automation, and cloud-native infrastructure.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salman Ahmed | AWS Cloud Engineer & DevOps Engineer",
    description:
      "AWS Cloud and DevOps Engineer with expertise in Kubernetes, Terraform, CI/CD automation, and cloud-native infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
