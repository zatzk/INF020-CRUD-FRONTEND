import { HiOutlineTrash } from "react-icons/hi";
import axios from 'axios';
import { useAppContext } from '../contexts/context';

export default function RemoveBtn({ id }) {
  const { showUsersList } = useAppContext();
  const objectType = showUsersList ? 'users' : 'teachers';

  const handleRemoveClick = async () => {
    try {
      const apiUrl = `http://localhost:5000/api/${objectType}/${id}`;

      // Send DELETE request
      const response = await axios.delete(apiUrl);

      // Additional logic based on the response, if needed

      console.log('Response from API:', response.data);
    } catch (error) {
      console.error('Error while sending request:', error);
    }
  };

  return (
    <button className="text-red-400" onClick={handleRemoveClick}>
      <HiOutlineTrash size={24} />
    </button>
  );
}
