import React from 'react'
import './Section.css';

// Section component for webpage section
function Section({ tasks, deleteTask, editTask, filterTask, updateStatus }) {

    function filterChange(e) {
        filterTask(e.target.value);
    }

    return (
        <div>
            <section className="py-2">
                <div className='container px-4 px-lg-5 mt-5'>
                    <div className='my-todos-header flex-column flex-lg-row flex-md-row flex-xl-row flex-xxl-row'>
                        <div className='my-todos'><h5>My Todos</h5></div>
                        <div className='mb-3 fw-5 text-bold'>
                            <label htmlFor="filter"><h5>Status Filter : </h5></label>
                            <select
                                className="mx-2 text-white rounded-2"
                                style={{ background: "#FF69B4" }}
                                name="filter"
                                onChange={filterChange}>
                                <option value="all">All</option>
                                <option value="completed">Completed</option>
                                <option value="notcompleted">Not Completed</option>
                            </select>
                        </div>
                    </div>
                    <div className='row gx-4 gx-lg-5 row-cols-sm-1 row-cols-md-2 row-cols-xl-3'>

                        {/* Creating cards for each task in array using map method*/}
                        {tasks.map((todo) => (
                            <Card key={todo.id} todo={todo}
                                updateStatus={updateStatus} editTask={editTask} deleteTask={deleteTask} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

//Function creating cards for each product with their data;
function Card(props) {

    return (
        <div>
            <div className='col mb-5'>
                <div className="card h-100">
                    <div className="card-body fw-bold">
                        <div>
                            <p>Name : {props.todo.name}</p>
                            <p>Description : {props.todo.description}</p>
                            <div className='d-flex'>
                                <label htmlFor="status" className="me-1">Status:</label>

                                <select className={props.todo.status === "Completed" ? "bg-success-subtle " : " bg-danger-subtle "}
                                    id='status'
                                    style={{ borderRadius: "5px", border: "none", background: "#FF69B4" }}
                                    value={props.todo.status}
                                    name="status" onChange={(e) => props.updateStatus(props.todo.id, e.target.value)}>

                                    <option value="Completed"
                                        className={props.todo.status === "Completed" ? "bg-success" : ""}>
                                        Completed
                                    </option>

                                    <option value="Not Completed" className={props.todo.status !== "Completed" ? "bg-danger text-white" : ""}>
                                        Not Completed
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                        <div className="text-center d-flex">
                            <a className='btn btn-success btn-sm form-control m-2'
                                onClick={() => props.editTask(props.todo.id)} href="#" role='button'>Edit</a>
                            <button className='btn btn-danger btn-sm form-control m-2'
                                onClick={() => props.deleteTask(props.todo.id)} type='submit'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section