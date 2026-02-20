import { openDB, DBSchema } from 'idb';

interface BookingDB extends DBSchema {
  bookings: {
    key: number;
    value: {
      fullName: string;
      email: string;
      phone: string;
      service: string;
      message: string;
      contactMethod: string;
      timestamp: Date;
    };
  };
}

const dbPromise = openDB<BookingDB>('solution-car-rental-db', 1, {
  upgrade(db) {
    db.createObjectStore('bookings', { keyPath: 'id', autoIncrement: true });
  },
});

export const addBooking = async (booking: Omit<BookingDB['bookings']['value'], 'timestamp'>) => {
  const db = await dbPromise;
  return db.add('bookings', {
    ...booking,
    timestamp: new Date(),
  });
};

export const getBookings = async () => {
  const db = await dbPromise;
  return db.getAll('bookings');
};
