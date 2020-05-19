import React from 'react';

import '../styles/FollowersCard.scss';


function FollowersCard({info,sliceNumb}) {

return (
    <div className={`card card-total ${info.socialMedia}`}>
        <p><a className={'link'}  href={info.linkProfile} title={`${info.socialMedia} profile`} target='_blank' rel="noopener noreferrer">{info.name}</a></p>
        <p className='followers'>{info.followersTotal >= 11000 ? `${sliceNumb(info.followersTotal, 2)}K`  : info.followersTotal}</p>
        <p className="caption">{info.socialMedia === 'youtube' ? 'Suscribers' : 'Followers'}</p>
        <p className={`bounce-rate ${info.isIncrease ? 'green positive' : 'red negative'}`}>{info.followerDaily} Today</p>
    </div>
);
}

export default FollowersCard;
