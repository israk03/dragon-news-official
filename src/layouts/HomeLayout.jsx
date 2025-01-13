import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNav from "../components/LeftNav";
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

      <main className="grid md:grid-cols-12 gap-3 py-5">
        <aside className="col-span-3">
          <LeftNav></LeftNav>
        </aside>
        <main className="col-span-6">MAIN CONTENT</main>
        <aside className="col-span-3">RIGHT NAV</aside>
      </main>
    </div>
  );
}
