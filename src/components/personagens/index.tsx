import Title from "../title";
import PersonagensCard from "./cards";
export default function Personagens (){
    return (
        <div className="w-full space-y-12">
            <Title title="Compre pelo seu personagem favorito!" subtitle="Em Destaque" />
            <PersonagensCard />
            <PersonagensCard />
            <PersonagensCard />
            <PersonagensCard />
            <PersonagensCard />
            <PersonagensCard />

        </div>
    )
}