const TaskForm = () => {
    return(
        <div className="container">
            <h3 className="my-3">Create New Task</h3>
            <form>
                <div className="mb-3 col-md-6">
                    <label htmlFor="taskName" className="form-label">Task Name:</label>
                    <input id="taskName" type="text" className="form-control" required/>     
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="selectProject" className="form-label">Select Project:</label>
                    <select id="selectProject" className="form-select" required>
                        <option>--Select Project--</option>
                    </select>     
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="selectTeam" className="form-label">Select Team:</label>
                    <select id="selectTeam" className="form-select" required>
                        <option>--Select Team--</option>
                    </select>     
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="selectOwners" className="form-label">Select Owners:</label>
                    <select id="selectOwners" className="form-select" required>
                        <option>--Select Owners--</option>
                    </select>     
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="timeToComplete" className="form-label">Estimated Time:</label>
                    <input id="timeToComplete" type="number" className="form-control" required/>     
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="selectStatus" className="form-label">Select Status:</label>
                    <select id="selectStatus" className="form-select" required>
                        <option value={''}>--Select Status--</option>
                        <option value={'To Do'}>To Do</option>
                        <option value={'In Progress'}>In Progress</option>
                        <option value={"Completed"}>Completed</option>
                        <option value={"Blocked"}>Blocked</option>
                    </select>     
                </div>
                <button className="btn btn-secondary">Close</button> 
                <button type="submit" className="btn btn-primary ms-3">Submit</button>
            </form>
        </div>
    )
}
export default TaskForm;