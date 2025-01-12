import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

export default function HomeLayout() {
  return (
    <div className="font-poppins w-11/12 mx-auto">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="py-4">
        <Navbar></Navbar>
      </nav>
      <main></main>
    </div>
  );
}
