import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"


const Footer = () => {
    return ( 
        <>
            <div className="">
                <footer className="md:mx-32 mx-8 md:py-16 py-8">
                    <div>
                        <div className="flex justify-center items-center">
                            <BsFacebook className="mx-4 my-2 md:text-2xl text-xl" />
                            <BsInstagram className="mx-4 my-2 md:text-2xl text-xl" />
                            <BsTwitter className="mx-4 my-2 md:text-2xl text-xl" />
                        </div>
                        <div className="md:flex justify-center items-center text-center md:space-x-8 space-x-4 md:text-base text-sm">
                            <button>
                                Terms & Conditions
                            </button>
                            <button>
                                Payment & Refunds
                            </button>
                            <button>
                                Become A Rider
                            </button>
                        </div>
                    </div> 
                </footer>
            </div>
        </>
     );
}
 
export default Footer;