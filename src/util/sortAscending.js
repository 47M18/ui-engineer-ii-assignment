const sortAscending = (currentItem, nextItem) => {
  if (currentItem < nextItem) return -1;
  if (currentItem > nextItem) return 1;
  return 0;
};

export default sortAscending;
