import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from './../services/GlobalApi'; // Correct default import
import { HiChevronLeft } from 'react-icons/hi';
import { HiChevronRight } from "react-icons/hi";
import { animateScroll } from 'react-scroll';

const scennwidth=window.innerWidth

function Slider() {
    
    const elementRef=useRef();
    const baseurl = "https://image.tmdb.org/t/p/original/"
    const [movielist, setmovie] = useState([])
    useEffect(() => {
        getTrendingMovies();
    }, []);

    function sliderRight(element){
        element.current.scrollLeft+=scennwidth-110;
    }
    function slideLeft(element){
        element.current.scrollLeft-=scennwidth-110;
    }
    const getTrendingMovies = () => {
        
        GlobalApi.getTrendingVideos()
            .then((resp) => {
                
                setmovie(resp.data.results) // Logs trending videos
            })
            .catch((err) => {
                console.error("Error fetching trending movies:", err);
            });
    };

    return (
        <div>
            <HiChevronLeft onClick={()=>(slideLeft(elementRef))} className=' hidden md:block absolute text-[70px]  mx-[5px] mt-[300px] '/>
            <HiChevronRight onClick={()=>(sliderRight(elementRef))} className=' hidden md:block absolute text-[70px] right-0 mx-[5px] mt-[300px] '/>
            <div ref={elementRef} id='scrollbar' className=' scroll-smooth flex scrollbar-hide overflow-x-auto w-full px-16 py-4'>
                {movielist.map((movie) => (
                    <img  className='hover:border-[3px] shadow-lg
            shadow-black border-gray-400 transition-all duration-100 ease-in min-w-full  md:h-[610px] object-cover object-left-top mr-5 rounded-md' src={baseurl + movie.backdrop_path} alt="" />
                ))}
            </div>
        </div>
    );
}

export default Slider;
