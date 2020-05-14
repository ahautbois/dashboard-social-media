import React, { Fragment } from 'react';

import '../styles/DailyView.scss';


function DailyView({info, sliceNumb}) {
 
return (
    <Fragment>
        <div className={`card cardDaily ${info.social}`}>
            <p className={`title ${info.social}`}>Page views</p>
            <p className='views'><b>{info.stats[0].page >= 11000 ? `${sliceNumb(info.stats[0].page, 2)}K` : info.stats[0].page}</b></p>
            <span className={`bounce-rate ${info.stats[0].isIncreaseView ? 'green positive' : 'red negative'}`}>{info.stats[0].bounceRateViews}%</span>
        </div>
        <div className={`card cardDaily ${info.social}`}>
            <p className={`title ${info.social}`}>Likes</p>
            <p className='views'><b>{info.stats[0].likes >= 11000 ? `${sliceNumb(info.stats[0].likes, 2)}K` : info.stats[0].likes}</b></p>
            <span className={`bounce-rate ${info.stats[0].isIncreaseLikes ? 'green positive' : 'red negative'}`}>{info.stats[0].bounceRateLikes}%</span>
        </div>
    </Fragment>
);
}

export default DailyView;
