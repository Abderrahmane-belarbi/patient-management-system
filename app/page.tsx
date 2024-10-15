import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            alt='register-image'
            src='/assets/images/register-img.png'
            width={1000}
            height={1000}
          />
        </div>
      </section>
    </div>
  );
}
