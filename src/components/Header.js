import Logo from './Assets/logo1.png'

const Header = () => {
    return (
        <header className={'header'}>
            <img style={{width: '200px'}} src={Logo} alt=""/>
            <div className={'nav-bar'}>
                <a href="#">About</a>
                <a href="#">Users</a>
                <a href="#">Store</a>
                <a href="#">Contacts</a>
                <a href="#">Reviews</a>
            </div>
            <div>
                <button>
                    Donate
                </button>
            </div>
        </header>
    )
}

export default Header;