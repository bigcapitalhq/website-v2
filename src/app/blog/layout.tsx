interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return <div className={"max-w-[960px] mx-auto px-4"}>{children}</div>;
}
