import { SetPaginationProps } from '../../interfaces/components/table.interface';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ChevronDownIcon from '../icons/ChevronDown';
import DropdownButton from '../dropdown/DropdownButton';
import DropdownItem from '../dropdown/DropdownItem';
import DropdownList from '../dropdown/DropdownList';
import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from '../../services/local-storage';

function SetPagination({
  initialPagination,
  modelName,
  setPagination,
}: SetPaginationProps) {
  const { t } = useTranslation('common');

  const localStorageKey = `${modelName}-pagination`;
  const paginationFromLocalStorage = getItemFromLocalStorage(localStorageKey);

  const [openDropdown, setOpenDropdown] = useState(false);
  const [currentPagination, setCurrentPagination] = useState<number>(
    paginationFromLocalStorage || initialPagination
  );

  useEffect(() => {
    closeDropdownOnClickOutside();
    closeDropdownOnPressEscapeKey();
  }, []);

  const closeDropdownOnClickOutside = () => {
    const body = document.body;
    const dropdown = document.getElementById('dropdown');

    if (body) {
      body.addEventListener(
        'click',
        (event: MouseEvent) => {
          if (
            event.target &&
            dropdown &&
            !dropdown.contains(event.target as any)
          ) {
            setOpenDropdown(false);
          }
        },
        false
      );
    }
  };

  const closeDropdownOnPressEscapeKey = () => {
    document.body.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(false);
      }
    });
  };

  const onClickToSetPagination = (pagination: number) => {
    setItemInLocalStorage(localStorageKey, pagination);
    setCurrentPagination(pagination);
    setPagination(pagination);
    setOpenDropdown(false);
  };

  return (
    <div className="relative inline-block text-left select-none" id="dropdown">
      <div>
        <DropdownButton onClick={() => setOpenDropdown(!openDropdown)}>
          {t(`${modelName}.per_page`)} <ChevronDownIcon />
        </DropdownButton>
      </div>
      {openDropdown && (
        <DropdownList>
          {[
            initialPagination,
            initialPagination * 2,
            initialPagination * 3,
            initialPagination * 4,
          ].map((pagination) => {
            return (
              <DropdownItem
                isActive={Boolean(pagination === currentPagination)}
                key={pagination}
                onClick={() => onClickToSetPagination(pagination)}
              >
                {`${pagination} ${t('per_page').toLowerCase()}`}
              </DropdownItem>
            );
          })}
        </DropdownList>
      )}
    </div>
  );
}

export default SetPagination;
