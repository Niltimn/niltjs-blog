import { Text } from "thon-ui";



export default function MainFooter(){
    const linkClassName = "text-gray-500 hover:text-gray-800 transition-all durantion-200ms ease-in-out"
    return ( 
    <footer className="flex justify-between items-center pt-4 border-t border-solid border-t-gray-200"> 
    <div className="flex flex-col">
        <Text className="text-gray-800 italic font-bold"> NiltJs!</Text>
        <Text variant="xs" className="text=gray-500"> devnilton@gmail.com - Eclesiastes 3:1 </Text>
    </div>
    <ul className="flex gap-2.5">
        <li><a href="https://github.com/Niltimn" target="blank" rel="noopener noreferrer"> <Text variant="xs" className={linkClassName}> GitHub</Text></a></li>
        <li><a href="https://www.linkedin.com/in/elenilton-fabiano-2b710b1ba/" target="blank" rel="noopener noreferrer"> <Text variant="xs" className={linkClassName}>LinkedIn</Text> </a></li>
        <li><a href="https://www.instagram.com/niltjs/" target="blank" rel="noopener noreferrer" ><Text variant="xs" className={linkClassName}>Instagram</Text></a></li>
    </ul>
    </footer> 
    );
}