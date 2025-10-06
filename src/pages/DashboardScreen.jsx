const DashboardScreen = () => {
    return(
        <div>
            <div className="row min-vh-100 g-0">
                <div className="col-md-2 bg-secondary-subtle container">
                     <div className="p-3">
                        <h3>ProjectPulse</h3>
                        <ul className="list-unstyled">
                            <li>Dashboard</li>
                            <li>Project</li>
                            <li>Team</li>
                            <li>Reports</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-10">
                    <div class="p-3">
                        <h2>Main Content</h2>
                        <p>Your main content goes here...</p>
                    </div>   
                </div>
            </div>
        </div>
    )
}
export default DashboardScreen;