'use server'


export async function sendEnquiry(prevstate:any, formdata: FormData) {

    // Validate data

    const data = {
        name : formdata.get('name'),
        email : formdata.get('email'),
        text : formdata.get('description'),
        attachment : formdata.get('file'),
    }


    // Send to relevant email

    // Return Statements

    
}