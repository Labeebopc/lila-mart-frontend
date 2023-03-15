import React from "react";
import './navbar.css'


const Navbar = () => {
    return (
        <>
            <section className="navbar-container">
                <article className="navbar-left-section">
                    <div className="color-white">
                        <i className='fas fa-phone-alt'></i>
                        <span>+22 223 85 58</span>
                    </div>
                    <div className="color-white">
                        <i className='fas fa-envelope-square'></i>
                        <span>support@lilamart.in</span>
                    </div>


                </article>

                <article className="navbar-right-section">
                    <div className="color-white">
                        <i className='fas fa-map-marker-alt'></i>
                        <span>Locations</span>
                    </div>
                    <div className="color-white">|</div>
                    <div className="color-white">
                        <select name="" className="navbar-select-option">
                            <option value="">$ DOLLOR(US)</option>
                        </select>
                    </div>
                    <div className="color-white">
                        <select name="" id="" className="navbar-select-option">
                            <option value="">EN</option>
                        </select>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Navbar;