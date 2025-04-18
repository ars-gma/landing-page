/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient1: {
          background: "rgb(0,105,195)",
          background:
            "linear-gradient(90deg, rgba(0,105,195,1) 0%, rgba(0,70,130,1) 35%, rgba(0,47,88,1) 100%)",
        },
        gradient2:
          "linear-gradient(to right, #4b9e1e, #009061, #007c8d, #006399, #004682)",
        hero2:
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1020%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(0%2c 70%2c 130%2c 1)'%3e%3c/rect%3e%3cpath d='M-6.76 238.47a35.5 35.5 0 1 0 67.84-20.96z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M517.55 364.36a26.94 26.94 0 1 0 53.78-3.34z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M884.59 246.66L909.97 246.66L909.97 272.04L884.59 272.04z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1346.36 376.86L1382 376.86L1382 412.5L1346.36 412.5z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M586.86 528.87L592.3 528.87L592.3 579.28L586.86 579.28z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M178.77 557.7L233.75 557.7L233.75 612.68L178.77 612.68z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M405.62 359.84L450 359.84L450 363.74L405.62 363.74z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M574.96 479.04 a3.86 3.86 0 1 0 7.72 0 a3.86 3.86 0 1 0 -7.72 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M1293.23 466.96L1327.9 466.96L1327.9 473.26L1293.23 473.26z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1099.9 416.79L1137.64 416.79L1137.64 454.53L1099.9 454.53z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M1338.03 460.51L1375.83 460.51L1375.83 475.7L1338.03 475.7z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M-4.35 13.58 a35.26 35.26 0 1 0 70.52 0 a35.26 35.26 0 1 0 -70.52 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M173.11 21.94 a53.75 53.75 0 1 0 107.5 0 a53.75 53.75 0 1 0 -107.5 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1398.64 351.49a35.47 35.47 0 1 0 31.23 63.69z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M619.25 481.52 a1.81 1.81 0 1 0 3.62 0 a1.81 1.81 0 1 0 -3.62 0z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M692.42 376.15a25.17 25.17 0 1 0-50.01-5.72z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M208.97 375.78 a46.45 46.45 0 1 0 92.9 0 a46.45 46.45 0 1 0 -92.9 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M469.33 356.87L481.67 356.87L481.67 369.21L469.33 369.21z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M942.7 427.68L969.56 427.68L969.56 432.71L942.7 432.71z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M1110.01 65.11L1132.07 65.11L1132.07 87.17L1110.01 87.17z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M413.85 220.55 a54.52 54.52 0 1 0 109.04 0 a54.52 54.52 0 1 0 -109.04 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M109.94 430.17a20.84 20.84 0 1 0 40.08 11.44z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M472.92 12.97a44.03 44.03 0 1 0-79.96 36.89z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M895.54 190.64L939.67 190.64L939.67 234.77L895.54 234.77z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M42.73 120.27a40.5 40.5 0 1 0-78.69-19.24z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M899.85 328.61L930.83 328.61L930.83 359.59L899.85 359.59z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M646.97 287.99L667.68 287.99L667.68 336.83L646.97 336.83z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M324.41 68.31a17.46 17.46 0 1 0-24.45 24.93z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M389.75 553.22 a53.45 53.45 0 1 0 106.9 0 a53.45 53.45 0 1 0 -106.9 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M618.02 226.36L660.15 226.36L660.15 268.49L618.02 268.49z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1229.49 128.32 a38.35 38.35 0 1 0 76.7 0 a38.35 38.35 0 1 0 -76.7 0z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1173.31 1.2 a22.23 22.23 0 1 0 44.46 0 a22.23 22.23 0 1 0 -44.46 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1330.59 507.01L1352.31 507.01L1352.31 534.81L1330.59 534.81z' fill='%23037b0b'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1020'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e\")",
        hero1:
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1087%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c67 C 48%2c92.4 144%2c201.4 240%2c194 C 336%2c186.6 384%2c18.2 480%2c30 C 576%2c41.8 624%2c253.4 720%2c253 C 816%2c252.6 864%2c26.6 960%2c28 C 1056%2c29.4 1104%2c248.8 1200%2c260 C 1296%2c271.2 1392%2c119.2 1440%2c84L1440 560L0 560z' fill='rgba(0%2c 70%2c 130%2c 0.6)'%3e%3c/path%3e%3cpath d='M 0%2c555 C 28.8%2c518.6 86.4%2c372.6 144%2c373 C 201.6%2c373.4 230.4%2c568 288%2c557 C 345.6%2c546 374.4%2c339.8 432%2c318 C 489.6%2c296.2 518.4%2c430.2 576%2c448 C 633.6%2c465.8 662.4%2c402.2 720%2c407 C 777.6%2c411.8 806.4%2c489.2 864%2c472 C 921.6%2c454.8 950.4%2c316 1008%2c321 C 1065.6%2c326 1094.4%2c483.6 1152%2c497 C 1209.6%2c510.4 1238.4%2c382.6 1296%2c388 C 1353.6%2c393.4 1411.2%2c496.8 1440%2c524L1440 560L0 560z' fill='rgba(1%2c 88%2c 163%2c 0.56)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1087'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e\")",
      },
      colors: {
        brandBlue: "#004682",
        brandGreen: "#4B9E1E",
        brandWhite: "#DFDFDF",
        background1: "#153458",
      },
    },
  },
  plugins: [],
};
