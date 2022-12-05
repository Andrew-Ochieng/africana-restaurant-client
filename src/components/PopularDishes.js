import PopularDishesImg from "../assets/menu-list.jpg"

const PopularDishes = () => {
    return ( 
        <>
            <div className="relative ">
                <img src={PopularDishesImg} alt="" />
                <div className="absolute md:top-16 top-4 left-0 right-0 z-24 ">
                    <h1 className="text-center md:text-3xl text-2xl text-gray-900 mb-2 font-semibold">Browse Menu</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo eaque blanditiis. Voluptas, consectetur saepe.</p>
                </div>
            </div>
        </>
     );
}
 
export default PopularDishes;