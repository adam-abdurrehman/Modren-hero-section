import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='logo'>Electra</div>
            <ul>
                <li><a href='#'> Home</a></li>
                <li><a href='#'> Cars</a></li>
                <li><a href='#'> MODELS</a></li>
                <li><a href='#'> Store</a></li>
                <li><a href='#'> Services</a></li>
                <li><a href='#'> Brand/About us</a></li>
                <li><a href='#' className='contact'> Contact us</a></li>
            </ul>
        </div>
    )
}

export default Navbar