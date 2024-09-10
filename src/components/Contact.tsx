"use client";
import { useFormState, useFormStatus } from "react-dom";
import { sendEnquiry } from "@/app/sendEnquiry";
import clsx from "clsx";
import { useRef } from "react";

const initialState = {
  message: null,
  name: null,
  email: null,
  text: null,
};

export default function Contact() {
  const [state, formAction] = useFormState(sendEnquiry, initialState);
  const ref = useRef<HTMLFormElement>(null);

  // Checking if the form was properly processed.
  if (state.code === 0) {
    ref.current?.reset();
  }

  return (
    <div className=" min-h-fit rounded-xl ">
      <form
        noValidate
        ref={ref}
        id="contactForm"
        action={formAction}
        method="post"
        className=" grid grid-cols-1 gap-5 justify-center justify-items-center"
      >
        <div className=" form-control w-full max-w-xs gap-1">
          <div className=" label ">
            <span className=" label-text"> Name </span>
          </div>
          <input
            required
            type="text"
            name="name"
            id="name"
            className=" input input-bordered input-sm  w-full max-w-xs required  required:outline-error valid:outline-success "
          />

          <div className=" label ">
            <span className=" label-text"> Email </span>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            className=" input input-bordered input-sm  w-full max-w-xs invalid:outline-error valid:outline-success"
          />

          <div className=" label ">
            <span className=" label-text"> Description </span>
          </div>
          {/* Maybe make all of the required things only appear after an initial failure from the server. */}
          <input
            required
            type="text"
            id="description"
            name="text"
            className=" textarea textarea-bordered textarea-sm w-full max-w-md md:textarea-md md:p-5 required:outline-error valid:outline-success"
          />

          <div className=" label ">
            <span className=" label-text"> Attachments </span>
          </div>
          <input
            type="file"
            id="file"
            name="file"
            className=" file-input file-input-bordered file-input-sm "
          />
        </div>
        <div className=" p-5 gap-2 flex flex-col justify-center">
          {/* <input  type="submit" className=" btn " /> */}
          <SubmitButton />

          <p
            className={clsx(" text-center ", {
              " text-success ": state.code === 0,
              " text-error ": state.code > 0,
            })}
          >
            {state.message}
          </p>
        </div>
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className=" btn " type="submit" aria-disabled={pending}>
      Submit
    </button>
  );
}

function FormStatusIndicator(state: { message: any }) {
  if (!state.message) {
    return <div className=" text-error ">Something went wrong</div>;
  } else {
    return <div className=" text-success ">Form Submitted</div>;
  }
}

