import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <div className="hcontainer">
        <div className="hwrapper">
            <div className="left">
            <img src='assets/images/headerimg.png' alt='Nothing' />
            </div>
            <div className="right">
                <h1 className="title">Nothing is Impossible! So Stay Focused</h1>
                <p className='desc' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat architecto accusamus. In error vel molestiae fugit fugiat unde expedita.</p>
                <button className="hbtn">Learn More!</button>
            </div>
        </div>
    </div>
  )
}

export default Header