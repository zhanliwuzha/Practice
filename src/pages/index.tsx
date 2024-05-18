import WorldTime from "./components/WorldTime/WorldTime";
export default function Home() {
  return (
    <main
      className={`h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center`}
    >

      <WorldTime />
    </main>
  );
}
