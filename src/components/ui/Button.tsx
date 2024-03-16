import Image from "next/image";

export const Button = () => {
  return (
    <button className=" text-white text-2xl group flex items-center justify-center hover:scale-110 transition hover:text-neutral-400">
      <p className="ml-28">Shop now</p>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="250"
        height="120"
        viewBox="0 0 388.000000 240.000000"
        preserveAspectRatio="xMidYMid meet"
        className="fill-white group-hover:fill-neutral-400 transition"
      >
        <g
          transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path d="M2426 2365 c-434 -82 -789 -395 -919 -810 -24 -78 -39 -159 -52 -277 l-6 -58 -685 0 c-601 0 -684 -2 -684 -15 0 -13 83 -15 684 -15 l685 0 5 -57 c12 -116 44 -260 78 -349 185 -490 684 -803 1202 -754 472 45 868 356 1016 798 96 287 76 611 -55 887 -116 244 -340 460 -588 568 -157 67 -258 89 -442 93 -113 2 -183 -1 -239 -11z m328 -15 c176 -21 341 -78 492 -171 119 -73 290 -243 362 -360 240 -390 234 -876 -15 -1252 -63 -96 -207 -243 -298 -306 -302 -209 -684 -266 -1025 -151 -357 119 -640 413 -744 772 -25 87 -46 212 -46 274 l0 34 562 0 562 0 -58 -59 c-39 -40 -54 -61 -46 -66 8 -5 40 20 86 66 l74 74 -74 74 c-47 46 -78 71 -86 66 -8 -5 7 -26 46 -66 l58 -59 -562 0 -562 0 0 38 c0 63 29 222 56 301 172 519 685 852 1218 791z" />
        </g>
      </svg>
    </button>
  );
};
