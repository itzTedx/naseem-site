import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Services() {
  return (
    <main className="min-h-screen">
      <header className="-mt-28 rounded-b-3xl bg-blue-300 pb-20 pt-44">
        <div className="container flex items-center justify-between">
          <h1 className="text-5xl font-bold uppercase">
            Building Trust, Crafting Excellence
          </h1>
          <p className="text-right text-lg">
            Comprehensive solutions in manpower, construction, and project
            management designed to bring every project to life with quality and
            precision.
          </p>
        </div>
      </header>
      <section className="container grid grid-cols-3 gap-6 py-20">
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
              construction and industrial projects. We source, train, and manage
              qualified professionals who meet the specific needs of your
              project.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="font-bold">Explore More</Button>
          </CardFooter>
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
          <CardFooter>
            <Button className="font-bold">Explore More</Button>
          </CardFooter>
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
              project, from planning and budgeting to execution and completion.
              We ensure projects stay on track and meet all client expectations.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="font-bold">Explore More</Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
