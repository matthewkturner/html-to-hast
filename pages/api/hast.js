import { parseFragment } from "parse5";
import { fromParse5 } from "hast-util-from-parse5";

const html =
  "The shipment is available for pick-up from the retail outlet <a href='http://standorte.deutschepost.de/Standortsuche?standorttyp=filialen_verkaufspunkte&ort=Berlin&strasse=Lindenallee+57&hausnummer=&postleitzahl=13088&lang=de' class='arrowLink' target='_blank'><span class='arrow'></span>retail outlet Lindenallee 56 13088 Berlin</a> as of now.";

export default function handler({ method, body }, res) {
  if (method === "POST") {
    console.log(body.fragment)
    const hast = fromParse5(parseFragment(body.fragment));

    res.status(200).json(hast);
  } else {
    res.status(405).json({ errors: [{ message: 'Method not allowed, bro. '}]});
  }
}
