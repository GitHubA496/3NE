import clsx from "clsx"

const ItemLayout = ({children,className}) =>{
    return(
        <div className={clsx("bg-background/20 border border-solid border-accent/30 backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm p-4 sm:p-8 rounded-xl flex items-center justify-center", className)}>
            {children}
        </div>
    )
}


export const AboutDetails=()=>{
    return(
    <section className="py-20 w-full">
        <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
            <ItemLayout className={"col-span-full lg:col-span-8 row-span-2"}>
                <div className="">
               <h2 className=" text-lg sm:text-2xl capitalize text-left">Architect of Enchanement</h2> 
                <p className="font-light text-xs  sm:text-sm md:text-base">My journey in web development is powered by an array of mystical tools and languages, with JavaScript casting the core of my enchantments. I wield frameworks like React.js and Next.js with precision, crafting seamless portals (websites) that connect realms (users) across the digital universe. The ancient arts of the Jamstack empower me to create fast, secure, and dynamic experiences, while my design skills ensure every creation is not only functional but visually captivating. Join me as I continue to explore new spells and technologies to shape the future of the web.</p>
                </div>
            </ItemLayout>
            <ItemLayout className={"col-span-full sm:col-span-6 lg:col-span-4 "}>
                <div className="text-accent font-semi-bold sm:text-2xl md:text-3xl lg:text-5xl">
                 7 <sub className="font-semi-bold text-base"> projects</sub>
                </div>
            </ItemLayout>
            <ItemLayout className={"col-span-full sm:col-span-6 lg:col-span-4 "}>
                <div className="text-accent font-semi-bold sm:text-2xl md:text-3xl lg:text-5xl">
                 1+ <sub className="font-semi-bold text-base">years of experience</sub>
                </div>
            </ItemLayout>
            <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                <img loading="lazy" src="https://github-readme-stats.vercel.app/api/top-langs/?username=GitHubA496&theme=transparent&hide_border=true&title_color=fefe5b&text_color=ffffff" alt="GitHub Stats" />
            </ItemLayout>
            <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                <img className="w-full h-auto" loading="lazy" 
                // src="https://github-readme-stats.vercel.app/api?username=GitHubA496&show_icons=true&theme=transparent&hide_border=true&title_color=fefe5b&text_color=ffffff"
                src="https://github-readme-streak-stats.herokuapp.com?user=GitHubA496"
                alt="GitHub Stats" /> 
                {/* <a href="https://git.io/streak-stats"><img src= alt="GitHub Streak" /></a> */}

            </ItemLayout> 
            <ItemLayout className={"col-span-full "}>
                <img className=" w-full h-auto" loading="lazy" src="https://skillicons.dev/icons?i=html,css,react,nextjs,tailwind,javascript,typescript,python,git,github,docker,postgresql,mongodb,mysql,django,tensorflow,pytorch,express,nodejs,linux," alt="GitHub Stats" /> 
            </ItemLayout> 
        </div>
    </section> 
    )
}