import Image from "next/image";

import { Cta } from "@/components/cta";

import WhyUs from "./_components/why-us";

export default function About() {
  return (
    <main className="">
      <div className="relative py-4 text-center md:py-20">
        <h1 className="pb-3 text-3xl font-bold text-primary-foreground md:text-4xl">
          Let&apos;s know <span className="text-orange-500">About us</span>
        </h1>
        <p className="container max-w-3xl">
          Discover Naseem al Muwaliah, a leader in construction, manpower, and
          project management. Committed to quality and client satisfaction, we
          deliver expertise across residential, commercial, and industrial
          projects. Learn about our mission, values, and dedicated team shaping
          the future with excellence.
        </p>
        <div className="relative mx-auto my-12 aspect-video max-w-3xl overflow-hidden rounded-2xl max-md:mx-6">
          <Image
            src="/images/peoples.webp"
            fill
            alt=""
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 h-[60vh] w-full">
          <Image
            src="https://pagedone.io/asset/uploads/1691055810.png"
            fill
            alt=""
            className="-z-10 object-cover"
          />
        </div>
      </div>
      <section className="container max-w-3xl pb-16">
        <h2 className="pb-6 text-3xl font-bold">
          Building Trust, Crafting Excellence
        </h2>
        <p className="text-balance text-lg">
          Welcome to Naseem al Muwaliah, a full-spectrum construction and
          project management company committed to turning visions into reality.
          With a rich history in the industry and an unwavering dedication to
          quality, we provide a complete suite of services that include manpower
          supply, construction work of all types, and expert project management.
          From modest residential projects to large-scale commercial and
          industrial developments, we take pride in delivering outstanding
          results that stand the test of time.
        </p>
      </section>

      {/* Mission and vision */}
      <section className="container grid max-w-4xl gap-9 py-12 md:grid-cols-2 md:py-28">
        <div className="rounded-xl bg-primary p-9">
          <h3 className="pb-3 text-3xl font-semibold">Our Mission</h3>
          <p className="text-lg">
            To provide exceptional construction and project management services
            that meet the unique needs of our clients, fostering strong
            partnerships built on trust, quality, and reliability.
          </p>
        </div>
        <div className="rounded-xl bg-primary-foreground p-9 text-background">
          <h3 className="pb-3 text-3xl font-semibold">Our Vision</h3>
          <p className="text-lg">
            To be a leader in the construction industry, known for our
            dedication to excellence, innovation, and sustainable building
            practices. We aim to create spaces that enhance the lives of the
            communities we serve.
          </p>
        </div>
      </section>
      <div className="w-full bg-primary-foreground/10">
        <section className="container max-w-5xl py-28">
          <h4 className="pb-3 text-2xl font-medium">Our Values</h4>
          <div className="grid gap-4 md:grid-cols-5">
            <div className="col-span-3 rounded-xl border bg-background p-6">
              <h5 className="pb-2 text-2xl font-bold text-primary-foreground">
                Integrity
              </h5>
              <p>
                We believe in transparency, honesty, and accountability in all
                our projects, ensuring a trusting relationship with our clients
                and partners.
              </p>
            </div>
            <div className="col-span-3 rounded-xl border bg-background p-6 md:col-span-2">
              <h5 className="pb-2 text-2xl font-bold text-primary-foreground">
                Quality
              </h5>
              <p>
                From planning and design to construction and finishing touches,
                quality is our top priority in every step of the process.
              </p>
            </div>
            <div className="col-span-3 rounded-xl border bg-background p-6 md:col-span-2">
              <h5 className="pb-2 text-2xl font-bold text-primary-foreground">
                Safety
              </h5>
              <p>
                Safety is paramount in everything we do. We strictly adhere to
                safety standards to protect our team, partners, and clients.
              </p>
            </div>
            <div className="col-span-3 rounded-xl border bg-background p-6">
              <h5 className="pb-2 text-2xl font-bold text-primary-foreground">
                Innovation
              </h5>
              <p>
                We continuously seek new, efficient methods and technologies to
                improve our services and exceed client expectations.
              </p>
            </div>
          </div>
        </section>
      </div>
      <WhyUs />
      <Cta />
    </main>
  );
}
