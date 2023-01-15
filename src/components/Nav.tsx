import { useNavigate } from 'react-router-dom';
import HomeIcon from './icons/Home';

function Nav() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex justify-center sm:justify-start">
        <div
          className="p-2 flex justify-center sm:justify-start items-center gap-x-2 text-blue-600 font-medium text-base pl-4 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <HomeIcon />
          <h1 className="hidden sm:inline">Dev Team</h1>
        </div>
      </nav>
    </>
  );
}

export default Nav;
