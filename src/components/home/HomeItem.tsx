import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { HomeItem as HomeItemInterface } from '../../interfaces/home.interface';
import ChevronDoubleRightIcon from '../icons/ChevronDoubleRight';

function HomeItem({ modelName }: HomeItemInterface) {
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  return (
    <div
      className="flex justify-between bg-gradient-to-r from-blue-500 to-blue-400 w-full text-sm sm:text-base sm:w-2/4 mt-2 sm:m-2 p-2 sm:p-4 rounded text-white font-medium cursor-pointer hover:underline"
      onClick={() => navigate(`/${modelName}`)}
    >
      <p>{t(`${modelName}.plural_form`)}</p>
      <ChevronDoubleRightIcon />
    </div>
  );
}

export default HomeItem;
