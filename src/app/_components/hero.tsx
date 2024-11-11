import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative pt-8 lg:pt-32">
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* <div className="mx-auto mb-4 flex w-60 items-center justify-between rounded-full border border-indigo-600 p-1">
          <span className="font-inter ml-3 text-xs font-medium text-gray-900">
            Explore how to use for brands.
          </span>
          <Link
            href="/"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600"
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div> */}
        <h1 className="font-manrope mx-auto mb-5 max-w-3xl text-center text-4xl font-bold leading-[50px] tracking-tighter text-primary-foreground md:text-7xl">
          Building Dreams,
          <br />
          <span className="text-orange-500">Crafting Reality </span>
        </h1>
        <p className="mx-auto mb-9 max-w-2xl text-balance text-center text-base font-normal leading-7 text-gray-500">
          At Naseem al Muwaliah, we specialize in delivering high-quality
          construction, manpower, and project management services that meet the
          needs of modern industries.
        </p>
        <Link
          href="/services"
          className="shadow-xs mb-14 inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-7 py-3 text-center text-base font-semibold text-white transition-all duration-500 hover:bg-indigo-700 md:w-auto"
        >
          Explore Our Services
          <svg
            className="ml-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        {/* <div className="relative z-10 flex aspect-[16/10] justify-center">
          <Image
            src="/images/construction-site.webp"
            alt="A busy construction site with diverse buildings, workers in safety gear, and heavy machinery, emphasizing teamwork, quality, and safety."
            fill
            className="h-auto rounded-t-3xl object-cover"
          />
        </div> */}
      </div>
      <Image
        src="https://pagedone.io/asset/uploads/1691055810.png"
        fill
        alt=""
        className="-z-10"
      />
    </section>
  );
};
