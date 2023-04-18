const React = require("react");
const moment = require("moment");
moment().format();

function Show({ log }) {
  return (
    <div>
      <h1>Show Captain's Log</h1>
      <p>
        Title: {log.title} <br />
        Entry: {log.entry} <br />
        {log.shipIsBroken ? " It is broken " : " It is good "} - created in{" "}
        {moment().format("MMMM Do YYYY, h:mm:ss a").toString()}
      </p>
      <a href="/logs">Back</a>
    </div>
  );
}

module.exports = Show;
