import { data } from "../data/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSocial = () => {

    // Funcion de diccionario de los iconos del componete  
    const getIcon = (keyName: string) =>{
        switch(keyName){
            case "github": return <FaGithub className="text-2xl"/>;
            case "linkedin": return <FaLinkedin className="text-2xl"/>
            default: return null;
        }
     }

    return(

        <div className="flex justify-end gap-2 text-white p-8">      
            {Object.entries(data.social).map(([key, value]) =>(
                <span key={key}  className="flex items-center gap"> 
                    {getIcon(key)}
                    <a href={value} target="_blank"> {key}</a>
                 </span>   
                ))}
        </div>
    )
}

export default ContactSocial;