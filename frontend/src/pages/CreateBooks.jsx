import React from 'react';
import { useState } from 'react';
import BackButton from '../components/BackButton'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveBook = ()=>{
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios
    .post("http://localhost:5555/books", data)
    .then(()=>{
      setLoading(false)
      navigate('/')
    })
    .catch((error)=>{
      setLoading(false)
      alert("Error")
      console.log(error)  
    })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create a book</h1>
      {loading? <Spinner />: ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-lg w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl text-gray-400 mr-4'>Title</label>
          <input 
            type='text' 
            value={title} 
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
            className='border-2 border-gray-400 py-2 px-4 w-full' 
          />
        </div>
        <div className='my-4'>
          <label className='text-xl text-gray-400 mr-4'>Author</label>
          <input 
            type='text' 
            value={author} 
            onChange={(e)=>{
              setAuthor(e.target.value)
            }}
            className='border-2 border-gray-400 py-2 px-4 w-full' 
          />
        </div>
        <div className='my-4'>
          <label className='text-xl text-gray-400 mr-4'>Publish Year</label>
          <input 
            type='text' 
            value={publishYear} 
            onChange={(e)=>{
              setPublishYear(e.target.value)
            }}
            className='border-2 border-gray-400 py-2 px-4 w-full' 
          />
        </div>
        <button className='p-2 m-8 bg-sky-300' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateBooks