import { Text } from 'thon-ui';

export default function MainFooter() {
  const linkClassName =
    'text-gray-500 hover:text-gray-800 transition-all duration-200ms ease-in-out';

  return (
    <footer className="flex flex-col lg:flex-row justify-between lg:items-center gap-2 lg:gap-0 pt-4 border-t border-solid border-t-gray-200 mt-12 pb-4">
      <div className="flex flex-col">
        <Text className="text-gray-800 italic font-bold">NiltJs!</Text>
        <Text variant="xs" className="text-gray-500">
          devnilton@gmail.com - Eclesiastes 3:1
        </Text>
      </div>
      <ul className="flex gap-2.5">
        <li>
          <a
            href="https://www.linkedin.com/in/elenilton-fabiano-2b710b1ba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text variant="xs" className={linkClassName}>
              LinkedIn
            </Text>
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/niltjs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text variant="xs" className={linkClassName}>
              Instagram
            </Text>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Niltimn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text variant="xs" className={linkClassName}>
              GitHub
            </Text>
          </a>
        </li>
      </ul>
    </footer>
  );
}