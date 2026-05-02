'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type DemoContextType = {
  openDemoModal: () => void;
};

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const openDemoModal = () => {
    window.dispatchEvent(new CustomEvent('open-demo-modal'));
  };

  return (
    <DemoContext.Provider value={{ openDemoModal }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
}
