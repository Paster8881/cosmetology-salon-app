export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[90%] mx-auto px-6 md:px-10 lg:px-12">
      {children}
    </div>
  );
}