import Link from "next/link";


export const ProjectLayout = ({id, name, description, date, demoLink}) => {
    return <Link 
    href={demoLink}
    target="_blank"
    className="text-sm md:text-base flex items-center justify-between w-full relative overflow-hidden rounded-lg p-4 md:p-6 custom-background" key={id}>
         <div className="flex items-center justify-center space-x-2">
            <h2 className=" text-foreground">{name}</h2>
            <p className=" text-muted hidden md:block">{description}</p>
         </div>
         <div className="mb-2 mx-2 flex-1 bg-transparent border-b border-dashed border-muted self-end" />
            <p className="text-muted sm:text-foreground">
                {new Date(date).toDateString()}
            </p>
         </Link>;
};