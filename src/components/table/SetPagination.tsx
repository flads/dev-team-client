import { SetPaginationProps } from '../../interfaces/components/table.interface';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import ChevronDown from '../icons/ChevronDown';
import DropdownItem from '../DropdownItem';
import DropdownList from '../DropdownList';

function SetPagination({ modelName }: SetPaginationProps) {
  const { t } = useTranslation('common');

  const [openDropdown, setOpenDropdown] = useState(false);

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

  return (
    <div className="relative inline-block text-left" id="dropdown">
      <div>
        <Button onClick={() => setOpenDropdown(!openDropdown)}>
          {t(`${modelName}.per_page`)} <ChevronDown />
        </Button>
      </div>
      {openDropdown && (
        <DropdownList>
          <DropdownItem>10 por página</DropdownItem>
          <DropdownItem>50 por página</DropdownItem>
          <DropdownItem>100 por página</DropdownItem>
          <DropdownItem>200 por página</DropdownItem>
        </DropdownList>
      )}
    </div>
  );
}

export default SetPagination;
