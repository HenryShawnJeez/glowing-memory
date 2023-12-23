
export default function RootLayout({
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
