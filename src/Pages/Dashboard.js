import DashboardHeader from "../modules/Dashboard/DashboardHeader"
import DashboardSideBar from "../modules/Dashboard/DashboardSideBar"

import '../css/dashboard.css';

function Dashboard(){
    return(
        <section className="dashboard">
            <div className="dash-container">
                <div className="site-wrapper site-wrapper2 active" id="target">
                    <DashboardHeader />
                    <DashboardSideBar />
                </div>
            </div>
        </section>
    )
}
export default Dashboard