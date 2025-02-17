import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/logo.svg" alt="Logo" height={50} width={50} />
      <p className="text-xl font-smebildo tracking-tight">NewTube</p>
    </div>
  );
}
