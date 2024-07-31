'use client';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function NewsGenerateError({
  isErrorVisible,
  setIsErrorVisible,
}: {
  isErrorVisible: boolean;
  setIsErrorVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true when component is mounted
    setIsClient(true);
  }, []);

  const handleErrorClick = () => {
    setIsErrorVisible(false);
  };

  if (!isClient) {
    return null;
  }

  return createPortal(
    <>
      {isErrorVisible ? (
        <div
          className="w-full h-full bg-black bg-opacity-30 z-20 fixed top-0 flex justify-center items-center"
          onClick={handleErrorClick}
        >
          <div
            className={`w-[400px] max-lg:w-[380px] h-[120px] bg-gradient-to-br from-[#FF0000] via-[#620000] to-[#FF0000] p-2 relative hover:shadow-[0_0_11px_3px_rgba(255,30,0,1)]`}
          >
            <div
              className={`w-full h-full bg-white flex justify-center items-center shadow-[inset_0px_6px_4px_rgba(0,0,0,0.25)]`}
            >
              <h1 className="flex items-center w-10/12 h-5/6 font-['DungGeunMo'] overflow-hidden overflow-ellipsis break-all ">
                경기가 없는 날짜입니다.
                <br />
                다른 날짜를 선택해 주세요!
              </h1>
            </div>
          </div>
        </div>
      ) : null}
    </>,
    document.body,
  );
}
