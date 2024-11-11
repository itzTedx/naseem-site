import Image from "next/image";

export const Features = () => {
  return (
    <section className="container px-8 py-10 lg:py-28">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <h2 className="mb-2 block text-base font-bold uppercase leading-relaxed text-primary-foreground">
          Our Services
        </h2>
        <h3 className="mb-4 block text-2xl font-bold leading-relaxed text-primary-foreground antialiased lg:text-3xl">
          We&apos;re experts at
        </h3>
        <p className="mx-auto block max-w-3xl text-balance font-normal leading-relaxed !text-gray-500 text-inherit antialiased">
          From managing large-scale construction projects to providing skilled
          manpower, we offer comprehensive solutions tailored to your needs. Let
          us help you turn your vision into reality.
        </p>
      </div>
      <div className="container mx-auto mb-8 grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8">
        <div className="relative col-span-1 flex flex-col overflow-hidden rounded-xl bg-gray-100 bg-clip-border text-gray-700">
          <div className="p-6 text-center">
            <h4 className="mb-2 block text-2xl font-medium leading-snug tracking-normal text-primary-foreground antialiased">
              Skilled Manpower for Every Project
            </h4>
            <p className="leading-6s text-center text-sm font-normal !text-gray-500 text-inherit antialiased">
              we specialize in providing reliable, skilled, and well-trained
              manpower to meet the unique needs of your construction or
              industrial projects. Whether you require general labor, skilled
              tradespeople, or project-specific professionals, our team ensures
              that each worker is fully equipped to contribute to the successful
              completion of your project.
            </p>
          </div>
        </div>
        <div className="relative col-span-2 flex flex-col overflow-hidden rounded-xl bg-gray-100 bg-clip-border text-gray-700">
          <div className="p-6 text-center">
            <h4 className="mb-2 block text-2xl font-medium leading-snug tracking-normal text-primary-foreground antialiased">
              Comprehensive Construction Solutions for Every Need
            </h4>
            <p className="leading-6s text-center text-sm font-normal !text-gray-500 text-inherit antialiased">
              We offers end-to-end construction services, managing projects from
              design to completion. We handle all types of construction work,
              whether residential, commercial, or industrial. Our experienced
              team delivers superior quality, adhering to the highest industry
              standards for safety, time management, and budget control.
            </p>
            <Image
              height={480}
              width={790}
              src="/images/workers.webp"
              alt="laptop"
              className="mt-4 h-[220px] w-full overflow-hidden rounded-xl object-cover object-center md:h-[300px] lg:h-[380px]"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8">
        <div className="relative col-span-2 flex flex-col overflow-hidden rounded-xl bg-gray-100 bg-clip-border text-gray-700">
          <div className="p-6 text-center">
            <h4 className="mb-2 block text-2xl font-medium leading-snug tracking-normal text-primary-foreground antialiased">
              Expert Project Management from Start to Finish
            </h4>
            <p className="leading-6s text-center text-sm font-normal !text-gray-500 text-inherit antialiased">
              we provide expert project management services that ensure every
              aspect of your construction project is handled efficiently, from
              planning to execution. Our project managers work closely with
              clients to understand their vision and deliver results on time and
              within budget.
            </p>
          </div>
        </div>
        <div className="relative col-span-1 flex flex-col rounded-xl bg-gray-100 bg-clip-border text-gray-700">
          <div className="p-6 text-center">
            <h4 className="mb-2 block text-2xl font-medium leading-snug tracking-normal text-primary-foreground antialiased">
              Get in Touch
            </h4>
            <p className="leading-6s mx-auto block max-w-xs text-center text-base font-normal !text-gray-500 text-inherit antialiased">
              Have a project in mind? Let&apos;s talk! Our team is ready to help
              you take the next step towards success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
