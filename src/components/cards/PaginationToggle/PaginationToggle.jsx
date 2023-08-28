import React from 'react';
import PropTypes from 'prop-types';
import './PaginationToggle.scss';
import { Form } from 'react-bootstrap';

export default function PaginationToggle({ togglePagination, paginationEnabled } = {}) {
  return (
    <Form.Check className="pagination-toggle" type="switch" id="pagination-toggle" label="Pagination" checked={paginationEnabled} onChange={togglePagination} />
  );
}

PaginationToggle.propTypes = {
  togglePagination: PropTypes.func.isRequired,
  paginationEnabled: PropTypes.bool.isRequired,
};
