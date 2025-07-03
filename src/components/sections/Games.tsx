"use client";

import { useState } from 'react';

export default function Games() {
  const [selectedGame, setSelectedGame] = useState("PONG");
  const games = ["PONG", "TETRIS", "SNAKE", "ASTEROIDS"];

  return (
    <div className="max-w-7xl mx-auto rounded-t-[64px] bg-gradient-to-b from-zinc-800 to-backround p-px hidden lg:block">
      <div className="rounded-t-[64px] bg-gradient-to-b from-zinc-900 to-background p-6 pb-0">
        <div className="relative rounded-t-[48px] bg-background overflow-hidden">
          <div className="absolute inset-3 bottom-0 rounded-t-[42px] bg-gradient-to-b from-white/5 opacity-25" />
          <div className="relative p-3 pb-0">
            <div className="h-[640px] rounded-t-[42px] overflow-hidden focus:outline-none" tabIndex={0}>
              <div className="relative hidden lg:flex justify-center h-full">
                <div className="text-center flex flex-col p-6">
                  <div className="grow flex items-center">
                    <div>
                      <h3 className="mono-tag text-white mb-12">LET&apos;S PLAY</h3>
                      <div className="flex flex-col gap-1.5 items-center" role="radiogroup">
                        {games.map((game) => (
                          <div key={game} className="relative w-32">
                            {game === selectedGame && (
                              <div className="absolute inset-0 border border-white">
                                <div className="absolute -inset-y-px inset-x-1 bg-background border border-background" />
                              </div>
                            )}
                            <button
                              type="button"
                              className={`w-full relative focus:outline-none py-0 px-3 text-sm mono-tag ${
                                game === selectedGame ? "text-white" : "text-secondary hover:text-white"
                              }`}
                              aria-checked={game === selectedGame}
                              role="radio"
                              onClick={() => setSelectedGame(game)}
                            >
                              {game}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-neutral-600">Powered by</p>
                    <div className="inline-block w-32 h-auto opacity-50">
                      <svg
                        width="88"
                        height="33"
                        viewBox="0 0 88 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-black dark:fill-white [&>path]:hidden sm:[&>path]:block [&>#mark]:block [&>#furigana]:opacity-60 w-32 h-auto opacity-50"
                      >
                        <path
                          d="M76.4462 24.7077V8.41584H79.0216V19.1679L84.4685 12.9109H87.5908L82.6908 18.2731L87.6364 24.7077H84.5596L80.5539 19.1788L79.0216 19.1679V24.7077H76.4462Z"
                          fill="currentColor"
                        />
                        <path
                          d="M68.6362 24.9815C64.8074 24.9815 62.7335 22.2662 62.7335 18.7979C62.7335 15.3068 64.8074 12.6143 68.6362 12.6143C72.4878 12.6143 74.5389 15.3068 74.5389 18.7979C74.5389 22.2662 72.4878 24.9815 68.6362 24.9815ZM65.4228 18.7979C65.4228 21.4904 66.8813 22.8366 68.6362 22.8366C70.4139 22.8366 71.8497 21.4904 71.8497 18.7979C71.8497 16.1054 70.4139 14.7363 68.6362 14.7363C66.8813 14.7363 65.4228 16.1054 65.4228 18.7979Z"
                          fill="currentColor"
                        />
                        <path
                          d="M55.5659 24.7077V14.782L57.731 12.9109H62.3347V15.1014H58.1413V24.7077H55.5659Z"
                          fill="currentColor"
                        />
                        <path
                          d="M45.7187 25.009C40.8101 25.009 37.8834 21.4448 37.8834 16.5846C37.8834 11.6788 40.9146 8.02795 45.8145 8.02795C49.6433 8.02795 52.4466 9.99027 53.1075 13.6411H50.1675C49.7345 11.5647 48.0024 10.401 45.8145 10.401C42.282 10.401 40.7322 13.4586 40.7322 16.5846C40.7322 19.7106 42.282 22.7454 45.8145 22.7454C49.1875 22.7454 50.6689 20.3039 50.7828 18.2731H45.7006V15.9105H53.381L53.3684 17.1457C53.3684 21.7359 51.4978 25.009 45.7187 25.009Z"
                          fill="currentColor"
                        />
                        <path
                          d="M13.2371 21.0407L24.3186 12.8506C24.8619 12.4491 25.6384 12.6057 25.8973 13.2294C27.2597 16.5185 26.651 20.4712 23.9403 23.1851C21.2297 25.8989 17.4581 26.4941 14.0108 25.1386L10.2449 26.8843C15.6463 30.5806 22.2053 29.6665 26.304 25.5601C29.5551 22.3051 30.562 17.8683 29.6205 13.8673L29.629 13.8758C28.2637 7.99809 29.9647 5.64871 33.449 0.844576C33.5314 0.730667 33.6139 0.616757 33.6964 0.5L29.1113 5.09055V5.07631L13.2343 21.0436"
                          fill="currentColor"
                          id="mark"
                        />
                        <path
                          d="M10.9503 23.0313C7.07343 19.3235 7.74185 13.5853 11.0498 10.2763C13.4959 7.82722 17.5036 6.82767 21.0021 8.2971L24.7595 6.55998C24.0826 6.07017 23.215 5.54334 22.2195 5.17313C17.7198 3.31926 12.3326 4.24192 8.67479 7.90126C5.15635 11.4239 4.0499 16.8403 5.94992 21.4622C7.36924 24.9165 5.04257 27.3598 2.69884 29.826C1.86829 30.7002 1.0349 31.5745 0.36364 32.5L10.9474 23.0341"
                          fill="currentColor"
                          id="mark"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 