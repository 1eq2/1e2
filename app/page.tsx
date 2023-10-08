export default function Home() {
  return <div style={{
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>
    <h1 style={{
      background: "linear-gradient(62deg,#37edcb,#67c3ff 32%,#378fff 43%,#718cff 48%,#878fff 51%,#c291ff 58%,#db92f4 68%,#ff8bc2 82%,#ff5e8d 90%,#ff345e 95%,#ff1a45)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      width: "fit-content",
      fontSize: "13vw",
      letterSpacing: 32,
      display: "flex"
    }}>
      <span style={{
        marginRight: "calc( -32px + 1vw )"
      }}>1</span>
      <span style={{
        display: "block",
        lineHeight: 1.38,
        letterSpacing: "3vw"
      }}>=</span>
      <span>2</span>
    </h1>
  </div>
}
