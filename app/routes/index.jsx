import { Link } from "@remix-run/react";
import homeStyles from "~/styles/home.css";

export default function Index() {
  return (
    <main id="content">
      <h1 className="p-4 text-4xl font-semibold">
        A better way of keeping track of you notes
      </h1>
      <p>Try our early beta and never loose track of your notes again!</p>
      <p id="cta">
        <Link to="/notes">Try Now!</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homeStyles }];
}
