import React, { useState } from 'react';
import { Button, Pagination } from 'react-bootstrap';
import Card from '../Card/Card';

export default function CardsWithPagination({
  items,
  displayCount = 5,
  addOne,
  removeOne,
} = {}) {
  const [currentPage, setCurrentPage] = useState(1);

  const numberOfPages = () => {
    const basePages = items.length / displayCount;
    const leftOver = items.length % displayCount;
    let extraPages = 0;

    if ((displayCount / leftOver) >= 1 && (displayCount / leftOver) < Infinity) extraPages = 1;

    return Math.trunc(basePages) + (extraPages);
  };

  const itemsToShow = () => {
    if (currentPage === 1) return items.slice(0, displayCount);
    return items.slice((currentPage * displayCount) - displayCount, currentPage * displayCount);
  };

  return (
    <>
      <div>
        <span>Items in row: {displayCount}</span>
        <Button className="ms-3" disabled={displayCount <= 1} onClick={removeOne}>-</Button>
        <Button className="ms-1" disabled={displayCount >= 6} onClick={addOne}>+</Button>
        <Pagination>
          {
            Array(numberOfPages()).fill('').map((_, i) => (
              <Pagination.Item key={`page-${i + 1}`} active={currentPage === i + 1} onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </Pagination.Item>
            ))
          }
        </Pagination>
      </div>
      {
        itemsToShow().map(({
          Heading: heading,
          Subheading: subHeading,
          Price: price,
          showBridge,
        }) => <Card key={heading} heading={heading} subHeading={subHeading} price={price} showBridge={showBridge} />)
      }
    </>
  );
}
