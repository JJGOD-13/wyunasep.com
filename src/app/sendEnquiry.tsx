'use server'

import { revalidatePath } from "next/cache"
import { deleteCache } from "next/dist/server/lib/render-server"
import Document from "next/document"
import { cache } from "react"


export async function sendEnquiry(prevstate:any, formdata: FormData) {

    // Validate data
    console.log("Hello World")
    console.log(formdata.get('name'))

    const data = {
        name : formdata.get('name'),
        email : formdata.get('email'),
        text : formdata.get('description'),
        attachment : formdata.get('file'),
    }


    // Send to relevant email

    console.log(data)


    revalidatePath('/')
    

    // Return Statements

    return { message : "Success", code : 0 }

    
}