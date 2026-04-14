import type { Metadata } from "next";
import { Montserrat, Inter, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://manyaseema.ngo'),
  title: {
    default: "Manyaseema : Empowering rural Andhrapradesh",
    template: "%s | Manyaseema"
  },
  description: "Manyaseema Volunteer Organization (MVO) is a top-rated rural NGO focused on sustainable development, education, and health initiatives in Andhra Pradesh and across India.",
  keywords: ["NGO", "Rural Development", "Manyaseema", "MVO", "Volunteer India", "Sustainable Agriculture", "Rural Education", "Andhra NGO"],
  authors: [{ name: "Manyaseema Volunteer Organization" }],
  creator: "MVO Team",
  applicationName: "Manyaseema Volunteer Organization",
  appleWebApp: {
    title: "Manyaseema Volunteer Organization",
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://manyaseema.ngo',
    title: 'Manyaseema : Empowering rural Andhrapradesh',
    description: 'Empowering communities through sustainable grassroot initiatives in education, health, and solar energy.',
    siteName: 'Manyaseema Volunteer Organization',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Manyaseema Volunteer Organization Impact'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manyaseema : Empowering rural Andhrapradesh',
    description: 'Empowering communities through sustainable grassroot initiatives.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

import { MotionProvider } from "@/components/motion/MotionProvider";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Manyaseema Volunteer Organization",
    "alternateName": "MVO",
    "url": "https://manyaseema.ngo",
    "logo": "https://manyaseema.ngo/logo.png",
    "description": "A leading rural NGO in India focused on sustainable development, education, and health.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://facebook.com/manyaseema",
      "https://twitter.com/manyaseema",
      "https://instagram.com/manyaseema"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <MotionProvider>
          <Navbar />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
