import List from '../list/list'
import useTil from '../useTil/UseTil'
import Navbar from '../navbar/navbar';
function Header() {
    const { value, setValue } = useTil()

    // OnValue change ishga tushirish
   const onValue = (evt) => {
    setValue(evt.target.value);
    localStorage.setItem('til', JSON.stringify(evt.target.value))
    }
    return (
        <header className="header">
            <Navbar />
            <List />
        </header>
    )
}

export default Header