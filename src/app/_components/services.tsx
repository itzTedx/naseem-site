"use client";

import Image from "next/image";
import Link from "next/link";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SERVICES } from "@/constants";

export function Services() {
  return (
    <section className="container pb-24">
      <div className="mx-auto mb-6 flex w-fit items-center justify-between rounded-full border border-orange-600 p-1">
        <span className="font-inter ml-3 mr-3 text-xs font-medium text-gray-900">
          Building Excellence from the Ground Up
        </span>
        <Link
          href="/services"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600"
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
      </div>

      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {SERVICES.map(({ title, img, alt }, i) => (
            <CarouselItem
              key={`${i + 1}-${title}`}
              className="cursor-pointer pl-1 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1">
                <Card className="p-0">
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
