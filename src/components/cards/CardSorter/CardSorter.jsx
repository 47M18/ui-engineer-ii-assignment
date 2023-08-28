import React from 'react';
import PropTypes from 'prop-types';

import './CardSorter.scss';

import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';

function SortOption(text) {
  return (
    <span className="sort-option">
      {text}
    </span>
  );
}

export default function CardSorter({ sortFn, resetFn, isSorted }) {
  return (
    <div className={`d-flex align-items-center card-sorter ${isSorted ? 'sorted' : 'not-sorted'}`}>
      <h4>Sort by:</h4>
      <ButtonGroup onClick={sortFn} className="button-group">
        <Dropdown>
          <Dropdown.Toggle title="Sort by heading">Heading</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item data-type="Heading" data-method="ascending">Ascending {SortOption('(A to Z)')}</Dropdown.Item>
            <Dropdown.Item data-type="Heading" data-method="descending">Descending {SortOption('(Z to A)')}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="ms-2">
          <Dropdown.Toggle title="Sort by subheading">Subheading</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item data-type="Subheading" data-method="ascending">Ascending {SortOption('(A to Z)')}</Dropdown.Item>
            <Dropdown.Item data-type="Subheading" data-method="descending">Descending {SortOption('(Z to A)')}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="ms-2">
          <Dropdown.Toggle title="Sort by price">Price</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item data-type="Price" data-method="ascending">Low to High {SortOption('($ to $$$)')}</Dropdown.Item>
            <Dropdown.Item data-type="Price" data-method="descending">High to Low {SortOption('($$$ to $)')}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>
      {isSorted && <Button variant="link" className="reset" onClick={resetFn}>Reset sort</Button>}
    </div>
  );
}

CardSorter.propTypes = {
  sortFn: PropTypes.func.isRequired,
  resetFn: PropTypes.func.isRequired,
  isSorted: PropTypes.bool.isRequired,
};
