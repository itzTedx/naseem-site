import { BadgeCheckIcon, Cog, Handshake, UsersRound } from "lucide-react";

const features = [
  {
    name: "Full-Service Expertise",
    description:
      "We offer end-to-end construction solutions, handling every aspect from manpower supply to project management.",
    icon: Cog,
  },
  {
    name: "Proven Track Record",
    description:
      "With years of experience and numerous completed projects, we have built a reputation for reliability and quality.",
    icon: BadgeCheckIcon,
  },
  {
    name: "Client-Focused",
    description:
      "Your satisfaction is our success. We prioritize understanding your goals and meeting your needs.",
    icon: UsersRound,
  },
  {
    name: "Commitment to Excellence",
    description:
      "Our dedication to high standards and continuous improvement drives us to deliver exceptional results.",
    icon: Handshake,
  },
];

export default function WhyUs() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-orange-600">
            Why choose us?
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            What makes us Different from others
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
