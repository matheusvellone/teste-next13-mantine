import { Anchor } from '@mantine/core';
import { Link } from 'next/link';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Link href="/" passHref>
        <Anchor size="xl" transform="uppercase">
          Eldorado Dashboard
        </Anchor>
      </Link>
      <ColorSchemeToggle />
    </>
  );
}
