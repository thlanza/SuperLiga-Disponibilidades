import { connectToMongoDB } from "@/db/connect";
import Disponibilidade from "@/models/disponibilidade";
import { NextResponse } from "next/server";


connectToMongoDB();

export async function GET(req) {
    try {
        const disponibilidades = await Disponibilidade.find({});
        
        const response = NextResponse.json({
            disponibilidades
        })

        return response;
    
    } catch (error) {
        console.log("ERRO PEGANDO DISPONIBILIDADES", error.message);
        return NextResponse.json({error: error.message}, {status: 500})
    }
}