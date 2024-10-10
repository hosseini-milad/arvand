import Footer from "./Footer"
import Header from "./Header"
import TopNav from "./TopNav"
function Layout(props){
    return(<>
        <TopNav />
        <Header />
        {props.children}
        <Footer />
        </>
    )
}
export default Layout