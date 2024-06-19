import React, { useState, useEffect } from 'react';
import '../css/s.css';
import '../css/menu.css';
import '../css/contact.css'; 
import m1 from '../images/meat1.jpg';
import m2 from '../images/meat2.jpg';
import m3 from '../images/meat3.jpg';
import s1 from '../images/salad1.jpg';
import s2 from '../images/salad2.jpg';
import s3 from '../images/salad3.jpg';
import d1 from '../images/drink1.jpg';
import d2 from '../images/drink2.jpg';
import d3 from '../images/drink3.jpg';



function Menu() {

   


  const [filter, setFilter] = useState('all'); // State to manage the current filter

  // Filtered items based on the current filter state
  const items = [
    { category: 'meat', image: m1, name: 'Pork Steaks', price: '180.00' },
    { category: 'meat', image: m2, name: 'Bon porkt', price: '180.00' },
    { category: 'meat', image: m3, name: 'Steak Ala King', price: '180.00' },
    { category: 'salad', image: s1, name: 'Spinach Salad', price: '100.00' },
    { category: 'salad', image: s2, name: 'Cornier', price: '100.00' },
    { category: 'salad', image: s3, name: 'Coachella', price: '100.00' },
    { category: 'drinks', image: d1, name: 'Margarita', price: '450.00' },
    { category: 'drinks', image: d2, name: 'Mojito', price: '450.00' },
    { category: 'drinks', image: d3, name: 'Fantasy', price: '450.00' }
  ];

  useEffect(() => {
    filterSelection(filter);
  }, [filter]);

  function filterSelection(category) {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
      if (category === 'all' || column.classList.contains(category)) {
        column.style.display = 'block';
      } else {
        column.style.display = 'none';
      }
    });
  }

  function handleFilterClick(category) {
    setFilter(category);

    // Toggle active class on buttons
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
      btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`.btn.${category}`);
    if (activeBtn) {
      activeBtn.classList.add('active');
    }
  }

  return (
    <div className="menu-body">
      <h2>OUR MENU</h2>
      <div id="myBtnContainer">
      <button className={`btn ${filter === 'main' ? 'active' : ''}`} onClick={() => filterSelection('main')}>
    <li><a href="/">Home</a></li>
  </button>
        <button className={`btn ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilterClick('all')}>Show All</button>
        <button className={`btn ${filter === 'meat' ? 'active' : ''}`} onClick={() => handleFilterClick('meat')}>Meat</button>
        <button className={`btn ${filter === 'salad' ? 'active' : ''}`} onClick={() => handleFilterClick('salad')}>Salad</button>
        <button className={`btn ${filter === 'drinks' ? 'active' : ''}`} onClick={() => handleFilterClick('drinks')}>Drinks</button>
      </div>

      <div className="row">
        {items.map((item, index) => (
          <div key={index} className={`column ${item.category}`}>
            <div className="content">
              <img src={item.image} alt={item.name} style={{ width: '100%' }} />
              <h4>{item.name}</h4>
              <p>Price: {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;