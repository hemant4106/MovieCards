import React from 'react'
import disney from './../assets/Images/disney.png'
import marvel from './../assets/Images/marvel.png'
import nationalG from './../assets/Images/nationalG.png'
import pixar from './../assets/Images/pixar.png'
import starwar from './../assets/Images/starwar.png'

import starwarV from './../assets/Videos/star-wars.mp4'
import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGeographicV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'
function ProductionHouse() {
    const productionHouseList = [
        {
            id: 1,
            image: disney,
            video: disneyV
        },
        {
            id: 2,
            image: pixar,
            video: pixarV
        },
        {
            id: 3,
            image: marvel,
            video: marvelV
        },
        {
            id: 4,
            image: starwar,
            video: starwarV
        },
        {
            id: 5,
            image: nationalG,
            video: nationalGeographicV
        },

    ]
    return (
        <div className='flex w-[fit] justify-center items-center gap-5 flex-wrap'>
            {productionHouseList.map((item) => (
                <div  className='border-[2px] border-gray-600
            rounded-md   hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-lg 
            shadow-black m-5 w-[30vw] md:w-[15vw] lg:w-[15vw] 
            ' >
                    <video src={item.video} autoPlay loop playsInline muted 
            className='absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-100 w-full h-full'  />
                    <img src={item.image} className='z-[1] w-full h-full object-cover opacity-100 rounded-md'  />

                </div>
            ))}
        
        </div>
    )
}

export default ProductionHouse
