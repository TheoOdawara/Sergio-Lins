import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import AccessibilityTools from "@/components/AccessibilityTools";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SkipToContent />
      <Header />
      <main id="main-content" role="main">
        {children}
      </main>
      <Footer />
      <AccessibilityTools />
    </>
  );
}
