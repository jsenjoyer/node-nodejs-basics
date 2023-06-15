const parseArgs = () => {
  const ARGS = process.argv;

  const finalstring = ARGS.filter((item) => item.includes("--"))
    .map((arg) => {
      return [
        `${arg.substring(2, arg.length)} is ${
          ARGS[ARGS.findIndex((item) => item === arg) + 1]
        }`,
      ];
    })
    .join(", ");
  console.log(finalstring);
};

parseArgs();
