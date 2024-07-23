'use client';

import React, { useCallback, useState } from "react";

export default function ModalWrapper ({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  if(!isModalOpen) return null;

  return (
    <>
      <div onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      {React.cloneElement(children as React.ReactElement, { closeModal })}
    </div>
    </>
  )
}