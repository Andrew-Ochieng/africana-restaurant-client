import { useState } from "react";

const ShippingForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [county, setCounty] = useState('')
    const [ward, setWard] = useState('')
    const [postalCode, setPostalCode] = useState('')


    const handleCheckout = (e) => {
        e.preventDefault()

    }

    return ( 
        <>
            <form onSubmit={handleCheckout}>
                <h1 className="md:text-2xl text-xl md:mb-8 font-semibold text-gray-800">
                    Checkout
                </h1>
                <div>   
                    <label htmlFor="username">username</label><br />
                    <input
                        type="username"
                        className="form-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>   
                    <label htmlFor="email">email</label><br />
                    <input
                        type="email"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label><br />
                    <input
                        type="tel"
                        className="form-input"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div>   
                    <label htmlFor="county">county</label><br />
                    <input
                        type="county"
                        className="form-input"
                        value={county}
                        onChange={(e) => setCounty(e.target.value)}
                    />
                </div>
                <div>   
                    <label htmlFor="ward">ward</label><br />
                    <input
                        type="ward"
                        className="form-input"
                        value={ward}
                        onChange={(e) => setWard(e.target.value)}
                    />
                </div>
                <div>   
                    <label htmlFor="postal-code">Postal code</label><br />
                    <input
                        type="text"
                        className="form-input"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                </div>
                <button 
                    type="submit" 
                    className="my-2 py-2 px-4 btns"
                    >
                    Payment
                </button>
            </form>
        </>
     );
}
 
export default ShippingForm;