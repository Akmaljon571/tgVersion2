import Nav from './nav'
import List from '../list/list'
import useTil from '../useTil/UseTil'
import Navbar from './navbar';
function Header() {
    const { value, setValue } = useTil()

    // OnValue change ishga tushirish
   const onValue = (evt) => {
    setValue(evt.target.value);
    localStorage.setItem('til', JSON.stringify(evt.target.value))
    }
    return (
        <header className="header">
            <Nav />
            <Navbar />
            <List />
            <select onChange={onValue} defaultValue = {value}>
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
              <option value="en">Eng</option>
            </select>
        </header>
    )
}

export default Header