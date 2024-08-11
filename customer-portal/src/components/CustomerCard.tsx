import React from 'react';
import { Customer } from '../types';

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onSelect: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, isSelected, onSelect }) => {
  return (
    <div
      className={`customer-card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
      style={{
        padding: '10px',
        border: isSelected ? '2px solid blue' : '1px solid gray',
        cursor: 'pointer',
        marginBottom: '10px',
      }}
    >
      <h4>{customer.name}</h4>
      <p>{customer.title}</p>
    </div>
  );
};

export default CustomerCard;
