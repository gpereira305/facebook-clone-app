import React from 'react'
import Story from '../story/Story'
import './StoryReel.css'




const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story
                image="https://images.unsplash.com/photo-1542822038-3a1810a5fb69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
                profileSrc="https://randomuser.me/api/portraits/women/31.jpg"
                title="Lilly Anderson"    
            />
            <Story
                image="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80"
                profileSrc="https://randomuser.me/api/portraits/women/49.jpg"
                title="Cathy Briggs"    
            />
            <Story
                image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                profileSrc="https://randomuser.me/api/portraits/men/26.jpg"
                title="Todd mason"    
            />
            <Story
                image="https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                profileSrc="https://randomuser.me/api/portraits/men/18.jpg"
                title="Carl Shultz"    
            />
        </div>
    )
}

export default StoryReel
