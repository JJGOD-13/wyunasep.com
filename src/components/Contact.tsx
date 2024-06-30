
export default function Contact() {
    return (
        <div className=" min-h-fit rounded-xl ">
            <form action="" method="post" className=" grid grid-cols-1 gap-5 justify-center justify-items-center">

                <label className=" form-control w-full max-w-xs gap-1">
                    <div className=" label ">
                        <span className=" label-text"> Name </span>
                    </div>
                    <input type="text" name="Name" id="" className=" input input-bordered input-sm  w-full max-w-xs "/>

                    <div className=" label ">
                        <span className=" label-text"> Email </span>
                    </div>
                    <input type="email" className=" input input-bordered input-sm  w-full max-w-xs" />

                    <div className=" label ">
                        <span className=" label-text"> Description </span>
                    </div>
                    <input type="text" className=" textarea textarea-bordered textarea-lg w-full max-w-md" />

                    <div className=" label ">
                        <span className=" label-text"> Attachments </span>
                    </div>
                    <input type="file" className=" file-input file-input-bordered file-input-sm " />
                </label>
                <div className=" p-5">
                <input type="submit" className=" btn  " />

                </div>

            </form>
        </div>
    )
}