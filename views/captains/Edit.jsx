const React = require("react");

function Edit({ log }) {
  return (
    <form action={`/logs/${log._id}?_method=PUT`} method="POST">
      Title: <input type="text" name="title" defaultValue={log.title} />
      <br />
      Entry:
      <textarea
        type="textarea"
        name="entry"
        rows="4"
        cols="21"
        defaultValue={log.entry}
      ></textarea>
      <br />
      Is broken: <input type="checkbox" name="shipIsBroken" defaultChecked />
      <br />
      <input type="submit" name="" value="submit" />
    </form>
  );
}

module.exports = Edit;
