"use server"

  
import prisma from "@/lib/db"

export default async function getProdutosLanding(){
    const posts = await prisma.product.findMany({
        select:{
            id: true,
            title: true,
            description: true,
            price: true,
            image: true
        },
        take:8
    })
    return posts
}