import { cn } from "@/lib/utils";

const FeatureCard = ({
  title,
  description,
  children,
  className,
  isFirst,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  isFirst?: boolean;
}) => {
  return (
    <div
      className={cn(
        "group relative px-0 py-10 h-full lg:p-8 flex flex-col from-secondary/10 via-transparent to-transparent border-t border-border",
        !isFirst && "lg:border-l",
        "lg:border-t-0 md:flex-row lg:flex-col gap-10",
        className
      )}
    >
      <div className="max-w-sm">
        <h3 className="text-xl">{title}</h3>
        <p className="mt-4 text-secondary">{description}</p>
      </div>
      <div className="flex justify-end md:justify-start grow h-full">
        <div className="flex items-center justify-center w-full max-w-md mt-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

const ChatBubble = ({ text }: { text: string }) => (
  <div className="bg-neutral-800 text-pretty px-4 py-2 rounded-xl">{text}</div>
);

const UserIcon = () => (
  <div className="size-10 bg-neutral-800 rounded-full flex justify-center items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
      className="size-6 text-neutral-600"
    >
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

const XAILogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="size-6 text-white"
  >
    <path
      d="M2.30047 8.77631L12.0474 23H16.3799L6.63183 8.77631H2.30047ZM6.6285 16.6762L2.29492 23H6.63072L8.79584 19.8387L6.6285 16.6762ZM17.3709 1L9.88007 11.9308L12.0474 15.0944L21.7067 1H17.3709ZM18.1555 7.76374V23H21.7067V2.5818L18.1555 7.76374Z"
      fill="currentColor"
    />
  </svg>
);

const FEATURES = [
  {
    id: 'trends',
    title: "Learn from trends and insights on 𝕏",
    description: "Gain insights from 𝕏 trends, analyzing real-time data and user sentiment across industries.",
    chatBubble: "What&apos;s new with Grok?",
    content: (
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className="bg-background size-12 rounded-full flex justify-center items-center">
            <XAILogo />
          </div>
          <div>
            <div className="font-medium text-sm">xAI</div>
            <div className="text-primary/50 text-xs">@xAI</div>
          </div>
        </div>
        <div className="mt-4 space-y-3 text-sm">
          <p>
            This is it: The world&apos;s smartest AI, Grok 3, now available
            for free (until our servers melt).
          </p>
          <p>
            Try Grok 3 now:{" "}
            <a
              href="https://x.com/i/grok"
              className="text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://x.com/i/grok
            </a>
          </p>
          <p>
            X Premium+ and SuperGrok users will have increased access
            to Grok 3, in addition to early access to advanced features
            like Voice Mode
          </p>
          <p className="text-secondary text-xs pt-1">20 Feb, 2025</p>
        </div>
      </div>
    ),
  },
  {
    id: 'documents',
    title: "Summarize documents",
    description: "Condense lengthy documents into concise summaries, highlighting key points and actionable findings.",
    chatBubble: "Analyze this document",
    content: (
      <div className="space-y-3 text-sm p-4">
        <p>
          Through comprehensive document analysis, our platform
          identified key trends across 1,245 financial reports
          submitted in Q3 2024.
        </p>
        <p>
          The data revealed a 17% increase in operational costs
          year-over-year, primarily driven by supply chain disruptions
          and labor shortages.
        </p>
        <p>
          Revenue growth, however, remained steady at 9%, with 62% of
          companies exceeding their projected earnings. Sector-specific
          insights showed that technology and healthcare outperformed
          other industries, contributing 28% and 19% to total revenue,
          respectively.
        </p>
      </div>
    ),
  },
  {
    id: 'coding',
    title: "Your coding sidekick",
    description: "Receive code guidance, solutions, and best practices without executing or debugging.",
    chatBubble: "Write a debounce hook in React",
    content: (
      <div className="absolute top-0 left-0 lg:relative">
        <div className="flex flex-col h-full relative rounded-md not-prose bg-neutral-950 text-neutral-100 w-full">
          <div className="flex justify-between items-center gap-3 px-4 pt-3 pb-2">
            <div className="flex gap-2 items-center">
              <p className="font-mono text-sm text-zinc-400 m-0 dark:text-zinc-200">
                javascript
              </p>
            </div>
          </div>
          <div className="flex-1 rounded-[inherit]">
            <pre>
              <code className="javascript !overflow-hidden !bg-transparent text-sm !px-4 dark:text-zinc-100 hljs">
                {`import { useState, useEffect } from &apos;react&apos;;

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    ),
  },
];

const Features = () => {
  return (
    <section className="py-16 sm:py-32">
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl space-y-16 sm:space-y-32">
        <div className="space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-12">
              <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">
                <span>Productivity,</span>{" "}
                <span
                  className="glitch-text"
                  data-text="unhinged"
                  style={{
                    "--glitch-color1": "#eee",
                    "--glitch-color2": "#eee",
                    "--animation-speed": "0.5s",
                    "--text-content": '"unhinged"',
                  } as React.CSSProperties}
                >
                  unhinged
                </span>
                .
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              isFirst={index === 0}
            >
              <div className="w-full h-full space-y-6">
                <div className="flex justify-end gap-3 items-center">
                  <ChatBubble text={feature.chatBubble} />
                  <UserIcon />
                </div>
                <div className="relative flex justify-center">
                  <div className="w-px absolute left-1/2 -inset-y-6 border-l border-dashed border-white/15" />
                </div>
                <div className="grow w-full space-y-4 border border-border p-4 rounded-3xl overflow-hidden xl:aspect-square opacity-75 hover:opacity-100 duration-100">
                  <div className="rounded-tl-xl bg-neutral-900 border border-border w-[125%] scale-110 origin-top-left h-[325px] overflow-hidden">
                    {feature.content}
                  </div>
                </div>
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 