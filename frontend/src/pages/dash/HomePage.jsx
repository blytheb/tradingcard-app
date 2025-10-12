import React from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
// import { useUserAuth } from '../../hooks/useUserAuth';
import HorizontalViewLayout from '../../components/layouts/HorizontalViewLayout';

  const cards = [
    { name: "Blythe", image: "https://robohash.org/1/200x200" },
    { name: "Sam", image: "https://robohash.org/2/200x200" },
    { name: "Alex", image: "https://robohash.org/3/200x200" },
    { name: "bob", image: "https://robohash.org/4/200x200" },
    { name: "amy", image: "https://robohash.org/5/200x200" },
    { name: "carol", image: "https://robohash.org/6/200x200" },
  ];

const HomePage = () => {
  // useUserAuth();

  return (
    // <DashboardLayout activeMenu="Dashboard">
      <div className='my-5 mx-auto'>
        <h1 className='text-3xl font-bold'>Welcome to the Trading Card App!</h1>
        <HorizontalViewLayout cards={cards} />
      </div>
    //</DashboardLayout>

  )
}

export default HomePage