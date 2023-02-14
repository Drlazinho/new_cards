import React from 'react';

const Cell = ({ className, cellData, column }) => {
  const { dataKey } = column;
  switch (dataKey) {
    case 'diasEstoquePassado':
      return <div className={className}>{cellData}</div>;
    case 'sugestaoEInvoice':
      return <div className={className}>{cellData}</div>;
    case 'sugestaoEinvoiceMinushim':
      return <div className={className}>{cellData}</div>;
    default:
      return <div className={className}>{cellData}</div>;
  }
};

export default {
  TableCell: Cell,
};
