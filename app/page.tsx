const GradientText = ({ children, style }: {
  children: any,
  style?: React.CSSProperties
}) => {
  return <p style={Object.assign({
    //background: "linear-gradient(62deg,#37edcb,#67c3ff 32%,#378fff 43%,#718cff 48%,#878fff 51%,#c291ff 58%,#db92f4 68%,#ff8bc2 82%,#ff5e8d 90%,#ff345e 95%,#ff1a45)",
    background: "linear-gradient(90deg, #9c7898 0%, #847399 50%, #c7b7b6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    width: "fit-content",
    fontSize: "13vw",
    letterSpacing: 32,
    display: "flex",
    margin: 0,
  } as React.CSSProperties, style)}>
    {children}
  </p>
}
const Title = () => {
  return <GradientText style={{
    fontWeight: "bold",
  }}>
    <span style={{
      marginRight: "calc( -32px + 1vw )",
    }}>1</span>
    <span style={{
      display: "block",
      lineHeight: 1.38,
      letterSpacing: "3vw"
    }}>=</span>
    <span>2</span>
  </GradientText>
}

const BgImg = ({children}: {
  children: any
}) => {
  return <div style={{
    //backgroundImage: `url(/bg2.png)`,
    //filter: "grayscale(1)",
    //backgroundSize: "cover",
  }}>
    {children}
  </div>
}

export default function Home() {
  return <BgImg>
    <div style={{
      padding: 24,
      width: '90%',
      margin: "0 auto",
    }}>
      <div style={{
        borderBottom: '1px solid #eee',
        marginBottom: 24
      }}>
        <Title />
      </div>
      <GradientText style={{
        fontSize: 18,
        letterSpacing: "inherit",
        justifyContent: "space-between",
        width: "100%",
        display: "inline-block"
      }}>
        <span style={{
          fontSize: 32,
          fontWeight: "bold",
          display: "block",
        }}>
          今回出す作品
        </span>
        <br/>
        - Hypixel skyblock Book
        <br />
        - Coming soon...
        <br/>
        <br/>
        <span style={{
          fontSize: 26,
          fontWeight: "bold",
          display: "block",
        }}>Hypixel skyblock Book</span>
        この本はHypixel Skyblockの解説本です。
        序盤に終点を当てて書いていて、この1冊があればゲームの序盤で困ることはないでしょう
        <br />
        First bingo event 16位の著者が書くBingo Eventの解説もあり、初心者に優しい本です
        {/*<img style={{
          float: "right",
          maxWidth: "40%"
        }} src="/banner.png" alt="" />*/}
      </GradientText>
    </div>
    {/*<div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Title />
  </div>*/}
  </BgImg>
}
