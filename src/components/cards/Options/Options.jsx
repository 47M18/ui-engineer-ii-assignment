import React from 'react';
import { Button } from 'react-bootstrap';

export default function Options({ togglePagination, paginationEnabled } = {}) {
  return (
    <Button onClick={togglePagination}>
      {paginationEnabled ? 'Disable' : 'Enable'} Pagination
    </Button>
  );
}
