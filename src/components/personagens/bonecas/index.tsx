"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type CardsPersonagensProps = {
  title: string;
  src: string;
};

export default function CardsPersonagens({ title, src }: CardsPersonagensProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pesquisa/?query=${title.toLowerCase()}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center justify-center gap-8 max-w-sm 2xl:max-w-md 3xl:max-w-lg p-8 transition-shadow duration-200 rounded-md hover:shadow-2xl border border-pink-300 cursor-pointer"
    >
      <Image
        src={src}
        alt={title}
        width={200}
        height={120}
        className="w-[200px] h-[200px] object-cover rounded-md"
      />
      <h1 className="text-center text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4x text-pink-950 font-semibold cursor-default">
        {title}
      </h1>
    </div>
  );
}
