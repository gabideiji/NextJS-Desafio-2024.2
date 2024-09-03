type TitleProps={
    title: string;
    subtitle: string;
}

export default function Title({title, subtitle}: TitleProps){
    return (
        <div className="flex flex-col justify-center items-center">
            <span className="text-xl xl:text-2xl 2xl:text-3x1 3x1:text-4x1 text-pink-950 uppercase text-center">{subtitle}</span>
            <h1 
            style={{ color: '#FF9E9E' }}
            className="text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold leading-relaxed text-center">{title}</h1>
        </div>
    )
}