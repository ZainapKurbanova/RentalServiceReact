import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SortOffersType } from '../../const';
import { SortOffer } from '../../types/sort';

type SortPlacesProps = {
  activeSorting: SortOffer;
  onChange: (newSorting: SortOffer) => void;
};

function SortOptions({ activeSorting, onChange }: SortPlacesProps) {
  const [isOpen, setIsOpen] = useState(false);
  const sortRef = useRef<HTMLFormElement>(null);

  const iconStyle = {
    transform: isOpen ? 'rotate(180deg)' : 'none'
  };

  const keyDownHandler = useCallback((evt: KeyboardEvent) => {
    if (evt.key === 'Escape' && isOpen) {
      evt.preventDefault();
      setIsOpen(false);
    }
  }, [isOpen]);

  // Закрытие при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyDownHandler]);

  const typeClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const sortingItemClickHandler = (type: SortOffer) => {
    onChange(type);
    setIsOpen(false);
  };

  return (
    <form 
      className="places__sorting" 
      action="#" 
      method="get"
      ref={sortRef}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span 
        className="places__sorting-type" 
        tabIndex={0} 
        onClick={typeClickHandler}
      >
        {activeSorting}
        <svg className="places__sorting-arrow" width={7} height={4} style={iconStyle}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {Object.values(SortOffersType).map((type) => (
          <li 
            key={type}
            className={`places__option ${type === activeSorting ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => sortingItemClickHandler(type as SortOffer)}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortOptions;