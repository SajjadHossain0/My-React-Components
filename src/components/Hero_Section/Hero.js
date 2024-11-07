import React from 'react';
import './Hero.css'
import hero_section_png from './hero_section_png.png'

export default function Hero() {
    return (
        <div>
            <main>
                <div className="container">
                    <img src={hero_section_png} alt=""/>
                    <div className="hero-text">
                        <h1>Your perfect coffee experience</h1>
                        <p>Indulge in artisanal coffee delights. Crafted with passion, brewed with perfection.
                            Savor the Flavor!
                        </p>
                        <button>Order Now</button>
                    </div>
                </div>
            </main>
        </div>
    )
}