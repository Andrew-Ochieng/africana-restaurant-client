import HeroImage from "../../assets/hero.png"
import { Link } from "react-router-dom";

const Hero = () => {
    return ( 
        <>
            <div className="bg-gray-100 md:px-32">
                <div className="grid md:grid-cols-2 mx-6 md:py-32 py-12 md:space-y-0 space-y-8">
                    <div>
                        <p className="font-medium md:text-xl">Easy way to make an order</p>
                        <h1 className="mt-4 md:mb-8 mb-4 md:text-6xl text-4xl font-bold text-gray-700 ">The Home Of African Dishes</h1>
                        <p className="font-light ">You make an order, we deliver it right at your doorstep!</p>
                        <div className="md:pt-8 pt-4">
                            <Link 
                                to='/menus'
                                className="btns"
                                >
                                Order Now
                            </Link>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={HeroImage} alt="" />
                    </div>
                </div>
                
            </div>
        </>
     );
}
 
export default Hero;