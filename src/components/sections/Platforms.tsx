import { cn } from "@/lib/utils";

const PlatformButton = ({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) => {
  return (
    <a
      target="_blank"
      className={cn(
        "relative isolate inline-flex items-center justify-center border text-base/6 uppercase font-mono tracking-widest shrink-0",
        "focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500",
        "data-[disabled]:opacity-50",
        "[&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:sm:my-1",
        "px-4 py-2 sm:text-sm [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:sm:size-4 gap-x-3",
        "rounded-full transition-all duration-300 ease-in-out",
        primary
          ? [
              "bg-primary border-primary text-background hover:bg-primary/80 hover:border-primary/80",
            ]
          : [
              "bg-transparent border-primary/25 text-primary hover:bg-secondary/20",
            ]
      )}
      href={href}
    >
      <span
        className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
        aria-hidden="true"
      />
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </a>
  );
};

const PLATFORMS = [
  {
    name: "Grok Web",
    href: "https://grok.com/?referrer=website",
    primary: true,
  },
  {
    name: "Grok on X",
    href: "https://grok.x.com",
  },
  {
    name: "iOS",
    href: "https://apps.apple.com/app/apple-store/id6670324846?pt=126952307&ct=x.ai%20Direct%20Link&mt=8",
  },
  {
    name: "Android",
    href: "https://play.google.com/store/apps/details?id=ai.x.grok&hl=en",
  },
];

const Platforms = () => {
  return (
    <section className="py-16 sm:py-32 !pb-12">
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl space-y-16 sm:space-y-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl space-y-12">
                <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">
                  Available anywhere.
                </h2>
              </div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PLATFORMS.map((platform) => (
              <PlatformButton
                key={platform.name}
                href={platform.href}
                primary={platform.primary}
              >
                {platform.name}
              </PlatformButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms; 