'use client';
import React, { createContext, useCallback, useContext, useState } from 'react';

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [nextItemId, setNextItemId] = useState(1);

  const addItem = (item) => {
    setSelectedItems((prevItems) => {
      if (prevItems.length < 2 && !prevItems.includes(item)) {
        return [...prevItems, item];
      }
      return prevItems;
    });
  };

  const removeItem = () => {
    setSelectedItems((prevItems) => prevItems.slice(0, -1));
  };

  const getNextItemId = useCallback(() => {
    const currentId = nextItemId;
    setNextItemId((prevId) => prevId + 1);
    return currentId;
  }, [nextItemId]);

  return (
    <CompareContext.Provider
      value={{ selectedItems, addItem, removeItem, getNextItemId }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => useContext(CompareContext);
