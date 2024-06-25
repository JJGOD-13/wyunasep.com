
export default function Product() {
    return (
        <section>
        <div className=" min-h-80 w-auto">
            <div className=" flex flex-col content-center justify-center p-10 gap-10 md:flex-row md:gap-1 md:justify-evenly  ">
                <div className=" grid grid-cols-1 content-center justify-center justify-items-center text-center md:text-left md:justify-items-start   gap-5  md:justify-items-left md:text-balance md:justify-center md:pl-[5rem] lg:pl-[15rem] "> 
                    <h1 className="font-semibold  text-3xl  md:text-4xl w-auto  ">Hydro-Cyclone Efficiency</h1>
                    <h5 className=" md:w-1/2  ">Our Hydro-cyclone technology provides unmatched separation capabilities. Allowing for faster, more efficient separation with a much smaller footprint.</h5>
                </div>
                <div className=" flex  items-center content-center justify-center lg:w-3/6 lg:justify-start lg:pr-[5rem]  md:w-3/4  "> 
                    <ul className=" grid grid-cols-2 text-center flex-col sm: lg:grid-cols-1 lg:text-start list-disc ">
                        <li className=" p-5  text-gray-50 lg:p-4 lg:text-xl">No moving parts</li>
                        <li className=" p-5  text-gray-50 lg:p-4 lg:text-xl">No chemicals</li>
                        <li className=" p-5  text-gray-50 lg:p-4 lg:text-xl">No settling period</li>
                        <li className=" p-5  text-gray-50 lg:p-4 lg:text-xl"> Self Cleaning</li>
                    </ul>
                </div>
                

            </div>

        </div>
        </section>
    )
}