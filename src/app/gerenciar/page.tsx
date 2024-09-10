'use client';
import Paginacao from "@/components/paginacao";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { GetGerenciamento } from "../../../actions/home/actions";
import { LandingPagePosts } from "../../../types/home/home";
import Gerenciamento from "@/components/gerenciar/page";

export default function PaginaTabela() {
  return (
    <Suspense fallback={<div>Carregando!</div>}>
      <PaginaTabelaContent />
    </Suspense>
  );
}

function PaginaTabelaContent() {
  const [posts, setPosts] = useState<LandingPagePosts[]>([]);
  const [totalPages, settotalPages] = useState(0);
  const searchParams = useSearchParams();

  useEffect(() => {
    const page = searchParams.get('page');
    const currentPage = page ? parseInt(page, 10) : 1;

    GetGerenciamento(currentPage).then(data => {
      setPosts(data.posts);
      settotalPages(data.totalPages);
    });
  }, [searchParams]);

  return (
    <div>
<h1 className="text-2xl font-bold text-center mt-8 text-[#FF9E9E]">Tabela de Produtos</h1>
<Gerenciamento dados={posts} />
      <Paginacao totalPages={totalPages} />
    </div>
  );
}