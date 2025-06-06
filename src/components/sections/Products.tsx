"use client";

import Link from "next/link";
import { ProductCardProps } from "@/types";

export default function Products() {
  const products: ProductCardProps[] = [
    {
      title: "Grok",
      description: "Grok is your cosmic guide, now accessible on grok.com, iOS, and Android. Explore the universe with AI.",
      link: "https://grok.com/?referrer=website",
      buttonText: "Use now",
      renderVisual: () => (
        <div className="duration-100 opacity-40 group-hover:opacity-70 group-hover:scale-110 origin-bottom">
          <svg className="w-full scale-[115%] origin-top-right -mt-4" width="555" viewBox="0 0 555 384" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="1">
              <mask id="path-1-inside-1_33863_16844" fill="white">
                <path d="M212.153 339.153L394.78 204.177C403.734 197.56 416.531 200.141 420.798 210.42C443.251 264.625 433.219 329.767 388.546 374.494C343.874 419.218 281.716 429.027 224.903 406.688L162.84 435.458C251.857 496.374 359.952 481.31 427.5 413.635C481.08 359.991 497.674 286.87 482.158 220.932L482.298 221.072C459.797 124.205 487.83 85.4866 545.253 6.31254C546.611 4.43528 547.971 2.55799 549.33 0.633789L473.766 76.2879V76.0533L212.106 339.201"></path>
              </mask>
              <path d="M394.78 204.177L394.186 203.373L394.186 203.373L394.78 204.177ZM420.798 210.42L421.722 210.037L421.721 210.036L420.798 210.42ZM388.546 374.494L387.838 373.787L387.838 373.787L388.546 374.494ZM224.903 406.688L225.269 405.757L224.871 405.601L224.483 405.781L224.903 406.688ZM162.84 435.458L162.419 434.551L160.824 435.29L162.275 436.283L162.84 435.458ZM427.5 413.635L426.793 412.928L426.793 412.928L427.5 413.635ZM482.158 220.932L482.865 220.225L480.379 217.739L481.184 221.161L482.158 220.932ZM482.298 221.072L481.591 221.78L484.063 224.252L483.272 220.846L482.298 221.072ZM545.253 6.31254L546.062 6.89965L546.063 6.89865L545.253 6.31254ZM549.33 0.633789L550.147 1.21086L548.623 -0.0728977L549.33 0.633789ZM473.766 76.2879H472.766V78.7042L474.473 76.9946L473.766 76.2879ZM473.766 76.0533H474.766V73.6293L473.057 75.3482L473.766 76.0533ZM212.747 339.957L395.375 204.981L394.186 203.373L211.558 338.349L212.747 339.957ZM395.375 204.981C403.889 198.689 415.895 201.216 419.874 210.803L421.721 210.036C417.167 199.065 403.579 196.431 394.186 203.373L395.375 204.981ZM419.874 210.802C442.181 264.655 432.211 329.362 387.838 373.787L389.253 375.2C434.228 330.173 444.321 264.596 421.722 210.037L419.874 210.802ZM387.838 373.787C343.472 418.206 281.745 427.964 225.269 405.757L224.538 407.619C281.688 430.091 344.276 420.231 389.253 375.2L387.838 373.787ZM224.483 405.781L162.419 434.551L163.26 436.365L225.324 407.595L224.483 405.781ZM162.275 436.283C251.698 497.477 360.327 482.35 428.208 414.341L426.793 412.928C359.578 480.269 252.017 495.272 163.405 434.633L162.275 436.283ZM428.208 414.341C482.048 360.437 498.721 286.956 483.131 220.703L481.184 221.161C496.627 286.785 480.112 359.545 426.793 412.928L428.208 414.341ZM481.451 221.639L481.591 221.78L483.005 220.365L482.865 220.225L481.451 221.639ZM483.272 220.846C472.052 172.544 473.454 138.852 484.745 107.395C496.061 75.8726 517.325 46.5225 546.062 6.89965L544.443 5.72543C515.758 45.2767 494.295 74.873 482.863 106.72C471.407 138.633 470.043 172.734 481.324 221.299L483.272 220.846ZM546.063 6.89865C547.42 5.02254 548.783 3.14048 550.147 1.21086L548.514 0.056717C547.158 1.9755 545.802 3.84801 544.443 5.72643L546.063 6.89865ZM548.623 -0.0728977L473.058 75.5812L474.473 76.9946L550.038 1.34048L548.623 -0.0728977ZM474.766 76.2879V76.0533H472.766V76.2879H474.766ZM473.057 75.3482L211.397 338.496L212.815 339.906L474.475 76.7584L473.057 75.3482Z" fill="url(#paint0_linear_33863_16844)" mask="url(#path-1-inside-1_33863_16844)"></path>
              <mask id="path-3-inside-2_33863_16844" fill="white">
                <path d="M174.472 371.957C110.58 310.85 121.596 216.283 176.112 161.749C216.425 121.387 282.474 104.914 340.13 129.131L402.054 100.502C390.898 92.4302 376.6 83.7478 360.194 77.6466C286.037 47.094 197.253 62.2999 136.971 122.607C78.9858 180.662 60.7511 269.926 92.0642 346.097C115.455 403.025 77.1107 443.292 38.485 483.936C24.7972 498.343 11.0626 512.752 0 528.005L174.425 372.003"></path>
              </mask>
              <path d="M176.112 161.749L176.82 162.456L176.82 162.456L176.112 161.749ZM340.13 129.131L339.743 130.053L340.15 130.224L340.55 130.039L340.13 129.131ZM402.054 100.502L402.473 101.41L404.024 100.693L402.64 99.6923L402.054 100.502ZM360.194 77.6466L359.813 78.5712L359.829 78.5778L359.845 78.5839L360.194 77.6466ZM136.971 122.607L136.264 121.9L136.264 121.901L136.971 122.607ZM92.0642 346.097L92.9892 345.717L92.9891 345.717L92.0642 346.097ZM38.485 483.936L37.7602 483.247L37.7601 483.247L38.485 483.936ZM0 528.005L-0.809497 527.417L0.666647 528.75L0 528.005ZM175.164 371.234C111.747 310.583 122.627 216.666 176.82 162.456L175.405 161.042C120.565 215.899 109.413 311.118 173.781 372.679L175.164 371.234ZM176.82 162.456C216.864 122.363 282.485 106.003 339.743 130.053L340.518 128.209C282.463 103.825 215.986 120.411 175.405 161.042L176.82 162.456ZM340.55 130.039L402.473 101.41L401.634 99.5947L339.711 128.223L340.55 130.039ZM402.64 99.6923C391.435 91.5845 377.057 82.8508 360.542 76.7093L359.845 78.5839C376.143 84.6447 390.361 93.2758 401.468 101.313L402.64 99.6923ZM360.574 76.722C286.054 46.0198 196.839 61.2995 136.264 121.9L137.678 123.314C197.667 63.3002 286.019 48.1683 359.813 78.5712L360.574 76.722ZM136.264 121.901C77.9954 180.238 59.6717 269.931 91.1393 346.477L92.9891 345.717C61.8304 269.922 79.9763 181.085 137.679 123.314L136.264 121.901ZM91.1392 346.477C102.707 374.631 99.0188 398.622 87.6422 420.665C76.2299 442.776 57.0987 462.898 37.7602 483.247L39.2099 484.625C58.4971 464.33 77.8509 443.996 89.4195 421.582C101.024 399.098 104.812 374.492 92.9892 345.717L91.1392 346.477ZM37.7601 483.247C24.083 497.643 10.2993 512.101 -0.809497 527.417L0.809497 528.592C11.8259 513.403 25.5115 499.043 39.21 484.625L37.7601 483.247ZM0.666647 528.75L175.091 372.748L173.758 371.257L-0.666647 527.259L0.666647 528.75Z" fill="url(#paint1_linear_33863_16844)" mask="url(#path-3-inside-2_33863_16844)"></path>
            </g>
            <defs>
              <linearGradient id="paint0_linear_33863_16844" x1="356.085" y1="0.633789" x2="356.085" y2="473.752" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"></stop>
                <stop offset="0.802422"></stop>
              </linearGradient>
              <linearGradient id="paint1_linear_33863_16844" x1="201.027" y1="62.3223" x2="201.027" y2="528.005" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"></stop>
                <stop offset="0.802422"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      title: "API",
      description: "Supercharge your applications with Grok's enhanced speed, precision, and multilingual capabilities.",
      link: "https://console.x.ai/",
      buttonText: "Build now",
      renderVisual: () => (
        <div className="relative">
          <div className="absolute inset-0 -inset-x-8 flex justify-center items-center group-hover:opacity-100 opacity-0 duration-100">
            <canvas style={{width:"100%",height:"auto"}} width="411" height="150"></canvas>
          </div>
          <svg className="w-full opacity-40 group-hover:opacity-70 duration-100 group-hover:skew-y-[12deg] group-hover:scale-75 origin-center" width="488" viewBox="0 0 488 382" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="1">
              <rect x="2.21289" y="1.66309" width="484.288" height="415.415" stroke="url(#paint0_linear_33863_16843)"></rect>
              <path d="M16.1765 19.6311L24.299 31.4842H27.9093L19.786 19.6311H16.1765ZM19.7832 26.2144L16.1719 31.4842H19.785L21.5893 28.8498L19.7832 26.2144ZM28.7352 13.1509L22.4928 22.2599L24.299 24.8962L32.3483 13.1509H28.7352ZM29.389 18.7873V31.4842H32.3483V14.469L29.389 18.7873Z" fill="white"></path>
              <rect x="406.045" y="14.8174" width="45" height="15" rx="4.5" stroke="white"></rect>
              <circle cx="467.545" cy="22.3174" r="7.5" stroke="white"></circle>
              <line x1="88.041" y1="42.1299" x2="88.041" y2="418.281" stroke="url(#paint1_linear_33863_16843)"></line>
              <line x1="486.502" y1="42.582" x2="2.21051" y2="42.5821" stroke="white"></line>
            </g>
            <defs>
              <linearGradient id="paint0_linear_33863_16843" x1="244.357" y1="1.16309" x2="244.357" y2="417.578" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"></stop>
                <stop offset="0.8" stopColor="#0A0A0A"></stop>
              </linearGradient>
              <linearGradient id="paint1_linear_33863_16843" x1="86.5402" y1="42.1299" x2="86.5402" y2="418.281" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"></stop>
                <stop offset="0.8" stopColor="#0A0A0A"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      )
    },
    {
      title: "Developer Docs",
      description: "Learn how to quickly install Grok at the heart of your applications and explore guides covering common use cases.",
      link: "https://docs.x.ai/",
      buttonText: "Learn more",
      renderVisual: () => (
        <div className="relative mt-2 opacity-40 group-hover:opacity-70 duration-100">
          <svg className="w-full absolute -top-8 -right-8 group-hover:rotate-3 group-hover:translate-x-4 duration-100" width="489" viewBox="0 0 489 382" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="1">
              <rect x="10.2715" y="30" width="432" height="357" fill="#0A0A0A" stroke="url(#paint2_linear_33868_17064)"></rect>
              <line x1="55.6387" y1="97.6836" x2="394.812" y2="97.6836" stroke="white" strokeOpacity="0.7"></line>
              <line x1="55.6387" y1="135.651" x2="394.812" y2="135.651" stroke="white" strokeOpacity="0.6"></line>
              <line x1="55.6387" y1="173.618" x2="394.812" y2="173.618" stroke="white" strokeOpacity="0.5"></line>
              <line x1="55.6387" y1="211.585" x2="394.812" y2="211.585" stroke="white" strokeOpacity="0.4"></line>
              <line x1="55.6387" y1="249.552" x2="394.812" y2="249.552" stroke="white" strokeOpacity="0.3"></line>
              <line x1="55.6387" y1="287.52" x2="394.812" y2="287.52" stroke="white" strokeOpacity="0.2"></line>
              <line x1="55.6387" y1="325.487" x2="394.812" y2="325.487" stroke="white" strokeOpacity="0.1"></line>
            </g>
            <defs>
              <linearGradient id="paint2_linear_33868_17064" x1="226.271" y1="34" x2="226.271" y2="390" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"></stop>
                <stop offset="0.8" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
          <svg className="w-full absolute -top-4 -right-4" width="489" viewBox="0 0 489 382" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="1">
              <rect x="10.2715" y="30" width="432" height="357" fill="#0A0A0A" stroke="url(#paint2_linear_33868_17064)"></rect>
              <line x1="55.6387" y1="97.6836" x2="394.812" y2="97.6836" stroke="white" strokeOpacity="0.7"></line>
              <line x1="55.6387" y1="135.651" x2="394.812" y2="135.651" stroke="white" strokeOpacity="0.6"></line>
              <line x1="55.6387" y1="173.618" x2="394.812" y2="173.618" stroke="white" strokeOpacity="0.5"></line>
              <line x1="55.6387" y1="211.585" x2="394.812" y2="211.585" stroke="white" strokeOpacity="0.4"></line>
              <line x1="55.6387" y1="249.552" x2="394.812" y2="249.552" stroke="white" strokeOpacity="0.3"></line>
              <line x1="55.6387" y1="287.52" x2="394.812" y2="287.52" stroke="white" strokeOpacity="0.2"></line>
              <line x1="55.6387" y1="325.487" x2="394.812" y2="325.487" stroke="white" strokeOpacity="0.1"></line>
            </g>
            <defs>
              <linearGradient id="paint2_linear_33868_17064" x1="226.271" y1="34" x2="226.271" y2="390" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"></stop>
                <stop offset="0.8" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
          <svg className="w-full relative group-hover:-rotate-3 group-hover:-translate-x-4 duration-100" width="489" viewBox="0 0 489 382" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="1">
              <rect x="10.2715" y="30" width="432" height="357" fill="#0A0A0A" stroke="url(#paint2_linear_33868_17064)"></rect>
              <line x1="55.6387" y1="97.6836" x2="394.812" y2="97.6836" stroke="white" strokeOpacity="0.7"></line>
              <line x1="55.6387" y1="135.651" x2="394.812" y2="135.651" stroke="white" strokeOpacity="0.6"></line>
              <line x1="55.6387" y1="173.618" x2="394.812" y2="173.618" stroke="white" strokeOpacity="0.5"></line>
              <line x1="55.6387" y1="211.585" x2="394.812" y2="211.585" stroke="white" strokeOpacity="0.4"></line>
              <line x1="55.6387" y1="249.552" x2="394.812" y2="249.552" stroke="white" strokeOpacity="0.3"></line>
              <line x1="55.6387" y1="287.52" x2="394.812" y2="287.52" stroke="white" strokeOpacity="0.2"></line>
              <line x1="55.6387" y1="325.487" x2="394.812" y2="325.487" stroke="white" strokeOpacity="0.1"></line>
            </g>
            <defs>
              <linearGradient id="paint2_linear_33868_17064" x1="226.271" y1="34" x2="226.271" y2="390" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"></stop>
                <stop offset="0.8" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-[#9c9c9c] mb-8">[ PRODUCTS ]</div>
          <h2 className="text-5xl font-bold mb-16">AI for all humanity</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Product Card Component
function ProductCard({ title, description, link, buttonText, renderVisual }: ProductCardProps) {
  return (
    <div className="group relative px-0 py-10 h-full lg:p-8 flex flex-col from-secondary/10 via-transparent to-transparent border-t border-border lg:border-l lg:border-t-0 lg:hover:bg-gradient-to-b md:flex-row lg:flex-col gap-10 overflow-hidden">
      {/* Corner highlights effect - visible on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 z-10 isolate border border-primary/10 group-hover:opacity-100 hidden lg:block">
        <div className="absolute -translate-x-px -translate-y-px -left-1 -top-1 size-2 bg-primary z-10"></div>
        <div className="absolute translate-x-px -translate-y-px -right-1 -top-1 size-2 bg-primary z-10"></div>
        <div className="absolute -translate-x-px translate-y-px -left-1 -bottom-1 size-2 bg-primary z-10"></div>
        <div className="absolute translate-x-px translate-y-px -right-1 -bottom-1 size-2 bg-primary z-10"></div>
      </div>
      
      {/* Content area */}
      <div className="max-w-sm">
        <Link target="_blank" href={link}>
          <div className="absolute inset-0"></div>
          <h3 className="text-xl">{title}</h3>
        </Link>
        <p className="mt-4 text-secondary">{description}</p>
      </div>
      
      {/* Visual element */}
      <div className="flex-1 flex flex-col">
        <div className="opacity-75 flex-1 pointer-events-none">
          {renderVisual()}
        </div>
        
        {/* Button */}
        <div className="flex items-center justify-center">
          <button type="button" className="relative isolate inline-flex items-center justify-center border text-base/6 uppercase font-mono tracking-widest shrink-0 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:sm:my-1 px-3.5 py-1.5 sm:text-sm [&>[data-slot=icon]]:size-4 [&>[data-slot=icon]]:sm:size-3 gap-x-2 bg-[--btn-bg] text-[--btn-text] border-[--btn-border] hover:bg-[--btn-hover] rounded-full [--btn-bg:transparent] [--btn-border:theme(colors.primary/25%)] [--btn-text:theme(colors.primary)] [--btn-hover:theme(colors.secondary/20%)] group-hover:bg-[--btn-hover] pointer-events-none">
            <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true"></span>
            {buttonText}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 