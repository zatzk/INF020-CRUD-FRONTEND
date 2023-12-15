'use client';
import { useState } from 'react';
import axios from 'axios';
import { useAppContext } from '../contexts/context';

export default function EditTopicForm({ onTopicUpdate }) {
  const { showUsersList } = useAppContext();
  const objectType = showUsersList ? 'users' : 'teachers';

  // Remove ID from state and handle function
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUpdateButtonClick = async () => {
    try {
      const apiUrl = `http://localhost:5000/api/${objectType}/${id}`;
      console.log('API URL:', apiUrl);

      const requestBody = {
        name: name,
      };

      // Send PUT request
      const response = await axios.put(apiUrl, requestBody);

      // Update local state using the callback function
      if (onTopicUpdate) {
        onTopicUpdate(response.data);
      }

      // Additional logic based on the response, if needed

      console.log('Response from API:', response.data);
    } catch (error) {
      console.error('Error while sending request:', error);
    }
  };

  return (
    <form className="flex flex-col gap-3">
      {/* Remove input for ID */}
      {/* <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="ID"
        value={id}
        onChange={handleIdChange}
      /> */}
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />

      <button
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        type="button"
        onClick={handleUpdateButtonClick}
      >
        Update Topic
      </button>
    </form>
  );
}
