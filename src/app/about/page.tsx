import { remark } from "remark"
import html from "remark-html"
import fs from 'fs'
import matter from "gray-matter"

const md = fs.readFileSync("src/app/about/about.md", 'utf8')
const metadata = matter(md)
const pagedata = await remark()
  .use(html)
  .process(metadata.content);
const pageHTML = pagedata.value;



export default function About() {
  return (
    <><section className=" flex justify-center bg-base-100 text-base-content  ">
      <div className="hero   min-h-screen bg-neutral  rounded-xl ">
        <div className="hero-content max-w-xl text-center">
          <div className="">
            <h1 className=" text-4xl  md:text-5xl md:text-nowrap  md:font-bold ">Better seperation solutions</h1>
            <p className="py-6 text-neutral-content"> Wyuna Seperation Technology is India's premier liquid seperation solutions provider.</p>
          </div>
        </div>
      </div>
    </section>
      <section className=" bg-neutral text-base-content">
        <div className=" justify-center p-20  flex md:justify-start  md:bg-base-300 md:min-h-screen md:rounded-xl md:p-40   ">
          <div className="">
            <div className=" max-w-xl ">
              <h2 className=" text-4xl md:font-bold justify-center md:justify-start ">Core Principle</h2>
            </div>
            <div className=" max-w-xl text-pretty ">
              <p className=" py-8 text-sm lg:text-lg md:py-6 font-thin lg:text-neutral-content">Since the Company’s beginning, Wyuna Separation Technology's name has gone hand in hand with invention, flexibility and adaptability, qualities that allow us to anticipate trends and respond with creative ideas. These qualities have been hallmarks of the WyunaSep business since its founding members foresaw the advent of the Hydrocyclones and wisely diversified into innovative engineered products.</p>
              <p className=" py-8 text-sm lg:text-lg md:py-6 font-thin lg:text-neutral-content">More than just products, but a promise, Wyuna Separation Technology says “The proof of the product is in the performance” and it’s a commitment we apply in our relationships with everyone important to our business. Wyuna Separation Technology is focussed on ensuring it’s more than a supplier of goods but, importantly, a partner in a process that seeks to continually deliver the newest and most exciting solutions to our markets.</p>
            </div>
          </div>
        </div>

      </section >

      {/* <div dangerouslySetInnerHTML={{ __html: pageHTML}}>
      </div> */}
    </>
  )
}
