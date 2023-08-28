import React, { useState } from 'react';

import data from '../../../../public/UIE-InterviewProject.json';
import Card from '../Card/Card';
import CardSorter from '../CardSorter/CardSorter';
import sortAscending from '../../../util/sortAscending';
import sortDescending from '../../../util/sortDescending';
import CardsWithPagination from '../CardsWithPagination/CardsWithPagination';
import Options from '../Options/Options';

export default function CardsContainer() {
  const [sortedData, setSortedData] = useState({ data, isSorted: false });
  const [enablePagination, setEnablePagination] = useState(true);
  const [displayCount, setDisplayCount] = useState(4);

  const handleSort = ({ target: { dataset } }) => {
    if (!dataset.type && !dataset.method) return;

    const { type, method } = dataset;

    setSortedData((current) => ({
      data: [...current.data].sort((currentItem, nextItem) => {
        if (method === 'ascending') return sortAscending(currentItem[type], nextItem[type]);
        if (method === 'descending') return sortDescending(currentItem[type], nextItem[type]);

        return 0;
      }),
      isSorted: true,
    }));
  };

  const handleResetSort = () => setSortedData({ data, isSorted: false });

  return (
    <div className="container mt-4">
      <CardSorter isSorted={sortedData.isSorted} sortFn={handleSort} resetFn={handleResetSort} />
      <Options paginationEnabled={enablePagination} togglePagination={() => setEnablePagination(!enablePagination)} />
      <div className="row">
        {
          enablePagination === false
            ? (
              sortedData.data.map(({
                Heading: heading,
                Subheading: subHeading,
                Price: price,
                showBridge,
              }) => <Card key={heading} heading={heading} subHeading={subHeading} price={price} showBridge={showBridge} />)
            )
            : <CardsWithPagination items={sortedData.data} displayCount={displayCount} addOne={() => setDisplayCount((count) => count + 1)} removeOne={() => setDisplayCount((count) => count - 1)} />
        }
      </div>
    </div>
  );
}
