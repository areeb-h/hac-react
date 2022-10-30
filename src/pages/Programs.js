import React from 'react';
import vector from '../assets/hac/study-back.png'
  
function Destination () {
    return <main id="main">
        <div class="grid-container grid-container--home">
            <div class="home-text">
                <h1 class="text-green fs-700 ff-sans-cond uppercase letter-spacing-1 pb-2">
                    Hulhumale’ Academic Center
                </h1>
                <p class="text-dark home-para">HAC is the first private education institution established in Hulhumale’. We place a heavy focus on teaching excellence and providing a place where your children can feel at home while learning the skills that will help them thrive long after their school years are over. As a parent, what more can you ask for?</p>
            </div> 
            <div>
                <img class="home-vector" src={vector}></img>
            </div>
        </div>
    </main>
}
export default Destination;