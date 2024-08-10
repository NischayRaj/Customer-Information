// src/services/customerService.ts

export interface Customer {
    id: number;
    name: string;
    title: string;
    address: string;
    photos: string[];
  }
  
  export const getCustomers = async (): Promise<Customer[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=9');
    const photos = await response.json();
  
    const mockCustomers: Customer[] = [
      {
        id: 1,
        name: 'Customer 01',
        title: 'CEO',
        address: '123 Main St',
        photos: photos.map((photo: any) => photo.url),
      },
      {
        id: 2,
        name: 'Customer 02',
        title: 'CTO',
        address: '456 Oak St',
        photos: photos.map((photo: any) => photo.url),
      },
      {
        id: 3,
        name: 'Customer 03',
        title: 'CFO',
        address: '789 Pine St',
        photos: photos.map((photo: any) => photo.url),
      },
      {
        id: 4,
        name: 'Customer 04',
        title: 'COO',
        address: '101 Maple St',
        photos: photos.map((photo: any) => photo.url),
      },
    ];
  
    return mockCustomers;
  };
  