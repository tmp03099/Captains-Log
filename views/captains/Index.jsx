const React = require("react");

function Index({ logs }) {
  return (
    <div>
      <nav>
        <a href="/logs/new">Create a New Log</a>
      </nav>
      <h1>Index Log</h1>
      <ul>
        {logs.map((log, i) => {
          return (
            <li>
              {" "}
              Title {log.title}
              Entry {log.entry}
              {log.shipIsBroken ? "It is broken" : "The ship is good"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
module.exports = Index;
