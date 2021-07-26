import Overmetrics from "./Overmetrics"
//PROPS

type CardProps = {
  name: string,
}


export default function Sells( {name}:CardProps) {
  return (
    <>
      <div className="container flex flex-col rounded bg-bluebg border-rounded w-96 h-72 text-primary m-7 ">
      <h3 className='p-5'>{name}</h3>
        <div className='flex flex-row'>
          <Overmetrics title='YTD 2021' valueNumber='5,636' percentage='+9%'/>
          <Overmetrics title='ABRIL 2021' valueNumber='1,240' percentage='+1%'/>
          <Overmetrics title='DDI ABRIL' valueNumber='37' percentage='+obj. 30-35'/>
        </div>

        <div className="bg-background text-primary p-2 flex flex-wrap content-end">
          <h3>684</h3>
          <img src="" alt="" />
        </div>
      </div>
    </>
  )
}
