import React, { useState } from 'react'
import '../Styles/Menu.css'

const Menu = () => {

  //use state to store the names of food
  const [foodNames, setFoodNames] = useState([]);

  //a function to handle when a user clicks the order button on the menu page
  const handleOrderClick = (foodName) => {
    setFoodNames([...foodNames, foodName]);
    alert(`Your order has been placed: ${foodName}`);
  }

  return (
    <div className='menu-container'>
      <h2 className='menu-title'>OUR MENU</h2>

     <div> 
     <h2 className='promo'>Buy Breakfast + Lunch or Breakfast + Dinner and get 1 side free!! 💃💃</h2> 
     </div>

      {/* Using grid layout */}
      <div className='menu-parent'>
        {/* BREAKFAST */}

        <div className='menu-type'>
          <h3>Breakfast</h3>
          <div className="grid-container">
            <div className="grid-item">
              <img src='../Images/Menu/Akara and pap.jpg' alt='akara and pap'/>
              <p>£6.00</p>
              <p>Akara and pap</p>
              <button onClick={() => handleOrderClick('Akara and pap')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Moi-moi.jpg' alt='moi-moi'/>
              <p>£4.99</p>
              <p>Moi-Moi</p>
              <button onClick={() => handleOrderClick('Moi-Moi')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Indomie-and-Egg.jpg' alt='cholocate'/>
              <p>£3.50</p>
              <p>Indomie and Egg</p>
              <button onClick={() => handleOrderClick('Indomie and Egg')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Spaghetti.jpeg' alt='spaghetti'/>
              <p>£3.99</p>
              <p>Spaghetti</p>
              <button onClick={() => handleOrderClick('Spaghetti')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Akara and pap.jpg' alt='plantain and egg'/>
              <p>£4.59</p>
              <p>Fried Plantain & egg</p>
              <button onClick={() => handleOrderClick('Fried plantain and egg!')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Plantain Frittata.jpg' alt='plantain frittata'/>
              <p>£6.00</p>
              <p>Plantain Frittata</p>
              <button onClick={() => handleOrderClick('Plantain Frittata')}>Order</button>
            </div>
          </div>
        </div>

        {/* LUNCH */}
        <div className='menu-type'>
          <h3>Lunch</h3>
          <div className="grid-container">
            <div className="grid-item">
              <img src='../Images/Menu/Peppersoup.jpg' alt='peppersoup with white rice'/>
              <p>£10.59</p>
              <p>Peppersoup & rice</p>
              <button onClick={() => handleOrderClick('White rice and Peppersoup')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Afang soup.jpg' alt='afang soup and fufu'/>
              <p>£17.99</p>
              <p>Afang soup</p>
              <button onClick={() => handleOrderClick('Afang soup and Fufu')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/White rice and stew.jpeg' alt='White rice and red stew'/>
              <p>£11.00</p>
              <p>Rice and stew.</p>
              <button onClick={() => handleOrderClick('White rice and red stew.')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Oha soup and Eba.jpg' alt='Oha soup and Eba'/>
              <p>£17.99</p>
              <p>Oha soup</p>
              <button onClick={() => handleOrderClick('Oha soup and Eba')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Fried rice.jpg' alt='fried rice'/>
              <p>£8.00</p>
              <p>Fried Rice</p>
              <button onClick={() => handleOrderClick('Fried plantain and egg!')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Afang soup.jpg' alt='afang soup and fufu'/>
              <p>£17.99</p>
              <p>Afang soup</p>
              <button onClick={() => handleOrderClick('Afang soup and Fufu')}>Order</button>
            </div>
          </div>
        </div>

      </div>

      <div className='menu-parent'>
        {/* DINNER */}
        <div className='menu-type'>
          <h3>Dinner</h3>
          <div className="grid-container">
            <div className="grid-item">
              <img src='../Images/Menu/Peppersoup.jpg' alt='peppersoup with white rice'/>
              <p>£10.59</p>
              <p>Peppersoup & rice</p>
              <button onClick={() => handleOrderClick('White rice and Peppersoup')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Afang soup.jpg' alt='afang soup and fufu'/>
              <p>£17.99</p>
              <p>Afang soup</p>
              <button onClick={() => handleOrderClick('Afang soup and Fufu')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/White rice and stew.jpeg' alt='White rice and red stew'/>
              <p>£11.00</p>
              <p>Rice and stew.</p>
              <button onClick={() => handleOrderClick('White rice and red stew.')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Oha soup and Eba.jpg' alt='Oha soup and Eba'/>
              <p>£17.99</p>
              <p>Oha soup</p>
              <button onClick={() => handleOrderClick('Oha soup and Eba')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Fried rice.jpg' alt='fried rice'/>
              <p>£8.00</p>
              <p>Fried Rice</p>
              <button onClick={() => handleOrderClick('Fried plantain and egg!')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Afang soup.jpg' alt='afang soup and fufu'/>
              <p>£17.99</p>
              <p>Afang soup</p>
              <button onClick={() => handleOrderClick('Afang soup and Fufu')}>Order</button>
            </div>
          </div>
        </div>

        {/* SIDES */}
        <div className='menu-type'>
          <h3>Sides</h3>
          <div className="grid-container">
            <div className="grid-item">
              <img src='../Images/Menu/Meatpie.jpg' alt='Meatpie'/>
              <p>£2.99</p>
              <p>Meatpie</p>
              <button onClick={() => handleOrderClick('Meatpie')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Isi ewu.jpg' alt='Isiewu (Goat head meal)'/>
              <p>£10.99</p>
              <p>Isiewu</p>
              <button onClick={() => handleOrderClick('Afang soup and Fufu')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Abacha.jpeg' alt='Abacha'/>
              <p>£6.00</p>
              <p>Abacha.</p>
              <button onClick={() => handleOrderClick('Abacha')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Meatpie.jpg' alt='Meatpie'/>
              <p>£2.99</p>
              <p>Meatpie</p>
              <button onClick={() => handleOrderClick('Meatpie')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Isi ewu.jpg' alt='Isiewu (Goat head meal)'/>
              <p>£10.99</p>
              <p>Isiewu</p>
              <button onClick={() => handleOrderClick('Afang soup and Fufu')}>Order</button>
            </div>
            <div className="grid-item">
              <img src='../Images/Menu/Abacha.jpeg' alt='Abacha'/>
              <p>£6.00</p>
              <p>Abacha.</p>
              <button onClick={() => handleOrderClick('Abacha')}>Order</button>
            </div>
          </div>
        </div>
      </div> 

    </div>
  )
}

export default Menu