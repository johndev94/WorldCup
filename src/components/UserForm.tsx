import { FormEvent, useRef } from "react";

function UserForm() {

    const idRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const departmentRef = useRef<HTMLSelectElement>(null);

    const user = {
        id: "",
        name: "",
        department: ""
    }

    //CAN USE THIS TO POST TO AN AXIO SERVER
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log("Submitted");
        if (idRef.current != null) {
            user.id = idRef.current.value;
            // console.log(idRef.current.value);
        }
        if (nameRef.current != null) {
            user.name = nameRef.current.value;
            // console.log(nameRef.current.value);
        }
        if (departmentRef.current != null) {
            user.department = departmentRef.current.value;
            // console.log(departmentRef.current.value);
        }
        console.log(user);


    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>User Form</h1>
                <div>
                    <label htmlFor="id" className="form-label">ID</label>
                    <input ref={idRef} id="id" type="text" className="form-control" />
                </div>
                <div>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input ref={nameRef} id="name" type="text" className="form-control" />
                </div>
                <div>
                    <label htmlFor="department" className="form-label">Department</label>
                    <select ref={departmentRef} id="department" className="form-select">
                        <option value="Computing">Computing</option>
                        <option value="Business">Business</option>
                        <option value="Design">Design</option>
                    </select>
                </div>
                <br />
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </>
    );
}
export default UserForm;