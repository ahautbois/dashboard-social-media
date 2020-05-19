import React, {useState} from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import FollowersCard from './components/FollowersCard';
import DailyView from './components/DailyView';
import followerTotalData from './followerData';



import './styles/App.scss';



function App() {

  const [isSwitch, setIsSwitch] = useState(true);

  const handleChange = () => {
    setIsSwitch(!isSwitch);
  }

  let sliceFollowers = (num, len) => +String(num).slice(0, len);

  const socialMediaList = followerTotalData.map(media => <FollowersCard key={media.id} info={media} sliceNumb={sliceFollowers}/>);

  const dailyData = followerTotalData.map(media => ({social: media.socialMedia, link: media.linkProfile, stats: media.dailyView}));
  const dailyList = dailyData.map((daily, index) => <DailyView key={index} info={daily} sliceNumb={sliceFollowers}/>);

  

  return (
    <div className={`App theme-${isSwitch ? 'light' : 'dark'}`}>
    {/*
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    */}
      <Header themeSwitch={isSwitch} themeFunc={handleChange}/>
      <main>
          <section className='container card-list'>
            {socialMediaList}
          </section>
          <section className='container'>
            <h2>Overview - Today</h2>
            <div className='card-list'>
              {dailyList}
            </div>
          </section>
      </main>
    </div>
  );
}

export default App;
