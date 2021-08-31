import React from "react";

/** Display error message
 *
 * @returns JSX React component
 */
export default function ErrorMessage() {
  return (
    <section className="dashboard">
    <div className="dashboard_container">
      <p className="dashboard_title">
        Erreur lors du chargement de la page, veuillez réessayer.
      </p>
    </div>
  </section>
  );
}
