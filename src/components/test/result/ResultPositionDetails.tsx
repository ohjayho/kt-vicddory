type TResultPositionDetailsProps ={
  description: string;
  tags: string;
}

export default function ResultPositionDetails ({ description, tags }: TResultPositionDetailsProps) {
  return (
    <>
      <div className="text-[#333333] text-2xl font-bold mt-12">{description}</div>
      <div className="text-[#BD1C1F] font-bold mt-2">{tags}</div>
    </>
  )
}