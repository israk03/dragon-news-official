import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

export default function HomeLayout() {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-10/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav></nav>
      <main></main>
    </div>
  );
}
