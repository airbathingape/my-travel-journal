import './Main.css'
import Card from './Card';
import data from './data'

function Main() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      {cards}
    </div>
  )
}

export default Main;
