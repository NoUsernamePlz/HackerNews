import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHome, FaSearch } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import backgroundImage from '../../Images/background.jpg';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  

    const navigate = useNavigate();


   

    const fetchData = async () => {
        try {
          const response = await axios.get(`http://hn.algolia.com/api/v1/search?tags=front_page`, {
           
          });
          setData(response.data.hits);  
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };


    const searchBlogs = async (term) => {
        try {
          const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${term}`);
          setData(response.data.hits);
          console.log(data);
          
        } catch (error) {
          console.error('Error searching startups:', error);
        }
      };


      useEffect(() => {
        fetchData();
      }, []); 
    

    // card clicking function 
  const handleStartupClick = async (objectId) => {
    try {
     
      navigate(`/post/${objectId}`)
    } catch (error) {
      console.error('Error fetching post details:', error);
    }
  };


  return (
    <>
    <div className='w-full h-[20vh] flex flex-col sm:flex-row items-center justify-around bg-[#0c0512] border-x-1px border-x-purple-700 shadow-[0_0_10px_purple]'>
      <span className='font-extrabold text-purple-700 text-4xl m-5 rounded-lg  hover:shadow-[0_0_30px_purple] animate-bounce  '> HackersNews</span>
      {/* search button */}
      <div>
      
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className=' w-[50vw] sm:w-[25vw] h-8 p-2 mr-1 border border-purple-700 rounded-md bg-black text-purple-700 hover:shadow-[0_0_10px_purple]  '
              />
              <button
                className="w-11 h-8 p-1 mr-[8vw] bg-black text-purple-700 rounded-md shadow-[0_0_5px_purple]"
                onClick={() => searchBlogs(searchTerm)}
              >
                <FaSearch className='text-purple-700 h-4 w-8 '/>
              </button>
            
      </div>
      
      
         

    </div>

    <div className='flex flex-col md:flex-row justify-center items-center m-[10vh] '>


    <div className='w-[15vw] h-[15vw] cursor-pointer'>
        <img src={require('../../Images/hackerimage.jpg')} alt='hacker' className='w-full transition hover:-translate-x-[5vw]    transform duration-1000' >
        </img>
    </div>


    <TypeAnimation className='font-bold text-purple-700 w-[35vw] ml-[5vw] rounded-lg hover:shadow-[0_0_20px_purple] cursor-pointer'
      sequence={[
    
        "Hacker News Navigator: Your Map to the Digital Frontier",
        1000, 
        "Hacker News Buzz: Trending Tech Topics Decoded",
        1000,
        'Explore more!!!!!',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /></div>



<div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }} className='border-x-1px border-x-purple-700 shadow-[0_0_20px_purple] w-full'>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-[5vw] my-[10vh]  " >
  {data &&
    data.map((blog, index) => (
      <div key={index} onClick={() => handleStartupClick(blog.objectID)} className='mt-[5vh] text-white border border-purple-700  w-[90vw] md:w-[23vw] h-[30vh] flex justify-center items-center flex-col px-5 rounded-lg bg-[#0c0512] hover:scale-[1.1] hover:shadow-[0_0_20px_purple] cursor-pointer'>
        <div className='font-semibold w-[80vw] md:w-[20vw]  my-4 text-purple-200 hover:text-purple-700 text-lg'>{blog.title}</div>
        <div className='flex justify-center items-center'>
          <div className='flex items-center justify-start w-[40vw] md:w-[10vw] font-thin overflow-hidden'><FaUser className='mx-2 h-5 w-5 text-purple-700' />{blog.author}</div>
          <div className='flex items-center justify-start w-[40vw] md:w-[10vw] font-thin text-sm overflow-hidden'><MdDateRange className='mx-2 h-5 w-5 text-purple-700' />{blog.created_at}</div>
        </div>
      </div>
    ))}
</div>
</div>

</>
  )
}

export default Homepage

