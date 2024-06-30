import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
        <h1>Learn Web Development</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minima veritatis nemo eum commodi autem nulla laborum totam optio delectus velit harum quam, consectetur, dolore cupiditate fuga ipsa veniam. Ab.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem harum quod nisi quaerat perferendis nihil architecto aperiam suscipit? Harum odit, in sequi pariatur  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt placeat consequuntur, dolorem, eum modi, facilis dicta quam esse laudantium tempora. Quam qui cupiditate culpa <a href="">Lorem ipsum dolor sit amet.</a> nulla, impedit assumenda! Sint, nesciunt?quos deserunt autem a asperiores voluptatibus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, quisquam. Perferendis consectetur suscipit eaque veritatis velit! Magni doloribus qui voluptate natus dolor. Illum soluta est corporis dolorum dicta ipsum exercitationem!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eveniet, amet perspiciatis neque voluptas, reprehenderit officiis fuga minima labore magnam ratione ut, suscipit dolor? Atque perferendis expedita natus modi quaerat? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus hic deleniti perspiciatis quibusdam repudiandae iste quasi, soluta possimus ut fugit. Sint pariatur veritatis quasi animi nam, iste nihil veniam provident.</p>
      </div>
    </>
  )
}

export default App
