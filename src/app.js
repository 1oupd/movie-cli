const connection = require("./db/connection");
const yargs = require("yargs");
const addMovie = require("./utils");

//logic for app lives here

const app = () => {
  try {
    switch (process.argv[2]) {
      case "add":
        connection(addMovie, {
          title: yargs.argv.title,
          actor: yargs.argv.actor,
        }); //create function
        break;

      default:
        console.log("incorrect command");
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

app();
