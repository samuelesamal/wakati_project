import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Scripts from '@/components/Scripts';

export const metadata: Metadata = {
  title: 'Wakati Media — Full-Service Media Production House Uganda',
  description:
    'Wakati Media Limited is a full-service media production house in Uganda, crafting compelling audio-visual stories with precision, creativity, and excellence.',
  icons: {
    icon: '/assets/images/logos/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Original Wakati stylesheets served from /public */}
        <link rel="stylesheet" href="/assets/libs/owl.carousel/dist/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" />
        <link rel="stylesheet" href="/assets/css/styles.css" />
        {/* Iconify icons CDN */}
        <script
          src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js"
          async
        />
        {/* Lottie / Bodymovin CDN */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"
          async
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Scripts />
      </body>
    </html>
  );
}
