import React, { useEffect, useState } from 'react'

import { ReactComponent as Logo } from '../assets/sunrise-alarm.svg'
import './Navbar.css'

const Navbar = () => {
    // initialize background state as white
    const [background, setBackground] = useState('var(--hdc-white');

    // when scrolling down, make background of navbar transparent
    useEffect(() => {
        const scrollListener = document.addEventListener('scroll', (e) => {
            if (document.scrollingElement.scrollTop >= 90) {
                setBackground('rgba(0, 0, 0, 0)');
            } else {
                setBackground('var(--hdc-white');
            }
        })

        // cleanup function
        return () => {
            document.removeEventListener('scroll', scrollListener);
        }
    }, [background])


    return (
        <div className='navbar-container' style={{ background:background }}>
            <Logo className='navbar-logo' />
        </div>
    )
}

export default Navbar