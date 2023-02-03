import React from 'react';
// import { useState, useNavigate }  from 'react-router-dom';

// import { preview } from '../utils';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';
import { useState } from 'react';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div>CreatePost</div>
  )
}

export default CreatePost