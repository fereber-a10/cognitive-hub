

//PROPS
type MetricsProps = {
  title:string,
  valueNumber:string,
  percentage: string
}

export default function Overmetrics({title, valueNumber, percentage}:MetricsProps) {
  return (
    <div className="p-2 object-center">
      <p className='text-gray-400 p-3'>{title}</p>
      <h3 className='font-bold p-3'>{valueNumber}</h3>
      <h3 className='text-green-400 p-3'>{percentage}</h3>
    </div>
  )
}
