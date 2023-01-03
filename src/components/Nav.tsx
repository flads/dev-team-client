import { useNavigate } from 'react-router-dom';
import HomeIcon from './icons/Home';

function Nav() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex justify-center sm:justify-start gap-x-2 items-center text-blue-600 font-medium text-base pl-4 cursor-pointer">
        <HomeIcon onClick={() => navigate('/')} />
        <h1 className="hidden sm:inline" onClick={() => navigate('/')}>
          Dev Team
        </h1>
      </nav>
    </>
  );
}

export default Nav;