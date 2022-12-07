import { Link } from "react-router-dom";

const SignUp = () => {
    return ( 
        <>
            <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
                <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style="max-width:1000px">
                    <div className="md:flex w-full">
                        <div className="hidden md:block w-1/2 bg-blue-500 py-10 px-10">
                           {/* <img src="" alt="" /> */}
                        </div>
                        <div class="w-full md:w-1/2 py-10 px-6 md:px-10">
                            <div class="text-center mb-10">
                                <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
                                <p>Enter your information to register</p>
                            </div>
                            <div>
                                <div class="flex -mx-3">
                                    <div class="w-1/2 px-3 mb-5">
                                        <label for="" class="text-xs font-semibold px-1">First name</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input type="text" required class="w-full -ml-10 pl-4 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="John"/>
                                        </div>
                                    </div>
                                    <div class="w-1/2 px-3 mb-5">
                                        <label for="" class="text-xs font-semibold px-1">Last name</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input type="text" required class="w-full -ml-10 pl-4 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Smith"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex -mx-3">
                                    <div class="w-full px-3 mb-5">
                                        <label for="" class="text-xs font-semibold px-1">Email</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input type="email" required class="w-full -ml-10 pl-4 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="johnsmith@example.com"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex -mx-3">
                                    <div class="w-full px-3 mb-12">
                                        <label for="" class="text-xs font-semibold px-1">Password</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input type="password" required class="w-full -ml-10 pl-4 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="************"/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <button className="w-full text-center mx-auto bg-blue-500 duration-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>

                                <div className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Already have an account?
                                    <Link 
                                        to='/signin'
                                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                    >
                                        Sign In
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default SignUp;