'use client'
import { useFormState, useFormStatus } from "react-dom"
import { sendEnquiry } from "@/app/sendEnquiry"

const initialState = {

    message: null,
}

export default function Contact() {
    const [ state, formAction ] = useFormState( sendEnquiry, initialState );
    return (
        <div className=" min-h-fit rounded-xl ">
            <form action={ formAction } method="post" className=" grid grid-cols-1 gap-5 justify-center justify-items-center">

                <label className=" form-control w-full max-w-xs gap-1">
                    <div className=" label ">
                        <span className=" label-text"> Name </span>
                    </div>
                    <input type="text" name="Name" id="name" className=" input input-bordered input-sm  w-full max-w-xs  "/>

                    <div className=" label ">
                        <span className=" label-text"> Email </span>
                    </div>
                    <input type="email" id="email" className=" input input-bordered input-sm  w-full max-w-xs  " />

                    <div className=" label ">
                        <span className=" label-text"> Description </span>
                    </div>
                    <input type="text" id="description" className=" textarea textarea-bordered textarea-lg w-full max-w-md md:textarea-lg" />

                    <div className=" label ">
                        <span className=" label-text"> Attachments </span>
                    </div>
                    <input type="file" id="file" className=" file-input file-input-bordered file-input-sm " />
                </label>
                <div className=" p-5">
                <SubmitButton />

                </div>

            </form>
        </div>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button className=" btn " type="submit" aria-disabled={ pending }>
            Submit
        </button>
    )
}