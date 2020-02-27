import React, { useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { Chart } from "chart.js";
import { metronic } from "../../_metronic";
import './search.scss';

export default function SalesBarChart({ title, desc }) {
  return (
    <div className="searhh kt-widget14">
      <div className="textList">
        <div className="response-row">
          <div className="sentiment f7-icon f7-happy-fill"></div>
          <div className="textResponseContainer full"><span className="match">I like that it is <em>sugar</em> free- I also like the price. And Hershey's is the best</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-happy-fill"></div>
          <div className="textResponseContainer full"><span className="match">reduced <em>sugar</em> but same great taste</span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-happy-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Trust Hirsh my would love less <em>sugar</em></span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-happy-fill"></div>
          <div className="textResponseContainer onlyMatches"><span
            className="match">I like the brand and that it contains less <em>sugar</em> with the same great taste.</span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-happy-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">I like that it is 50 percent less <em>sugar</em> and carbs, and it’s also fat free.</span>
          </div>
        </div>

        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">i like that it has less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Lite <em>sugar</em> is better depending on ingredients </span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">its got a lil better <em>sugar</em> content</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">reduced <em>sugar</em> and the price is fair.</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">I like that it has reduced <em>sugar</em>. </span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Reduced <em>sugar</em> but still has the good flavor</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">I like that it is 50% reduced <em>sugar</em></span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">I love that it is reduced <em>sugar</em> hershey syrup </span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">50% less <em>sugar</em> is better for this brand of product</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">That it's not just less <em>sugar</em> but also carbs, calories and it's fat free</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Ity has half the <em>sugar</em>,  less calories,  will still taste great</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">I like that it isn't just low <em>sugar</em> but carbs as well</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">I like that it has 50% less <em>sugar</em> and the price </span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">The reduced <em>sugar</em>, carbs, and calories, and that it's from a trusted brand.</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">I've enjoyed Hershey's Chocolate Syrup since childhood. My wife likes the 50% less <em>sugar</em>.</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">I love the Brand and it's Lite on <em>Sugar</em> but full on Taste</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">It has less <em>sugar</em> and fewer calories than the original syrup.</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Its says that its 50% <em>sugar</em> which is good. The blue color on the label makes it stand out</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">It clearly highlights on the front that it has half the <em>sugar</em>, carbs and calories. I like that!</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">I like that Hershey's offers an alternative syrup with less <em>sugar</em> but the same original taste</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-smile-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">I like that it is reduced <em>sugar</em>, which would be helpful when using it to flavor my coffee</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">reduced <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">reducing <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Lite <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Reduced <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Less <em>sugar</em> </span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Less <em>sugar</em> </span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">It has reduced <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">It has less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Less <em>sugar</em>, carbs &amp; calories</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Less calories and <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Nothing really. Low <em>sugar</em>.</span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">brand and reduced <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">It has less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Same taste, reduced <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Cheep and less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Allowing calories and <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">The reduced <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Less <em>sugar</em> same taste</span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">50% less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Its reduced <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">50%less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">50 percent less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Reduced <em>sugar</em> and carbs</span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Less calories and <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">the reduced <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Has less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Price name brand reduced <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">50% less <em>sugar</em> and carbs </span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">50% less <em>sugar</em> and carbs</span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">50% less carbs and <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Its hersheys!!! And light <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">50% less <em>sugar</em> and price</span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">50% <em>sugar</em>, carbs and calories</span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Lite not as much <em>sugar</em> </span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">it doesn't have a lot of <em>sugar</em>.</span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">it has less <em>sugar</em>, carbs and calories</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">That it has 50% less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">It has 50 percent less <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">The Hershey taste with less <em>sugar</em></span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">that it is lite in <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">%0% les fat carbs and <em>sugar</em></span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">its by hersheys and its less <em>sugar</em></span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">The product has 50% less <em>sugar</em>.</span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">It has reduced <em>sugar</em> and real chocolate flavor</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Only 1/2 the <em>sugar</em>, 20 calories per serving </span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span
            className="match">It has less <em>sugar</em> and less calories in it.</span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">That there’s 50% less <em>sugar</em> carbs and calories </span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">It`s from Hersheys and 50% less <em>sugar</em></span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">It's lite which means less <em>sugar</em> and it's Hershey's</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Its 50% less in <em>sugar</em> and carbs and calories</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span
            className="match">That it has a reduced amount of <em>sugar</em> </span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span
            className="match">It’s not that much <em>sugar</em> in this brand.</span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">It has 50% less <em>sugar</em>, carbs, and calories then regular chocolate syrup.</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">That it is a healthier alternative to make chocolate milk with less <em>sugar</em> and calories </span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span
            className="match">The quality, its brand is very good, it is low in <em>sugar</em>, very nutritious</span></div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">It is reduced <em>sugar</em>, so my kids dont intake as much</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">Has half the <em>sugar</em> made by a very high quality flavorful brand</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">less <em>sugar</em>.  I need to try it and see what it taste like</span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">I like that it cuts <em>sugar</em> by 50% The price is reasonable </span>
          </div>
        </div>
        <div className="response-row"><div className="sentiment f7-icon f7-neutral-fill"></div>
          <div className="textResponseContainer onlyMatches"><span className="match">I like that it has less <em>sugar</em>, carbs and calories than regular chocolate syrup. The price is reasonable too.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
