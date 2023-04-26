import { addUserAC } from "Redux/Users/actions"
import { useDispatch } from "react-redux"

export const AddUserPage = () => {
 const dispatch = useDispatch()

 const handleSubmit=(ev)=>{
   ev.preventDefault()
   dispatch(addUserAC({
    name: ev.target.elements.name.value,
    id: Date.now(),
    age: ev.target.elements.age.value,
    }))
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