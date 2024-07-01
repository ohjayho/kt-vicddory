export default function TestAnswer ({ children }: { children: string }) {
  return (
    <>
      <button
        className="border-2 border-[#F8A6A7] w-[305px] h-[84px] rounded-full px-10 mb-4 text-4 font-semibold"
      >
        {children}
      </button>
    </>
  )
}