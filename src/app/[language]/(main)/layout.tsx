import Header from "@/components/layout/header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-grow px-4 py-8">{children}</main>
    </div>
  );
}
