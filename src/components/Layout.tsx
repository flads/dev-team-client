import { LayoutProps } from '../interfaces/components/layout.interface';
import LoadingPage from './layout/LoadingPage';
import Nav from '../components/Nav';

function Layout({ loading, children }: LayoutProps) {
  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-screen p-2 pt-8 sm:p-8">
      <div className="max-w-screen-lg mx-auto">
        <Nav />
        {children}
      </div>
    </div>
  );
}

export default Layout;
