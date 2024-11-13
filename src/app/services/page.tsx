import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/constants";

export default function Services() {
  return (
    <main className="min-h-screen">
      <header className="-mt-28 rounded-b-3xl bg-blue-300 pb-12 pt-28 md:pb-20 md:pt-44">
        <div className="container flex flex-col items-center justify-between md:flex-row">
          <h1 className="text-2xl font-bold uppercase md:text-5xl">
            Building Trust, Crafting Excellence
          </h1>
          <p className="md:text-right md:text-lg">
            Comprehensive solutions in manpower, construction, and project
            management designed to bring every project to life with quality and
            precision.
          </p>
        </div>
      </header>
      <section className="container py-12 md:py-20">
        <div className="mx-auto mb-4 flex w-fit items-center justify-between rounded-full border border-orange-600 p-1">
          <span className="font-inter ml-3 mr-3 text-xs font-medium text-gray-900">
            Building Excellence from the Ground Up
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600">
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
          </div>
        </div>
        <h2 className="pb-6 text-center text-3xl font-bold text-primary-foreground">
          Offering comprehensive solutions:
        </h2>
        <div className="grid gap-9 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Image
                src="/images/manpower.webp"
                height={360}
                width={520}
                alt=""
                className="rounded-md"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl text-primary-foreground">
                Skilled Manpower for Every Project
              </CardTitle>
              <p className="pt-3">
                Our manpower solutions provide skilled labor for a wide range of
                construction and industrial projects. We source, train, and
                manage qualified professionals who meet the specific needs of
                your project.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Image
                src="/images/workers.webp"
                height={360}
                width={520}
                alt=""
                className="rounded-md"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl text-primary-foreground">
                Building with Precision
              </CardTitle>
              <p className="pt-3">
                From foundations to finishing touches, We provides full-service
                construction management, ensuring your project is completed on
                time, on budget, and to the highest standards.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Image
                src="/images/project-management.webp"
                height={360}
                width={520}
                alt=""
                className="rounded-md"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl text-primary-foreground">
                Effective Project Management for Seamless Execution
              </CardTitle>
              <p className="pt-3">
                Our experienced project managers handle every aspect of your
                project, from planning and budgeting to execution and
                completion. We ensure projects stay on track and meet all client
                expectations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container pb-12 md:pb-20">
        <div className="grid grid-cols-3 pb-12">
          <h3 className="text-3xl font-semibold text-primary">
            Services we provide:
          </h3>
          <p className="col-span-2 text-pretty">
            Comprehensive construction solutions, from skilled manpower to
            expert project management, to bring your vision to life with
            precision and reliability. Explore services tailored for projects of
            any scale or complexity.
          </p>
        </div>
        <div className="grid gap-9 md:grid-cols-3">
          {SERVICES.map(({ title, img, alt }, i) => (
            <Card key={`${i + 1}-${title}`} className="p-0">
              <CardHeader className="relative aspect-[5/4]">
                <Image
                  src={img}
                  fill
                  alt={alt}
                  className="rounded-md object-cover"
                />
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="px-6 py-4 text-2xl text-primary-foreground">
                  {title}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
