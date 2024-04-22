import http from "./Http";
import { useState, useEffect } from "react";
import Addmodal from "./Addmodal";
import Header from "./Header";

function Home() {
    const [users, setUsers] = useState([]);
    
    const [formdata, setformdata] = useState({});
    const[editid,seteditid]=useState("");

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        http.get("/users").then((res) => {
            setUsers(res.data);
        });
    };

    const viewDetail = (event) => {
        const id = event.target.id;
        console.log(id);
    };
    const changehandler = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
    };
    const submithander = (e) => {
        e.preventDefault();

       

        try {
            const response = http.post("/submitdata", formdata);
            fetchAllUsers();
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const editdetail=(e)=>{
    e.preventDefault();
    seteditid(e.target.id);




    }


    

    return (

        <>
 {/* //from here this is the add modal */}
            <button
                type="button"
                className="btn btn-primary w-100"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                Add a student
            </button>

            <div
                className={`modal fade show`}
                id="exampleModal"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
               
               
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Modal title
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body ">
                            <form>
                                <div className="row">
                                    <div className="form-group mb-3 ">
                                        <label className="text-weight-bold">
                                            Batch
                                        </label>
                                        <input
                                            name="batch"
                                            placeholder="enter the Batch"
                                            className="form-control"
                                            onChange={changehandler}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group mb-3 ">
                                        <label className="text-weight-bold">
                                            Admission_No
                                        </label>
                                        <input
                                            name="Admission_NO"
                                            placeholder="enter the Admisssion_no"
                                            className="form-control"
                                            onChange={changehandler}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group mb-3 ">
                                        <label className="text-weight-bold">
                                            Student_name
                                        </label>
                                        <input
                                            name="student_name"
                                            placeholder="enter the Student Name"
                                            className="form-control"
                                            onChange={changehandler}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group mb-3 ">
                                        <label className="text-weight-bold">
                                            Father_name
                                        </label>
                                        <input
                                            name="father_name"
                                            placeholder="enter the father's name"
                                            className="form-control"
                                            onChange={changehandler}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={submithander}
                                className="btn btn-primary w-100"
                                data-bs-dismiss="modal"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Addmodal id={editid}/>

            <table className="table container">
                <thead>
                    <tr>
                        <th>Batch</th>

                        <th>Admission No</th>
                        <th>Student Name</th>
                        <th>Father Name</th>
                        <th>view</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.S_No}>
                            <td>{user.Batch}</td>
                            <td>{user.Admission_no}</td>
                            <td>{user.Student_name}</td>
                            <td>{user.Father_name}</td>
                            <td>
                                <button
                                    onClick={viewDetail}
                                    className="btn btn-success viewbutton "
                                    id={user.S_No}
                                >
                                    View
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-warning editbutton"
                                    id={user.S_No}
                                    onClick={editdetail}
                                >
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger delete"
                                    id={user.S_No}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Home;
