import { parseFragment } from "parse5";
import { fromParse5 } from "hast-util-from-parse5";

const html =
  '<h1>Hello, <a href="https://maps.google.com">world</a></h1>';

export default function handler({ method, body }, res) {
  if (method === "POST") {
    const hast = fromParse5(parseFragment(body.fragment));

    res.status(200).json(hast);
  } else {
    res.status(405).json({ errors: [{ message: 'Method not allowed '}]});
  }
}
