import data from '../data/data'
import Footer from '../footer/footer'
import Header from './header'
import Section from '../section/section'
import './main.scss'

function Main() {
    return (
        <main className="main">
            <Header></Header>
            <Section></Section>
            <Footer></Footer>
        </main>
    )
}

export default Main