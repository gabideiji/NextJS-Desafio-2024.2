'use client';
import axios from 'axios';
import getApi from '@/api';
import { useEffect, useState } from 'react';

type ApiProps = {
    id: number;
    title: string;
    text: string;
};

export default function ApiComponent() {
    const [cards, setCards] = useState<ApiProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { identities } = await getApi();
                setCards(identities);
            } catch (error) {
                console.error('Erro ao carregar os dados:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex items-center justify-center w-full bg-[#FFD1D1] p-8 overflow-hidden rounded-lg">
            <div className="flex flex-col md:flex-row gap-8 w-full">
                {cards.map((card) => {
                    return (
                        <div key={card.id} className={`flex-1 p-8 rounded-lg md:w-1/3 bg-[#7e7e7e]`}>
                            <h3 className="text-3xl font-bold mb-4 text-white">{card.title}</h3>
                            <p className="text-lg text-white break-words">{card.text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
