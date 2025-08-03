import React from "react";
import Search from "./components/search";

function App() {
  return (
    // Outer wrapper: fixed width, blue background, centered horizontally
    <div
      style={{
        backgroundColor: "#f0f4f8",
        width: "480px",           // fixed width or max width
        minHeight: "100vh",
        margin: "0 auto",         // center horizontally
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // vertical center inside viewport
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <header
        style={{
          backgroundColor: "navy",
          color: "white",
          padding: "15px 0",
          textAlign: "center",
          fontSize: "1.8rem",
          fontWeight: "bold",
          borderRadius: "8px",
          marginBottom: "30px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        GitHub User Search
      </header>
      <div className="text-red-500 font-bold">Tailwind is working!</div>


      <main
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          minHeight: "300px",
        }}
      >
        <Search />
      </main>
    </div>
  );
}

export default App;
