import React from "react";

/** Display greetings and the name of the actual user
 *
 * @param {string} props.userName The name of the actuel user
 * @returns JSX
 */
export default function Title(props) {
  return (
    <div className="dashboard_container">
      <h1 className="dashboard_title">
        Bonjour <span className="dashboard_title_name">{props.userName}</span>{" "}
      </h1>
      <p className="dashboard_title dashboard_title_small">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}
