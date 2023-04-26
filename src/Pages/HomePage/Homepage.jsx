import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { deleteUserAC } from "Redux/Users/actions"

export const Homepage = () => {
   const users = useSelector(state=> state.users)
   const dispatch = useDispatch()


    return (
        <ul>
         { users.map(user=>{
            return <li key={user.id}>
                <p>Name: {user.name}</p>
                <p>Age: {user.age} </p>
                <button onClick={()=>{dispatch(deleteUserAC(user.id))}}>Delete</button>
                </li>
         })}
        </ul>
    )
}