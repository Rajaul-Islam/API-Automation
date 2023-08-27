const newman = require("newman");

newman.run(
  {
    //collection: require('./collection/dmoney.json'),
    collection:
      "https://api.postman.com/collections/22666982-3374b582-2303-40c6-bdd5-044e1ab65fce?access_key=PMAT-01H8NQ1E3B23RD3CJ5GTZYNMCS",
    
    //environment:require('./collection/env.json'),
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
