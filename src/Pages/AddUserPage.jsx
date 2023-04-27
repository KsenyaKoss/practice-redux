
import { addUser } from "Redux/Users/usersSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export const AddUserPage = () => {
 const dispatch = useDispatch()
 const navigate = useNavigate()

 const handleSubmit=(ev)=>{
   ev.preventDefault()
   dispatch(addUser({
    name: ev.target.elements.name.value,
    id: Date.now(),
    age: ev.target.elements.age.value,
    }))
    navigate('/')
 }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name
                <input type='text' name="name"/>
            </label>
            <label>Age
                 <input type="number" name="age"/>
            </label>
            <button>Submit</button>
        </form>
    )
}