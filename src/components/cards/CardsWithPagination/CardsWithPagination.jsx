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
      <div className="p-0 d-flex align-items-center">
        <div>
          <Button disabled={displayCount <= 1} onClick={removeOne}>-</Button>
          <span className="mx-2">Showing {displayCount} {displayCount === 1 ? 'item' : 'items'}</span>
          <Button disabled={displayCount >= 6} onClick={addOne}>+</Button>
        </div>
        <Pagination className="mb-0 ms-auto">
          <Pagination.Prev disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} />
          {
            Array(numberOfPages()).fill('').map((_, i) => (
              <Pagination.Item key={`page-${i + 1}`} active={currentPage === i + 1} onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </Pagination.Item>
            ))
          }
          <Pagination.Next disabled={currentPage === numberOfPages()} onClick={() => setCurrentPage(currentPage + 1)} />
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
