
export default function OtherPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="connectBackground">{children}</div>
    </>
  );
}
