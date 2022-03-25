import { useState } from "react";

const Index = () => {
  const [html, setHtml] = useState("");
  const [hast, setHast] = useState("");

  const handleConvert = async () => {
    try {
      const res = await fetch("/api/hast", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fragment: html }),
      });
      const json = await res.json();

      setHast(JSON.stringify(json, null, 2));

      console.log(json);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ width: 960, margin: "3rem auto" }}>
      <style jsx global>
        {`
          html,
          body,
          button {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
          }
        `}
      </style>
      <h1 style={{ margin: 0 }}>html-to-hast</h1>
      <h4 style={{ margin: "0 0 2rem 0" }}>by @matthewkturner</h4>
      <textarea
        value={html}
        onChange={(event) => setHtml(event.target.value)}
        style={{ border: "1px solid gray", height: 200, width: '100%' }}
        placeholder="<h1>Hello, world!</h1>"
      ></textarea>
      <div style={{ display: 'flex', justifyContent: 'right'}}>
        <button
          style={{
            textTransform: "uppercase",
            borderRadius: 0,
            border: '1px solid green',
            backgroundColor: "limegreen",
            color: "white",
            fontWeight: 'bold',
            padding: '0.5rem 1rem'
          }}
          onClick={handleConvert}
        >
          Convert
        </button>
      </div>
      <pre
        style={{
          backgroundColor: "silver",
          border: "1px solid gray",
          boxShadow: "10px 10px 0px gray",
          overflowX: "scroll",
          padding: "1rem",
        }}
      >
        {hast}
      </pre>
    </div>
  );
};

export default Index;
