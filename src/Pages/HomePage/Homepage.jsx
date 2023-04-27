import { selectUsers } from "Redux/Users/selectors"
import { deleteUser } from "Redux/Users/usersSlice"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"


export const Homepage = () => {
   const users = useSelector(selectUsers)
   const dispatch = useDispatch()
   console.log(users);


    return (
        <ul>
         { users.map(user=>{
            return <li key={user.id}>
                <p>Name: {user.name}</p>
                <p>Age: {user.age} </p>
                <button onClick={()=>{dispatch(deleteUser(user.id))}}>Delete</button>
                </li>
         })}
        </ul>
    )
}