import { PaginationProps } from '../../interfaces/components/table.interface';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ChevronLeftIcon from '../icons/ChevronLeft';
import ChevronRightIcon from '../icons/ChevronRight';

function Pagination({
  rowsCount,
  take,
  totalRowsCount,
  goToPage,
}: PaginationProps) {
  const { t } = useTranslation('common');

  const pageCount = Math.ceil(totalRowsCount / take);

  const [showPagination, setShowPagination] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setCurrentPage(1);

    setShowPagination(true);
  }, [take]);

  const onClickToGoToPage = (page: number) => {
    if (page && page <= pageCount) {
      setCurrentPage(page);

      goToPage(page);
    }
  };

  const ShowingOf = () => {
    const firstRowNumber = rowsCount ? (currentPage - 1) * take + 1 : 0;
    const lastRowNumber = (currentPage - 1) * take + rowsCount;

    return (
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        {`${t('showing')} `}
        <span className="font-semibold text-gray-900 dark:text-white">
          {`${firstRowNumber}-${lastRowNumber}`}
        </span>
        {` ${t('of').toLowerCase()} `}
        <span className="font-semibold text-gray-900 dark:text-white">
          {totalRowsCount}
        </span>
      </span>
    );
  };

  const PageButton = ({ goToPage, styles, children }: any) => {
    let className = `
      py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300
      hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
      dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
      cursor-pointer ${styles}`;

    if (currentPage === goToPage) {
      className += `
        z-10 text-blue-600 bg-blue-50 border-blue-300 hover:bg-blue-100
        hover:text-blue-700 dark:bg-gray-700 dark:text-white`;
    }

    return (
      <li>
        <button
          aria-current="page"
          className={className}
          value={goToPage}
          onClick={() => onClickToGoToPage(goToPage)}
        >
          {children}
        </button>
      </li>
    );
  };

  const pageButtons = () => {
    let pages: (number | string)[] = pageCount === 2 ? [1, 2] : [1];

    if (rowsCount !== totalRowsCount) {
      pages = [-1, 0, 1].map((position) => currentPage + position).sort();

      if (currentPage === 1) {
        pages.push(3);
      }

      if (currentPage === pageCount) {
        pages.unshift(pageCount - 2);
      }

      pages = pages.filter((page) => page && page <= pageCount);

      if (!pages.includes(pageCount)) {
        pages.push('...');
      }

      if (!pages.includes(1)) {
        pages.unshift('...');
      }
    }

    return pages.map((page, index) => {
      let goToPage = page;

      if (typeof page === 'string') {
        goToPage = index === 0 ? 1 : pageCount;
      }

      return (
        <PageButton key={index} goToPage={goToPage}>
          {page}
        </PageButton>
      );
    });
  };

  if (!showPagination) {
    return <div></div>;
  }

  return (
    <nav
      className="flex flex-col sm:flex-row items-center sm:justify-between py-4 px-2 select-none"
      aria-label="Table navigation"
    >
      <ShowingOf />

      <ul className="inline-flex items-center -space-x-px mt-2 sm:mt-0">
        <PageButton goToPage={currentPage - 1} styles="rounded-l-lg">
          <ChevronLeftIcon />
        </PageButton>

        {pageButtons()}

        <PageButton goToPage={currentPage + 1} styles="rounded-r-lg">
          <ChevronRightIcon />
        </PageButton>
      </ul>
    </nav>
  );
}

export default Pagination;
