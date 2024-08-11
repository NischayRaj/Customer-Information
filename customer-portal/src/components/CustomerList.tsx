import React from 'react';

interface Customer {
  id: number;
  name: string;
  title: string;
}

interface CustomerListProps {
  customers: Customer[];
  selectedCustomerId: number;
  onSelectCustomer: (id: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomerId, onSelectCustomer }) => {
  return (
    <div>
      {customers.map((customer) => (
        <div
          key={customer.id}
          onClick={() => onSelectCustomer(customer.id)}
          style={{
            padding: '15px',
            cursor: 'pointer',
            backgroundColor: customer.id === selectedCustomerId ? '#f0f0f0' : 'white',
            borderBottom: '1px solid #ddd',
          }}
        >
          <h3>{customer.name}</h3>
          <p>{customer.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
