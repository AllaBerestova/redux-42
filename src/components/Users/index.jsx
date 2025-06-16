import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, setUsers, setLoading, setError } from "../../slices/users/usersSlice";

export const Users = () => {
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading('pending')); 

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("ошибка загрузки данных");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setUsers(data)); 
      })
      .catch((error) => {
        dispatch(setError(error.message)); 
      });
  }, [dispatch]);

  const handleAddUser = (e) => {
    e.preventDefault();
    
    const newUser = {
      id: Math.random(), 
      name: e.target.name.value,
      
    };
    dispatch(addUser(newUser));
    e.target.reset();
  };

   if (loading === 'pending') {
    return <div>Загрузка пользователей...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
     <div>
      <h2>Список пользователей</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2>Добавить пользователя</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Имя" />
        <button type="submit">Добавить</button>
      </form>
    </div>
  )
};
