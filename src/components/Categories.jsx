import React, { useRef } from 'react';
import './Categories.css';

const Categories = () => {
  const categoriesRef = useRef(null);

  const categories = [
    { name: 'Castles', icon: '🏰' },
    { name: 'Surfing', icon: '🏄' },
    { name: 'Rooms', icon: '🛏️' },
    { name: 'Top cities', icon: '🏙️' },
    { name: 'Amazing views', icon: '🏞️' },
    { name: 'Design', icon: '🏠' },
    { name: 'Countryside', icon: '🌲' },
    { name: 'Mansions', icon: '🏛️' },
    { name: "Chef's kitchens", icon: '👨‍🍳' },
    { name: 'Bed & breakfasts', icon: '☕' },
    { name: 'Beachfront', icon: '🏖️' },
    { name: 'Beach', icon: '🏖️' },
    { name: 'Trending', icon: '🔥' },
    { name: 'Cabins', icon: '🏡' },
    { name: 'Lakes', icon: '🏞️' },
    { name: 'Deserts', icon: '🏜️' },
    { name: 'Tiny Homes', icon: '🏠' },
    { name: 'Arctic', icon: '❄️' },
    { name: 'Tropical', icon: '🌴' },
    { name: 'Islands', icon: '🏝️' },
    { name: 'Camping', icon: '🏕️' },
    { name: 'Vineyards', icon: '🍇' },
    { name: 'Mountain', icon: '⛰️' },
    { name: 'Boats', icon: '🚤' },
    { name: 'Windmills', icon: '🌬️' },
    { name: 'Ryokans', icon: '🏯' },
    { name: 'Skiing', icon: '🎿' },
  ];

  const scrollLeft = () => {
    categoriesRef.current.scrollBy({
      top: 0,
      left: -200,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    categoriesRef.current.scrollBy({
      top: 0,
      left: 200,
      behavior: 'smooth'
    });
  };

  return (
    <div className="categories-container">
      <button className="scroll-button scroll-left" onClick={scrollLeft}>{'<'}</button>
      <div className="categories-list" ref={categoriesRef}>
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`category-item ${category.disabled ? 'disabled' : ''}`}
            disabled={category.disabled}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
          </button>
        ))}
      </div>
      <button className="scroll-button scroll-right" onClick={scrollRight}>{'>'}</button>
    </div>
  );
}

export default Categories;
