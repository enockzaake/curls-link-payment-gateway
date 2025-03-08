import { NextResponse } from "next/server";


export async function GET():Promise<NextResponse> {
    return new NextResponse('Curls Link API Gateway!', {
        status: 200,
      })

}
