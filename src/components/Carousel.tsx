import Link from "next/link";
import coolantFilter from "@/public/images/Wyunasep Coolant Filtration.jpeg";
import oilSkimmer from "@/public/images/Oil Skimmer.jpg";

const goTo = (event: any) => {
  event.preventDefault();
  const btn = event.currentTarget;

  const carousel = document.querySelector(".carousel");
  const href = btn.getAttribute("href");
  const target = carousel?.querySelector(href);
  const left = target.offsetLeft;
  carousel?.scrollTo({ left: left });
};

export default function Carousel() {
  return (
    <section className=" flex justify-center p-4 md:p-10  ">
      <div className="carousel carousel-center bg-neutral rounded-box max-w-screen  space-x-4 p-4 gap-4 shadow-sm  w-11/12">
        <div className="carousel-item">
          <Link href="/blog/Coolant_Filter">
            <img
              src={coolantFilter.src}
              className=" h-56 w-auto rounded-box bg-cover shadow-md hover:scale-110 transform transition-transform"
            />
          </Link>
        </div>
        <div className="carousel-item">
          <img
            src={oilSkimmer.src}
            className=" h-56 w-auto rounded-box bg-cover shadow-md hover:scale-110 transform transition-transform"
          />
        </div>
        {/* <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            className="rounded-box"
          />
        </div> */}
      </div>
    </section>
  );
}
