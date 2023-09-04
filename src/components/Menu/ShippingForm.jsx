import { useState } from "react";

const ShippingForm = () => {
    const [locationAddress, setLocationAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [county, setCounty] = useState('')
    const [ward, setWard] = useState('')


    const handleCheckout = (e) => {
        e.preventDefault()

    }

    return ( 
        <>
            <form onSubmit={handleCheckout}>
                <h1 className="md:text-2xl text-xl md:mb-8 font-semibold text-gray-700">
                    Address & Payment:
                </h1>
                <div className="md:flex justify-between gap-4">
                    <div>   
                        <label htmlFor="county">County</label><br />
                        <input
                            type="county"
                            className="form-input"
                            value={county}
                            onChange={(e) => setCounty(e.target.value)}
                        />
                    </div>  
                    <div>   
                        <label htmlFor="ward">Ward</label><br />
                        <input
                            type="ward"
                            className="form-input"
                            value={ward}
                            onChange={(e) => setWard(e.target.value)}
                        />
                    </div>
                </div>
                <div className="md:flex justify-between gap-4">
                    <div>   
                        <label htmlFor="location">Location Address</label><br />
                        <input
                            type="ward"
                            className="form-input"
                            value={locationAddress}
                            onChange={(e) => setLocationAddress(e.target.value)}
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
                </div>
                <button 
                    type="submit" 
                    className="my-2 py-2 px-4 btns"
                    >
                    Confirm Payment
                </button>
            </form>
        </>
     );
}
 
export default ShippingForm;