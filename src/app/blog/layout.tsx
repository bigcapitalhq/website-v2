import { Metadata } from 'next';

interface BlogLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Bigcapital | Blog',
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  return <div>{children}</div>;
}
