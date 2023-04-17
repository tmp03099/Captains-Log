const React = require("react");
function New() {
  return (
    <div>
      <h1>New Logs</h1>
      <form action="/logs" method="POST">
        Title: <input type="text" name="title" />
        <br />
        Entry:
        <textarea type="textarea" name="entry" rows="4" cols="21"></textarea>
        <br />
        Is broken: <input type="checkbox" name="shipIsBroken" />
        <br />
        <input type="submit" name="" value="submit" />
      </form>
    </div>
  );
}
module.exports = New;
