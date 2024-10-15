import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            alt="register-image"
            src="/assets/icons/logo-full.svg"
            className="mb-12 h-10 w-fit"
            width={1000}
            height={1000}
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePulse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      {/* Side Image */}
      <Image
        alt="register-image"
        src="/assets/images/register-img.png"
        className="w-[490px] m-4"
        width={1000}
        height={1000}
      />
    </div>
  );
}
