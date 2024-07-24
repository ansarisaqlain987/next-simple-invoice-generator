import { ApiResponse } from "@/types";
import { LoginApiInput } from "@/zod-types";
import {z} from 'zod';

const loginRouteHandler = (body: any): ApiResponse => {
    const parsed = LoginApiInput.safeParse(body);
    if(parsed.error){
        return {
            code: 400,
            message: 'Invalid input',
            error: [parsed.error],
            data: {}
        }
    }
    return {
        code: 200,
        message: 'Email sent successfuly',
        data: {},
        // error: ['error']
    }
}
export async function POST(request: Request) {
    const body = await request.json();    
    return Response.json(loginRouteHandler(body))
}