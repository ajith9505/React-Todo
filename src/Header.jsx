function Header({ tasks, setTasks, addTask, newTask, setNewTask, edit, setEdit }) {


    //Getting the inputs from input fields
    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value })
    }

    //Handling submit
    const handleSubmit = (e) => {
        e.preventDefault();

        //code to edit function
        if (edit) {
            const editTask = tasks.find((task) => edit === task.id);
            const updatedTask = tasks.map(task =>
                task.id === editTask.id ?
                    (task = { id: task.id, name: newTask.name, description: newTask.description, status: task.status }) :
                    { id: task.id, name: task.name, description: task.description, status: task.status });
            setTasks(updatedTask);
            setEdit(0);
            setNewTask({
                id: 0,
                name: '',
                description: '',
                status : 'Not Completed'
                
            });
            return;

        } 
        //Code to add new task
        else {
            addTask(newTask);
            setNewTask({
                id: 0,
                name: '',
                description: '',
                status : 'Not Completed'
            });
        }

    }

    return (
        <header>
            <form className='container text-center' onSubmit={handleSubmit}>
                <h3 className='header fw-bold text-success p-5'>My todo</h3>
                <div className='input-group input-group-sm d-flex justify-content-center flex-column flex-lg-row flex-md-row flex-xl-row flex-xxl-row'>

                    <input className='me-2 mb-2 rounded-3'
                        onChange={inputChangeHandler}
                        value={newTask.name}
                        type="text"
                        id='name'
                        name='name'
                        placeholder='Todo Name' required />

                    <input className='me-2 mb-2 rounded-3'
                        onChange={inputChangeHandler}
                        value={newTask.description}
                        type="text" id='description'
                        name='description'
                        placeholder='Todo Description' required />

                    <button className='btn btn-success rounded-3 btn-sm' type='submit'>
                        {edit ? 'Update' : 'Add Todo'}</button>
                </div>
            </form>
        </header>
    )
}

export default Header