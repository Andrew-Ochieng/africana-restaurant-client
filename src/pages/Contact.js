import  ContactBanner  from "../assets/contact-banner.jpg"

const Contact = () => {
    return ( 
        <>
            <div>
                <div>
                    <img className="h-80 w-full bg-cover" src={ContactBanner} alt="" />

                </div>

                <div className="bg-green-50 flex justify-center items-center">
                    <div className="md:my-48 flex justify-between p-8 bg-white">
                        <div>
                            <h2 className="md:text-xl text-lg font-semibold text-gray-400">Send Us A Message</h2>
                            <div>
                                <div>

                                </div>
                            </div>

                        </div>

                        <div>
                            <h2 className="md:text-xl text-lg font-semibold text-gray-400">Send Us A Message</h2>
                            <form action="#">
                                <div className="my-4 md:space-x-4">
                                    <input className="border-2 border-gray-400 rounded-md py-2 px-4 my-2 " type="text" />
                                    <input className="border-2 border-gray-400 rounded-md py-2 px-4 my-2 " type="email" name="" id="" />
                                </div>
                                <div className="my-4">
                                    <input className="border-2 border-gray-400 rounded-md py-2 px-4 w-full" type="text" name="subject" id="" />
                                </div>
                                <textarea className="border-2 border-gray-400 rounded-md py-2 px-4 my-2 w-full" name="message" cols="30" rows="4"></textarea>
                                <button className="py-2 px-4 rounded-md uppercase font-light bg-green-500 ">
                                    Submit Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Contact;