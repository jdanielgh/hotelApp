import React from "react";

export default function Footer({company}) {
  return (
    <footer className="my-5 pt-5 text-muted text-center text-small right">
      <p className="mb-1">Mochileros.com - Grupo Andres - Daniel - Jesús &copy; 2019 {company}</p>
    </footer>
  );
}
