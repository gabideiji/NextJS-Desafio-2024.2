/* eslint-disable @next/next/no-async-client-component */
'use client';
import Search from "@/components/search";
import { GetPesquisa } from "../../../actions/home/actions";
import CardsProdutos from "@/components/landing-page/produtos";


export default async function Pesquisa({
    searchParams,
}: {
    searchParams: {
        query?: string;
        page?: string;
    }
}) {
    const query = searchParams?.query || "";
    const page = searchParams?.page || 1;

    const posts = await GetPesquisa(query);

    return (
        <div >
            <div className="flex gap-14 flex-wrap items-center justify-center">
                {posts.map((post) => (
                    <CardsProdutos key={post.id} posts={post} />
                ))}
            </div>

        </div>
    );
}