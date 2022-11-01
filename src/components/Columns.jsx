import React from 'react'

import { Link } from 'react-router-dom'

import './Columns.css'

import { ReactComponent as wavesIcon } from '../assets/wavy-lines-icon.svg'
import { ReactComponent as sunHeartIcon } from '../assets/sunshine-heart-icon.svg'
import { ReactComponent as sunriseIcon } from '../assets/sunrise-alarm.svg'

const Columns = () => {

    // content objects 
    const content = [
        { icon: wavesIcon, text: 'Text', link: '/' },
        { icon: sunHeartIcon, text: 'Text', link: '/' },
        { icon: sunriseIcon, text: 'Text', link: '/' }
    ]

    // Update column template CSS according to # of items in content array
    const columnLayout = 'repeat(' + content.length + ', 1fr)';

    return (
        <div className='columns-main'>
            <h2>Your heading here</h2>
            <div 
                className='columns-container' 
                style={{ gridTemplateColumns: columnLayout }}
            >
                { content.map((obj, index) => (
                    // Link component here to allow rerouting to different pages based
                    // on link prop in content
                    <Link to={ obj.link } key={ 'col-'+ index } style={{ textDecoration: 'none' }}>
                        <Column 
                            text={ obj.text } 
                            icon={ obj.icon }
                        />
                    </Link>
                )) }
            </div>
        </div>
    )
}

const Column = (props) => {
    const Icon = props.icon;

    return (
        <div className='column'>
            <Icon />
            <p>{ props.text }</p>
        </div>
    )
}

export default Columns