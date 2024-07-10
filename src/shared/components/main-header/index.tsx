import Image from "next/image";
import { Text } from "thon-ui";
import profilePicture from './assets/profile-pic.png'

export default function MainHeader(){
    return <header className={"lg:h-screen pt-8 pb-6 px-7 lg:pt-0 lg:pb-0 flex flex-col justify-center items-center  bg-gray-100"}>
        <div className="flex gap-3 items-center">
        <Image 
        src={profilePicture} alt="Foto de perfil de Elenilton Fabiano"
         className="w-[5.5rem] h=[5.5rem]"
         />
         
         <div>
            <Text as="h1" variant="3xl" className="text-gray-800">
                Elenilton Fabiano
            </Text>
            <Text as="div" variant="xs" className="text-gray-500 italic -mt-0.5">
                Software Engineer | Frontend Developer
            </Text>
        </div>
        </div>
        <div className="w-full lg:w-[20rem] mt-6 lg:mt-12">
            <Text as="p" variant="sm" className="text-gray-500 italic">
            Desenvolvendo soluções inovadoras desde 2022, sempre com foco na criatividade e na resolução de problemas. 
            </Text>
            <Text as="p" variant="sm" className="text-gray-500 italic mt-2">
                Você pode me chamar de Nilton! :3
            </Text>
        </div>
    </header>
}