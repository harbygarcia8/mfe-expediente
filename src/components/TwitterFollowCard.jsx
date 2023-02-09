import React, { useState } from 'react'

const TwitterFollowCard = ({children, userName, initialIsFollowing}) => {
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const setfollow = isFollowing ? 'Following' : "Follow";
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img alt="Avatar de Harby" src={`https://unavatar.io/${userName}`} className="tw-followCard-avatar"/>
                <div className="tw-followCard-info">
                    {children}
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
        
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{setfollow}</span>
                <span className='tw-followCard-stopFollow'>Unfollow</span>
                </button>
                
            </aside>
        </article>
    )
}

export default TwitterFollowCard;