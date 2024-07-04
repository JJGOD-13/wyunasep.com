'use server'

import { Resend } from "resend"

import { revalidatePath } from "next/cache"
import { deleteCache } from "next/dist/server/lib/render-server"
import Document from "next/document"
import { cache } from "react"
import { File } from "buffer"
import { writeFile } from "fs"

const api = process.env.RESEND_API_KEY;

const domain = process.env.DOMAIN ?? ''; 
const to = process.env.TO ?? '';

class EmailData {

     name: any;
     email: any;
     attachment: File | null;
     text: any;

    constructor( name : any , email : any, text : any , attachment : File) {
        this.name = name;
        this.email = email;
        this.text = text;
        this.attachment = attachment
    }
}


export async function sendEnquiry(prevstate:any, formdata: FormData) {

    // Validate data
    const data = new EmailData(
        formdata.get('name'),
        formdata.get('email'),
        formdata.get('description'),
        formdata.get('file') as unknown as File,
    )

    // Validate name and email
    const regex = /^\S+@\S+\.\S+$/;

    if ( /\d/.test(data.name)) { return { message : "Invalid Name", code : 1}}
    if ( !regex.test(data.email)) { return { message : "Inavlid Email", code : 2}}

    // Validate file
    const file : File | null = data.attachment;
    let sendFile: Buffer | null = null;
    
    if (file){
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes)
        console.log(buffer)
        sendFile = buffer
    }

    

    // Send to relevant email
    const resend = new Resend(api)


    resend.emails.send({
        from : 'onboarding@resend.dev',
        to : 'jayantgodse13@gmail.com',
        subject : 'Website Lead',
        html: generateEmail(data),
        reply_to: data.email,
        attachments: [
            {
                filename: data.attachment?.name,
                content: sendFile || undefined,
            },
        ],
        

    });

    console.log(data.attachment)
    revalidatePath('/')

    return { message : "Success", code : 0 }
}

function generateEmail (data : EmailData) : string{
    
    const emailString = `
        <div>
            <div className=" flex ">
                <p>Name:</p>
                <p>${data.name}</p>
            </div>
            <div className=" flex ">
                <p>Email:</p>
                <p>${data.email}</p>
            </div>

            <div className=" flex ">
                <p>Requirement:</p>
                <p>${data.text ? data.text : ''}</p>
            </div>
        </div>
    `;

    return emailString
}