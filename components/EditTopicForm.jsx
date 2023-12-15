import { useState } from 'react';
import axios from 'axios';

export default function EditTopicForm() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUpdateButtonClick = async () => {
    try {
      const apiUrl = `http://localhost:5000/api/topics/${id}`;

      const requestBody = {
        name: name,
      };

      // Send PUT request
      const response = await axios.put(apiUrl, requestBody);

      // Additional logic based on the response, if needed

      console.log('Response from API:', response.data);
    } catch (error) {
      console.error('Error while sending request:', error);
    }
  };

  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="ID"
        value={id}
        onChange={handleIdChange}
      />
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
