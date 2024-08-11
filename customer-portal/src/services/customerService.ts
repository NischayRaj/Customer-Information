export interface Customer {
    id: number;
    name: string;
    title: string;
    address: string;
  }
  
  export const getCustomers = async (): Promise<Customer[]> => {
    return [
      {
        id: 1,
        name: 'John Doe',
        title: 'Chief Executive Officer (CEO)',
        address: '123 Elm Street, Springfield, USA',
      },
      {
        id: 2,
        name: 'Jane Smith',
        title: 'Chief Technology Officer (CTO)',
        address: '456 Oak Avenue, Springfield, USA',
      },
      {
        id: 3,
        name: 'Michael Johnson',
        title: 'Chief Financial Officer (CFO)',
        address: '789 Maple Road, Springfield, USA',
      },
      {
        id: 4,
        name: 'Emily Davis',
        title: 'Chief Operating Officer (COO)',
        address: '101 Pine Lane, Springfield, USA',
      },
      {
        id: 5,
        name: 'David Wilson',
        title: 'Vice President of Marketing',
        address: '202 Birch Drive, Springfield, USA',
      },
    ];
  };
  