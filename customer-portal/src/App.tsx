// src/App.tsx

import React, { useEffect, useState } from 'react';
// import CustomerList from './components/CustomerList';
// import CustomerDetails from './components/CustomerDetails';
import { Customer } from './types';
import { getCustomers } from './services/customerService.ts';
import './App.css';

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCustomers();
      setCustomers(data);
      setSelectedCustomerId(data[0]?.id || null);
    };

    fetchData();
  }, []);

  const selectedCustomer = customers.find(customer => customer.id === selectedCustomerId);

  return (
    <div className="app" style={{ display: 'flex' }}>
      
    </div>
  );
};

export default App;
