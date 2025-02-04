
import Navbar from "./navbar";
import Experience from "./experience";
import SocialWheel from "./social-wheel";


export default function Home() {
  

  return (
    <main className="flex flex-col">
      <Navbar />
      <Experience/>
      <SocialWheel/>
    
    </main>
  );
}
