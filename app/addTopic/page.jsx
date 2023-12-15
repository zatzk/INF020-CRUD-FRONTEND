'use client';
import { useState } from 'react';
import axios from 'axios';

export default function AddTopic() {
  const [userType, setUserType] = useState('user');
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const handleTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddButtonClick = async () => {
    try {
      const apiUrl = `https://72fe1aeb-a9af-4e6c-8b25-2efe3b6cecd2.mock.pstmn.io/${userType}s/`;

      const requestBody = {
        id: id,
        name: name,
      };

      // Enviar solicitação POST
      const response = await axios.post(apiUrl, requestBody);

      // Lógica adicional com base na resposta, se necessário

      console.log('Resposta da API:', response.data);
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);
    }
  };

  return (
    <form className="flex flex-col gap-3">
      <select value={userType} onChange={handleTypeChange}>
        <option value="user">User</option>
        <option value="teacher">Teacher</option>
      </select>
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
        onClick={handleAddButtonClick}
      >
        Add
      </button>
    </form>
  );
}
