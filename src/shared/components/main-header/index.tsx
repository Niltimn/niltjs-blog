import Image from 'next/image';
import Link from 'next/link';
import { Text } from 'thon-ui';
import profilePicture from './assets/profile-pic.png';

function NavigatorItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="py-2 px-3 rounded-lg hover:bg-gray-200 transition duration-200 ease-in-out"
    >
      <Text variant="sm" className="font-bold">
        {children}
      </Text>
    </Link>
  );
}

export default function MainHeader() {
  return (
    <header
      className={`lg:h-screen relative lg:fixed lg:w-[34.25rem]
      left-0 top-0
      pt-8 pb-6 px-7 lg:pt-0 lg:pb-0
      flex flex-col justify-center items-center 
      bg-gray-100`}
    >
      <div className="flex gap-3 items-center">
        <Image
          src={profilePicture}
          alt="Foto de Perfil do Elenilton Fabiano"
          className="w-[5.5rem] h-[5.5rem]"
        />
        <div>
          <Text as="h1" variant="2xl lg:3xl" className="text-gray-800">
            Elenilton Fabiano
          </Text>
          <Text as="div" variant="xs" className="text-gray-500 italic -mt-0.5">
            Software Engineer | Frontend Developer
          </Text>
        </div>
      </div>

      <div className="w-[18rem] lg:w-[20rem] mt-6 lg:mt-12">
        <Text as="p" variant="sm" className="text-gray-500 italic">
        Criando soluções inovadoras com atenção aos detalhes, uma criatividade enorme e um compromisso constante com o feedback.
        </Text>
        <div className="flex gap-1 items-center mt-2">
          <Text variant="sm" className="text-gray-500 italic">
            Me chame de Nilton.
          </Text>
          <span>😁</span>
        </div>
      </div>

      <nav className="flex gap-2 w-[18rem] lg:w-[20rem] mt-6">
        <NavigatorItem href="/">Home</NavigatorItem>
        <NavigatorItem href="/blog">Blog</NavigatorItem>
      </nav>
    </header>
  );
}