import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <>
            <div>
                <footer>
                    <div>
                        <div>
                            Social Icons here
                        </div>
                        <div>
                            <Link to='/termsandconditions'>
                                Terms & Conditions
                            </Link>
                            <Link to='/paymentandrefunds'>
                                Payment & Refunds
                            </Link>
                            <Link to='/becomerider'>
                                Become A Rider
                            </Link>
                        </div>
                    </div> 
                </footer>
            </div>
        </>
     );
}
 
export default Footer;