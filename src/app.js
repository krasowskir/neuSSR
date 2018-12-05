import React from "react";
import PropTypes from "prop-types";

const App = ({ gists }) => (
  <ul>
    {gists.map(gist => {
      return <li key={gist.id}>{gist.description}</li>;
    })}
  </ul>
);

App.propTypes = {
  gists: PropTypes.array
};
export default App;
