import Link from "next/link";

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
    <div className="carousel carousel-center bg-neutral  ">
      
        <div className="carousel-item px-10">
<Link href="/about">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="Pizza"
          />
</Link>
        </div>
      
      
        <div className="carousel-item px-10">
<Link href="/">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Pizza"
          />
</Link>
        </div>
      
      
        <div className="carousel-item px-10">
<Link href="/">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Pizza"
          />
</Link>
        </div>
      
      
        <div className="carousel-item px-10">
<Link href="/">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            alt="Pizza"
          />
</Link>
        </div>
      
      <div className="carousel-item px-10">
<Link href="/">
        <img
          src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
          alt="Pizza"
        />
</Link>
      </div>
      <div className="carousel-item px-10">
<Link href="/">
        <img
          src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
          alt="Pizza"
        />
</Link>
      </div>
      <div className="carousel-item px-10">
<Link href="">
        <img
          src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
          alt="Pizza"
        />
</Link>
      </div>
    </div>
  );
}
