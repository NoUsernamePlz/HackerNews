import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { TfiCommentsSmiley } from "react-icons/tfi";
import { RiStarSmileLine } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Comment = ({ comment }) => (
  <div className='w-[90%] h-auto flex flex-col justify-center md:justify-start items-center ml-2 md:mx-[5vw] my-[2vh] overflow-auto px-2 md:px-0 text-sm md:text-base'>
    <div className='w-[100%] md:text-left  bg-[#0c0512] border border-purple-700 overflow-x-auto flex-wrap  '>{comment.text}</div>
    {comment.children.length > 0 && (
      <ul className=' border border-purple-700 bg-[#12081a] hover:shadow-[0_0_10px_purple] overflow-auto '>
        {comment.children.map((childComment) => (
          <li key={childComment.id} className='flex items-center justify-center overflow-auto'>
           <TfiCommentsSmiley  className=' ml-5 h-5 w-5 text-purple-700'/>
            <Comment comment={childComment}  />
          </li>
        ))}
      </ul> 
    )}
  </div>
);

const Blogpage = () => {
  const [postDetails, setPostDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`http://hn.algolia.com/api/v1/items/${id}`);
        setPostDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, [id]);

  return (
    <div className='text-white w-[100vw]'>
        <div className='w-full h-[40vh] relative'>
        <img src={require('../../Images/blogbackground.jpg')} alt='hacker' className='w-full h-[100%] cover' >
        </img>
        </div>
      {postDetails ? (
        <div className='flex flex-col justify-center items-center'>
          
         <h2 className='text-3xl text-purple-200 hover:text-purple-700 font-extrabold absolute top-[10vh] left-[20vw] w-[60vw] text-center '>{postDetails.title}</h2>
          <div className='md:flex w-[80vw] my-4 md:my-0 justify-start md:justify-between text-md font-medium items-center absolute top-[45vh] md:top-[35vh]'><h5 className='flex items-center justify-start sm:justify-center sm:max-md:w-full'><FaUser className='h-8 w-8 mx-3 text-purple-700'/> Author: {postDetails.author}</h5>
          <h5 className='flex items-center justify-start sm:justify-center  sm:max-md:w-full '><MdDateRange  className='h-8 w-8 mx-3 text-purple-700 '/> Created at: {postDetails.created_at}</h5>
          <p className='flex items-center justify-start sm:justify-center sm:max-md:w-full '><RiStarSmileLine className='h-8 w-8 mx-3 text-purple-700 ' />Points: {postDetails.points}</p></div>

          < div className='text-left mt-[40vh] sm:my-[10vh] text-lg font-bold'>Comments:</div>
          <div className='w-[90vw] overflow-x-auto'>
          {postDetails.children.map((comment) => (
            <Comment className="flex flex-col border  " key={comment.id} comment={comment} />
          ))}</div>
        </div>
      ) : (
        <p className='font-3xl font-semibold w-full h-[60vh]'>Loading.......</p>
      )}
    </div>
  );
};

export default Blogpage;
