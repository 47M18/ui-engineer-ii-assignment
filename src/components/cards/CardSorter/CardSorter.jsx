import React from 'react';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import './CardSorter.scss';

function sortOption(text) {
  return (
    <span className="sort-option">
      {text}
    </span>
  );
}

export default function CardSorter({ sortFn, resetFn, isSorted }) {
  return (
    <div className="d-flex align-items-center card-sorter">
      <h4>Sort by:</h4>
      <ButtonGroup onClick={sortFn}>
        <Dropdown>
          <Dropdown.Toggle>Heading</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item data-type="Heading" data-method="ascending">Ascending {sortOption('(A to Z)')}</Dropdown.Item>
            <Dropdown.Item data-type="Heading" data-method="descending">Descending {sortOption('(Z to A)')}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="ms-2">
          <Dropdown.Toggle>Subheading</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item data-type="Subheading" data-method="ascending">Ascending {sortOption('(A to Z)')}</Dropdown.Item>
            <Dropdown.Item data-type="Subheading" data-method="descending">Descending {sortOption('(Z to A)')}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="ms-2">
          <Dropdown.Toggle>Price</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item data-type="Price" data-method="ascending">Low to High {sortOption('($ to $$$)')}</Dropdown.Item>
            <Dropdown.Item data-type="Price" data-method="descending">High to Low {sortOption('($$$ to $)')}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>
      {isSorted && <Button variant="link" className="reset" onClick={resetFn}>Reset sort</Button>}
    </div>
  );
}
