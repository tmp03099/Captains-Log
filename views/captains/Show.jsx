const React = require("react");
const moment = require("moment");
moment().format();

function Show({ log }) {
  return (
    <div>
      <h1>Show Captain's Log</h1>
      <p>
        The title {log.title} entry {log.entry}
        {log.shipIsBroken ? "It is broken" : "The ship is good"}
        created {moment().format("MMMM Do YYYY, h:mm:ss a").toString()}
      </p>
    </div>
  );
}

module.exports = Show;
