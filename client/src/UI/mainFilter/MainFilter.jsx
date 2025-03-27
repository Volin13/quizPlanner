import React, { useRef, useState } from 'react';
import { Image, InputGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import searchIcon from '../../assets/icons/search.svg'
import clearIcon from '../../assets/icons/clear.svg';
import css from './MainFilter.module.css';
import { useLocation } from 'react-router-dom';
import {
  CATALOG_ROUTE,
} from '../../utils/constants';
const MainFilter = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [visibility, setVisibility] = useState(false);

  const mainFilter = useRef(null);


  const location = useLocation();
  const catalogLocation = location.pathname === CATALOG_ROUTE;
  const filterVisivility = catalogLocation
   

  // Відслідковую ширину невеликих екранів для застосування стилів пошукового інпута
  const smallSizeScreen = window.innerWidth < 560;
  const handleChange = event => {
    if (!visibility) {
      setVisibility(true);
    }
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    // if (!shopLocation) {
    //   navigate(SHOP_ROUTE);
    // }
    // if (inputValue) {
    //   device.setQuery(inputValue);
    //   device.setSelectedType({});
    //   device.setSelectedBrand({});
    // }
  };

  const hendleClearClick = ref => {
    setInputValue('');
    setVisibility(false);
    if (ref) return ref.current.focus(ref);
    else return;
  };

  return (
    <>
      {filterVisivility && (
        <div
          className={`${css.mainFilterWrapper} ${
            smallSizeScreen && isHovered
              ? css.mobileSearchInput
              : 'd-flex justify-content-end'
          }`}
        >
          <InputGroup
            hasValidation
            className={`${css.mainFilter} ${
              smallSizeScreen && !isHovered && css.searchBtnMobile
            }`}
            style={{
              width: isHovered ? '100%' : '',
              border: !isHovered && 'none',
            }}
          >

            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">Find</Tooltip>}
              container={document.body}
              flip={false}
              transition={false}
            >
              <button type="button" className="d-flex align-items-center">
                <InputGroup.Text
                  className={css.searchLable}
                  style={{
                    borderRadius: isHovered ? 'initial' : ' 50%',
                    padding: '12px',
                  }}
                  onMouseEnter={() => {
                    setIsHovered(true);
                  }}
                  onClick={handleClick}
                >
                  <Image className={css.searchIcon} src={searchIcon} />
                </InputGroup.Text>
              </button>
            </OverlayTrigger>

            <Form.Control
              ref={mainFilter}
              className={css.searchInput}
              style={{
                flex: isHovered ? '1 1 auto' : 'unset',
                opacity: isHovered ? '1' : '0',
                width: isHovered ? '' : '0px',
                padding: isHovered ? '' : '0px',
              }}
              type="text"
              name="search"
              value={inputValue}
              onBlur={() => {
                if (!inputValue) {
                  setIsHovered(false);
                }
              }}
              onChange={handleChange}
              placeholder={smallSizeScreen ? '' : 'Find quiz by title'}
            />
            {inputValue && (
              <button
                className={css.clearBtn}
                type="button"
                onClick={() => {
                  hendleClearClick(mainFilter);
                  setVisibility(false);
                }}
                style={{ opacity: visibility ? '1' : '0', borderRadius: '50%' }}
              >
                <Image className={css.searchIcon} src={clearIcon} />
              </button>
            )}
          </InputGroup>
        </div>
      )}
    </>
  );
};

export default MainFilter;