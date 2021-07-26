import Sells from '../components/overview/Sells'


export default function Overview() {
  return (
    <>
      <div className="header">
      <h1>Overview</h1>

      </div>

      <div className="flex flex-row">
        <Sells name='Tendencias Sell Out'/>
        <Sells name='Total Sell In'/>
      </div>

      <div className="performance-overview">

      </div>
    </>
  )
}

