import { LayoutProps } from '../interfaces/components/layout.interface';
import Nav from '../components/Nav';

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-100 min-h-screen p-2 pt-8 sm:p-8">
      <div className="max-w-screen-lg mx-auto">
        <Nav />
        {children}
      </div>
    </div>
  );
}

export default Layout;
