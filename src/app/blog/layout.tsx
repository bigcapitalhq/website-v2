interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return <div className={"container mx-auto px-4 pt-9 pb-20"}>{children}</div>;
}
