import { CardSection } from "./CardSection";
import { Navbar } from "./Navbar";
import { Roadster } from "./Roadster";
import { SubHeaderSec } from "./SubHeaderSec";
import { Footer } from "./Footer";
export function Home() {
  return (
    <div>
      <div className="main-banner" style={{ objectFit: "contain !important" }}>
        <div id="nav">
          <Navbar></Navbar>
        </div>
      </div>
      <hr/>
      <div>
        <SubHeaderSec></SubHeaderSec>
      </div>
      <hr/>

      <div>
        <CardSection></CardSection>
      </div>
      <hr />
      <div>
        <Roadster></Roadster>
      </div>
    
        <div>
            <Footer></Footer>
        </div>
    </div>
  );
}
