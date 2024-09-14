import { remark } from "remark";
import html from "remark-html";
import fs from "fs";
import matter from "gray-matter";

const md = fs.readFileSync("src/app/about/about.md", "utf8");
const metadata = matter(md);
const pagedata = await remark().use(html).process(metadata.content);
const pageHTML = pagedata.value;

export default function About() {
  return (
    <>
      {/* Hero and that */}
      <section className=" flex justify-center bg-base-100 text-base-content   ">
        <div className="hero   min-h-screen bg-neutral  rounded-xl ">
          <div className="hero-content max-w-xl text-center">
            <div className="">
              <h1 className=" text-4xl  md:text-5xl md:text-nowrap  md:font-bold ">
                Better separation solutions
              </h1>
              <p className="py-6 text-neutral-content">
                {" "}
                Wyuna Separation Technology is India's premier liquid separation
                solutions provider.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-neutral text-base-content">
        <div className=" justify-center p-20  flex md:justify-start  md:bg-base-300 md:min-h-screen md:rounded-xl md:p-40   ">
          <div className="">
            <div className=" max-w-xl ">
              <h2 className=" text-4xl md:font-bold justify-center md:justify-start ">
                Core Principle
              </h2>
            </div>
            <div className=" max-w-xl text-pretty ">
              <p className=" py-8 text-md lg:text-lg md:py-6 font-thin lg:text-neutral-content text-sm md:text-md">
                Since the Company’s beginning, Wyuna Separation Technology's
                name has gone hand in hand with invention, flexibility and
                adaptability, qualities that allow us to anticipate trends and
                respond with creative ideas. These qualities have been hallmarks
                of the WyunaSep business since its founding members foresaw the
                advent of the Hydrocyclones and wisely diversified into
                innovative engineered products.
              </p>
              <p className=" py-8 text-md lg:text-lg md:py-6 font-thin lg:text-neutral-content text-sm md:text-md">
                More than just products, but a promise, Wyuna Separation
                Technology says “The proof of the product is in the performance”
                and it’s a commitment we apply in our relationships with
                everyone important to our business. Wyuna Separation Technology
                is focused on ensuring it’s more than a supplier of goods but,
                importantly, a partner in a process that seeks to continually
                deliver the newest and most exciting solutions to our markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and values */}
      <section className=" text-primary-content p-10">
        <h2 className=" text-center pt-10 pb-20 text-4xl ">Our Values</h2>
        <div className=" flex justify-center text-pretty ">
          <div className=" text-pretty p-4  md:grid md:grid-cols-2 md:gap-10 md:p-4 md:align-middle ">
            <div key={1} className=" bg-slate-200 rounded-md p-10 ">
              {/* insert icon  */}
              <h3 className=" text-2xl pb-4 ">Vision</h3>
              <li className=" list-disc text-sm md:text-md">
                To build a leading global business servicing the process
                industry using innovation to develop technology that provides
                tangible benefits for our customers.
              </li>
            </div>
            <div
              key={2}
              className=" bg-slate-200 rounded-md p-10 mt-10 md:mt-0 "
            >
              <h3 className=" text-2xl pb-4 ">Purpose</h3>
              <li className=" list-disc text-sm md:text-md">
                Since its establishment the purpose of the Company has been to
                increase the value of its shareholders’ investment by the
                generation of profits. The Company, through its employees,
                achieves this purpose by meeting the needs of customers for the
                products and services it offers.
              </li>
            </div>
            {/* <div key={3} className=" bg-slate-200 rounded-md p-10"> */}
            {/*   <h3 className=" text-2xl ">Environmental Responsibility</h3> */}
            {/*   <li className=" list-disc "> */}
            {/*     Since its establishment the purpose of the Company has been to */}
            {/*     increase the value of its shareholders’ investment by the */}
            {/*     generation of profits. The Company, through its employees, */}
            {/*     achieves this purpose by meeting the needs of customers for the */}
            {/*     products and services it offers. */}
            {/*   </li> */}
            {/* </div> */}
            {/* <div key={4} className=" bg-slate-200 rounded-md p-10"> */}
            {/*   <h3 className=" text-2xl ">Strategy</h3> */}
            {/*   <li className=" list-disc "> */}
            {/*     Wyuna Separation Technology places great emphasis on ethics that */}
            {/*     seek to minimise environmental impacts, in all aspects of our */}
            {/*     business, to the best of our ability. We understand that the */}
            {/*     industries we serve can potentially harm the quality of our */}
            {/*     earth / air and places a high priority in proactively */}
            {/*     identifying and responding to anticipated health, safety and */}
            {/*     environmental hazards. From the outset, we encourage */}
            {/*     partnerships between stakeholders, including our own teams of */}
            {/*     specialist engineers and consultants, our clients and the */}
            {/*     communities they serve, so that positive outcomes are achieved. */}
            {/*     We seek to fully comply with all government, industry and other */}
            {/*     codes to ensure we meet our obligations. */}
            {/*   </li> */}
            {/* </div> */}
          </div>
        </div>
      </section>

      <section className=" text-primary-content p-10 ">
        <h2 className=" text-center pt-10 pb-20 text-4xl ">
          Environmental Promise
        </h2>
        <div className=" flex justify-center text-pretty bg-slate-200 p-10 mx-10 rounded-md text-sm md:text-md ">
          Wyuna Separation Technology places great emphasis on ethics that seek
          to minimise environmental impacts, in all aspects of our business, to
          the best of our ability. We understand that the industries we serve
          can potentially harm the quality of our earth / air and places a high
          priority in proactively identifying and responding to anticipated
          health, safety and environmental hazards. From the outset, we
          encourage partnerships between stakeholders, including our own teams
          of specialist engineers and consultants, our clients and the
          communities they serve, so that positive outcomes are achieved. We
          seek to fully comply with all government, industry and other codes to
          ensure we meet our obligations.
        </div>
      </section>
    </>
  );
}
