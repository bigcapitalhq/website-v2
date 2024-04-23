interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function PostLayout({ children }: BlogLayoutProps) {
  return (
    <div
      className={'space-y-8 py-16 md:max-w-7xl mx-auto w-full max-w-5xl px-6'}
    >
      {children}
    </div>
  );
}
