import React, { useState } from 'react'
import TradingCard from '../Cards/TradingCard';
import AddTradingCard from '../Cards/AddTradingCard';

const HorizontalViewLayout = ({ cards }) => {
    const [showAll, setShowAll] = useState(false);
    const visableProfiles = showAll ? cards : cards.slice(0, 3);

  return (
    <div className='py-4 px-4'>
        <div class="flex items-center justify-between">
            <h1>My Cards</h1>
            <button class="text-md text-indigo-600 hover:text-indigo-500">
                View All
            </button>
        </div>        
        <div className='flex space-x-4 overflow-x-auto py-4'>
            {visableProfiles.map((card, index) => (
                <TradingCard key={index} name={card.name} image={card.image} />
            ))}
            <AddTradingCard />
        </div>
           

    </div>
  )
}

export default HorizontalViewLayout