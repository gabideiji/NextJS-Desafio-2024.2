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
export async function maisprodutos (){
    const posts = await prisma.product.findMany({
        select:{
            id: true,
            title: true,
            description: true,
            price: true,
            image: true
        },
    })
    return posts
}

export async function GetPesquisa(query: string) {
    const posts = await prisma.product.findMany({
        where: {
            OR: [
                { title: { contains: query, mode: "insensitive" } },
                { description: { contains: query, mode: "insensitive" } },
            ],
        },
        select: {
            id: true,
            title: true,
            description: true,
            price: true,
            image: true
        },
    })
    return posts
}
export async function GetGerenciamento (currentPage: number) {
    const offset = (currentPage - 1) * 8
    const posts = await prisma.product.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            price: true,
            image: true
        },
        take: 8,
        skip: offset,
        orderBy: {
            title:'asc'
        }
    })
    const count = await prisma.product.count();
    const totalPages = Math.ceil(count / 8);

    return { posts, count, totalPages }
}
export async function DeleteProduto (id: number | undefined) {
    await prisma.product.delete({
        where: {
            id: id
        }
    })
}
export async function AddProduto (produto: { title: string, description: string, price: number, image: string }) {
    await prisma.product.create({
        data: {
            title: produto.title,
            description: produto.description,
            price: produto.price,
            image: produto.image
        }
    })
}
export async function EditaProduto(produto: { id: number, title: string, description: string, price: number, image: string }) {
    await prisma.product.update({
        where: { id: produto.id }, 
        data: {
            title: produto.title,
            description: produto.description,
            price: produto.price,
            image: produto.image
        }
    })
}