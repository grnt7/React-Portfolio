import {useState,useEffect} from 'react'
import {} from 'react'

import { FaArrowUp } from 'react-icons/fa';

import '../index.css';

const GoToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    

    const listenToScroll = () =>{

        let heightToHidden = 250;

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

       if(winScroll > heightToHidden){

        setIsVisible(true)

       } else {

        setIsVisible(false);

       }

    }

    useEffect(() => {

      window.addEventListener("scroll",listenToScroll);

      return () => {

        window.removeEventListener("scroll",listenToScroll);

      }

    },[])

    

    const goToBtn = () =>{

        window.scrollTo({

            top:0,

            left:0,

            behavior:"smooth"

        });

    }

  return (

    <>

    {

        isVisible && (

          <div className='go_to_top' onClick={goToBtn}>
          <FaArrowUp /> {/* Render the FaArrowUp component directly */}
      </div>

        )

    }

    </>

            

  )

}

export default GoToTop