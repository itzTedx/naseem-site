import Image from "next/image";

export const Features = () => {
  return (
    <section className="container px-8 py-10 lg:py-28">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <h2 className="mb-2 block text-base font-bold uppercase leading-relaxed text-primary">
          Our Services
        </h2>
        <h3 className="mb-4 block text-2xl font-bold leading-relaxed text-primary-foreground md:text-3xl lg:text-4xl">
          We&apos;re experts in
        </h3>
        <p className="mx-auto block max-w-3xl text-balance font-normal leading-relaxed !text-gray-500 text-inherit">
          Managing large-scale construction projects to providing skilled
          manpower, we offer comprehensive solutions tailored to your needs. Let
          us help you turn your vision into reality.
        </p>
      </div>
      <div className="container mx-auto mb-8 grid grid-cols-1 gap-y-8 lg:grid-cols-4 lg:gap-x-8">
        <div className="relative col-span-2 flex flex-col overflow-hidden rounded-xl bg-gray-100 bg-clip-border text-gray-700">
          <div className="p-6 text-center">
            <h4 className="mb-2 block text-2xl font-bold leading-snug tracking-normal text-primary-foreground">
              Skilled Manpower for Every Project
            </h4>
            <p className="leading-6s text-center text-sm font-normal !text-gray-500 text-inherit">
              We specialize in providing reliable, skilled, and well-trained
              manpower to meet the unique needs of your construction or
              industrial projects. Whether you require general labor, skilled
              tradespeople, or project-specific professionals, Our team ensures
              each worker is fully prepared to contribute to your project&apos;s
              success.
            </p>
            <Image
              height={480}
              width={790}
              src="/images/manpower.webp"
              alt="laptop"
              className="mt-4 h-[220px] w-full overflow-hidden rounded-xl object-cover object-center md:h-[300px]"
            />
          </div>
        </div>
        <div className="relative col-span-2 flex flex-col overflow-hidden rounded-xl bg-gray-100 bg-clip-border text-gray-700">
          <div className="p-6 text-center">
            <h4 className="mb-2 block text-2xl font-bold leading-snug tracking-normal text-primary-foreground">
              Comprehensive Construction Solutions
            </h4>
            <p className="leading-6s text-center text-sm font-normal !text-gray-500 text-inherit">
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
              className="mt-4 h-[220px] w-full overflow-hidden rounded-xl object-cover object-center md:h-[300px]"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8">
        <div className="relative col-span-2 flex flex-col overflow-hidden rounded-xl bg-gray-100 bg-clip-border text-gray-700">
          <div className="p-6 text-center">
            <h4 className="mb-2 block text-2xl font-bold leading-snug tracking-normal text-primary-foreground">
              Expert Project Management from Start to Finish
            </h4>
            <p className="leading-6s text-center text-sm font-normal !text-gray-500 text-inherit">
              we provide expert project management services that ensure every
              aspect of your construction project is handled efficiently, from
              planning to execution. Our project managers work closely with
              clients to understand their vision and deliver results on time and
              within budget.
            </p>
            <Image
              height={480}
              width={790}
              src="/images/project-management.webp"
              alt="laptop"
              className="mt-4 h-[220px] w-full overflow-hidden rounded-xl object-cover object-center md:h-[300px] lg:h-[380px]"
            />
          </div>
        </div>
        <div className="grid grid-rows-2 gap-8">
          <div className="relative col-span-1 flex flex-col rounded-xl bg-gray-100 bg-clip-border text-gray-700">
            <div className="p-6 text-center">
              <h4 className="mb-2 block text-2xl font-bold leading-snug tracking-normal text-primary-foreground">
                Get in Touch
              </h4>
              <p className="leading-6s mx-auto block max-w-xs text-center text-base font-normal !text-gray-500 text-inherit">
                Have a project in mind? Let&apos;s talk! Our team is ready to
                help you take the next step towards success.
              </p>
            </div>
          </div>
          <div className="relative col-span-1 flex flex-col rounded-xl bg-gray-100 bg-clip-border text-gray-700">
            <div className="p-6 text-center">
              <h4 className="mb-2 block text-2xl font-bold leading-snug tracking-normal text-primary-foreground">
                Get in Touch
              </h4>
              <p className="leading-6s mx-auto block max-w-xs text-center text-base font-normal !text-gray-500 text-inherit">
                Have a project in mind? Let&apos;s talk! Our team is ready to
                help you take the next step towards success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
