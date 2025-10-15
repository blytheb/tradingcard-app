import React, { useState } from 'react'
import TradingCard from '../Cards/TradingCard';
import AddTradingCard from '../Cards/AddTradingCard';
import { useNavigate } from 'react-router';

const HorizontalViewLayout = ({ title, cards, path }) => {
    const [showAll, setShowAll] = useState(false);
    const visableProfiles = showAll ? cards : cards.slice(0, 3);


    const navigate = useNavigate();
    const redirectTo = (path) => {
        navigate(path);
    }
  return (
    <div className='py-4 px-4'>
        <div class="flex items-center justify-between">
            <h1>{title}</h1>
            <button 
                class="text-md text-indigo-600 hover:text-indigo-500"
                onClick={() => redirectTo(path)}
            >
                View All
            </button>
        </div>        
        <div className='flex space-x-4 overflow-x-auto py-4'>
            <AddTradingCard />
            {visableProfiles.map((card, index) => (
                <TradingCard key={index} name={card.name} image={card.image} />
            ))}
        </div>
    </div>
  )
}

export default HorizontalViewLayout