import { headers } from "next/headers";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {

  // Run `next build`
  try {
    headers();
  } catch (err) {
    console.error("CAUGHT: ", err);
  }

  return <div>page</div>;
}
