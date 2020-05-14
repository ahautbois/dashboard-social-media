import React from 'react';

import '../styles/FollowersCard.scss';


function FollowersCard({info,sliceNumb}) {

return (
    <div className={`card card-total ${info.socialMedia}`}>
        <p className='name'>{info.name}</p>
        <p className='followers'>{info.followersTotal >= 11000 ? `${sliceNumb(info.followersTotal, 2)}K`  : info.followersTotal}</p>
        <p className="caption">{info.socialMedia === 'youtube' ? 'Suscribers' : 'Followers'}</p>
        <p className={`bounce-rate ${info.isIncrease ? 'green positive' : 'red negative'}`}>{info.followerDaily} Today</p>
    </div>
);
}

export default FollowersCard;
