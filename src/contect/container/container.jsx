import './container.scss'
import { Header, Main, Nav } from '../index'


const Container = () =>{
    return (
        <div className="container">
            <Nav />
            <div className="big">
                <Header/>
                <Main />
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Container
