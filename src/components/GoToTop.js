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

          <div 
          className='go_to_top' 
          onClick={goToBtn} 
          aria-label="Back to top"
          style={{ // Inline styles for responsiveness
              position: 'fixed',
              bottom: { base: '20px', md: '40px' }, // Adjust bottom spacing
              right: { base: '20px', md: '40px' },  // Adjust right spacing
              backgroundColor: '#007bff', // Example background color
              color: 'white', // Example text color
              padding: '10px', // Example padding
              borderRadius: '5px', // Example border radius
              cursor: 'pointer',
              zIndex: 100, // Ensure it's above other content
              display: 'flex', // Use flexbox for centering
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: {base:'1rem', md:'1.5rem'} //responsive font size
          }}
      >
          <FaArrowUp style={{ fontSize: '1.2rem' }} /> {/* Style the icon */}
      </div>

        )

    }

    </>

            

  )

}

export default GoToTop