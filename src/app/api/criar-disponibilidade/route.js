import { connectToMongoDB } from "@/db/connect";
import Disponibilidade from "@/models/disponibilidade";
import { NextResponse } from "next/server";

connectToMongoDB();

export async function POST(req) {
    try {
        const reqBody = await request.json()
        const {username, email, password, secretaria} = reqBody
        const disponibilidadeExiste = await Disponibilidade.findOne({email})

        if(disponibilidadeExiste) {
            return NextResponse.json({error: "Disponibilidade já existe"}, {status: 400})
        }


        const novaDisponibilidade = new Disponibilidade({
            username,
            email,
            secretaria,
            password: hashedPassword,
        })

        const disponibilidadeSalva = await novaDisponibilidade.save()
    
        const response = NextResponse.json({
            message: "Disponibilidade criada com sucesso",
            success: true,
            disponibilidadeSalva
        })


        return response;


    } catch (error) {
        console.log("ERRO SALVANDO DISPONIBILIDADE", error.message)
        return NextResponse.json({error: error.message}, {status: 500})
    }
}















