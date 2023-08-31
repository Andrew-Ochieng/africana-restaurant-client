import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"


const Footer = () => {
    return ( 
        <>
            <div className="bg-green-200">
                <footer className="md:mx-32 mx-6 md:py-16 py-8">
                    <div>
                        <div className="flex justify-center items-center">
                            <BsFacebook className="mx-4 my-2 md:text-2xl text-xl text-gray-800" />
                            <BsInstagram className="mx-4 my-2 md:text-2xl text-xl text-gray-800" />
                            <BsTwitter className="mx-4 my-2 md:text-2xl text-xl text-gray-800" />
                        </div>
                        <div className="md:flex justify-center items-center text-center md:space-x-8 space-x-2 md:mt-0 mt-2 md:text-base text-sm">
                            <button className="md:my-2  my-1">
                                Terms & Conditions
                            </button>
                            <button className="md:my-2  my-1">
                                Payment & Refunds
                            </button>
                            <button className="md:my-2  my-1">
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