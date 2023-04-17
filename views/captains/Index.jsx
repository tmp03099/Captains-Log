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
            <li key={log._id}>
              Title: {log.title} <br />
              Entry: {log.entry} <br />
              {log.shipIsBroken ? " It is broken " : " It is good "} - created
              in <a href={`/logs/${log._id}/edit`}>Edit</a>
              <form method="POST" action={`/logs/${log._id}?_method=DELETE`}>
                <input type="submit" value="DELETE" />
              </form>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
module.exports = Index;
