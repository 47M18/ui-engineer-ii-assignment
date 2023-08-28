import React, { useEffect, useState } from 'react';

import './Main.scss';

import { Spinner } from 'react-bootstrap';
import itemsFromFile from '../../../../public/UIE-InterviewProject.json';
import Card from '../Card/Card';
import CardSorter from '../CardSorter/CardSorter';
import sortAscending from '../../../util/sortAscending';
import sortDescending from '../../../util/sortDescending';
import PaginationToggle from '../PaginationToggle/PaginationToggle';
import CardsWithPagination from '../CardsWithPagination/CardsWithPagination';

export default function Main() {
  const [unsortedItems, setUnsortedItems] = useState([]);
  const [data, setData] = useState({ items: [], isSorted: false });
  const [enablePagination, setEnablePagination] = useState(true);
  const [displayCount, setDisplayCount] = useState(6);

  useEffect(() => {
    fetch('https://uie2-server.onrender.com/api/itemss')
      .then((res) => res.json())
      .then((items) => {
        // originalItems = [...items];
        setUnsortedItems(items);
        setData((current) => ({ ...current, items }));
      })
      .catch((err) => {
        console.error('An error occurred while fetching data from the API. Falling back to JSON file.', err);
        // originalItems = [...itemsFromFile];
        setUnsortedItems(itemsFromFile);
        setData((current) => ({ ...current, items: itemsFromFile }));
      });
  }, []);

  const handleSort = ({ target: { dataset } }) => {
    const { type, method } = dataset;

    if (!type || !method) return;

    setData((current) => ({
      items: [...current.items].sort((currentItem, nextItem) => {
        if (method === 'ascending') return sortAscending(currentItem[type], nextItem[type]);
        if (method === 'descending') return sortDescending(currentItem[type], nextItem[type]);

        return 0;
      }),
      isSorted: true,
    }));
  };

  const handleResetSort = () => setData({ items: unsortedItems, isSorted: false });

  if (!data.items.length) {
    return (
      <div className="d-flex justify-content-center flex-column align-items-center mt-4">
        <h4>Fetching data from API...</h4>
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  return (
    <>
      <header className="d-flex align-items-center container">
        <CardSorter isSorted={data.isSorted} sortFn={handleSort} resetFn={handleResetSort} />
        <PaginationToggle paginationEnabled={enablePagination} togglePagination={() => setEnablePagination(!enablePagination)} />
      </header>
      <div className="cards-container container">
        <div className="row">
          {
            enablePagination === false
              ? (
                data.items.map(({
                  Heading: heading,
                  Subheading: subHeading,
                  Price: price,
                  showBridge,
                }) => <Card key={heading} heading={heading} subHeading={subHeading} price={price} showBridge={showBridge} />)
              )
              : <CardsWithPagination items={data.items} displayCount={displayCount} addOne={() => setDisplayCount((count) => count + 1)} removeOne={() => setDisplayCount((count) => count - 1)} />
          }
        </div>
      </div>
    </>
  );
}
