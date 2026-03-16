import { data } from "@/data/data";

const Skills = () => {
    return (
        <section className="flex gap-2 py-4 flex-wrap ">
            
            {/** Front */}
            <div>
                <h2 className="text-white font-bold "> Frontedn </h2>
                {data.skills.frontend.map((s) => (<span key={s.name} className=" border border-violet-500 rounded-full px-2 py-1 text-xs bg-violet-500/20 text-violet-300 "> {s.name} </span>))}
            </div>

            {/** Backend */}
            <div>
                <h2 className="text-white font-bold"> Backend </h2>
                {data.skills.backend.map((s) => (<span key={s.name} className=" border border-violet-500 rounded-full px-2 py-1 text-xs bg-violet-500/20 text-violet-300 "> {s.name} </span>))}
            </div>

            {/** Herramientas */}
            <div>
                <h2 className="text-white font-bold"> Herramientas </h2>
                {data.skills.herramientas.map((s) => (<span key={s.name} className=" border border-violet-500 rounded-full px-2 py-1 text-xs bg-violet-500/20 text-violet-300 "> {s.name} </span>))}
            </div>
        </section>
    )
}

export default Skills