'use client';

import React, { useCallback, useState } from 'react';

export default function ModalTestWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
        {children}
      </div>
    </>
  );
}
