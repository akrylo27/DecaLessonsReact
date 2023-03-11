import Header from '@/ui/components/global/Header';

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
