import React from "react";
import "./About.css";
export default function About() {
  return (
    <>
      <div className="container-form">
        <div className="entrance-form">
          <h2>Country Info Application</h2>
          <div class="bottom-line"></div>
          <p>Includes latest Covid Updates</p>
        </div>
      </div>
      <div>
        <div className="grid-container">
          <div className="item">
            <h4>Country Finder Project</h4>
            <img
              src="https://m.media-amazon.com/images/I/61nTuLYI7pL._AC_SX522_.jpg"
              alt=""
              width="180"
              height="150"
            />
            <p>
              This project was developed using React.js. The latter is a JS
              library that is used for building user interfaces specifically for
              single-page applications.
            </p>
          </div>

          <div className="item">
            <h4>Rest Countries API</h4>
            <img
              src="https://i.guim.co.uk/img/media/d78a425025aff2bb0c177fcd28980af565ffa044/0_204_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=7ac65775924040fd0336fa6bbe88a9f6"
              alt=""
              width="180"
              height="150"
            />
            <p>
              The Country Finder project fetches data dynamically from REST
              COUNTRIES API and draws upon API Endpoints V2.
              [https://restcountries.com/#rest-countries]
            </p>
          </div>

          <div className="item">
            <h4>Covid-19 API</h4>
            <img
              src="https://www.massgeneral.org/assets/MGH/images/News/coronavirus/Updated%20Landing%20Page%20Hero%20optimized.jpg"
              alt=""
              width="180"
              height="150"
            />
            <p>
              The Country Finder project also fetches data dynamically from
              another API to dynamically paint data related to the current
              COVID-19 pandemic. [https://api.covid19api.com]
            </p>
          </div>
          <div className="item">
            <h4>About Me</h4>
            <img
              src="https://cf.shopee.ph/file/67a83934180907e6b46237c2e52fce4f"
              alt=""
              width="180"
              height="150"
            />
            <p>
              Well... I'm Claude. I currently live in Germany & I'm midway upon
              the journey of my life. The pathway has not yet been lost but I
              believe that humanity is overrated.
            </p>
          </div>

          <div className="item">
            <h4>Collaboration</h4>
            <img
              src="https://assets.ey.com/content/dam/ey-sites/ey-com/en_gl/topics/wealth-and-asset-management/ey-community-collaboration-20180821.jpg"
              alt=""
              width="180"
              height="150"
            />
            <p>
              Collaboration is of the essence. We may be stronger together than
              alone. However, in the end as the philosopher Wittgenstein said
              the limits of our language are the limits of our world.
            </p>
          </div>

          <div className="item">
            <h4>Digital Career Institute</h4>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAk1BMVEX///8bOcoAKsgXN8oAIcfh5vits+fj5PYQM8ldbtb7/P5WZ9Tw8vseP8yxuuwHMMnIz/Hq7fsALMiXn+EAJcfW2vTDye4wSc4JMMh4h90AHsajrec/VdDe4fZqetn2+P2bpuW6we2Vn+KFkd8oQ8zR1vNygdsAGMZOY9SNmeLAxu5neNk5UNBIXdMAAcQjQcx+i96oxPhcAAAFzUlEQVR4nO2da3eqOhBAIUEPPhEOKmrxVbXWx6X//9ddXacoTALkelglmTv7K61mOyGQMBksiyAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiCIH2G13yzWv/Ns+023qib8zWHqOCELAB9+0y2rg3776AURtyUwBIL9z2ngSu1QCHbbO1Zkh0HQ74QleuYLTmyvTM94wXZ5+IwXHFb6mS04KhtdEAj6u2o/owXPFeOL6YKbUMHPYMHVVKGDmiy4YCp+BgsWBpDnCE0VPAVyuyCwp1lsUwXPkUTP9S7b0bjlZ2m6oa8yl0TPuY6ablZtnMRrBPfaTbeqRj6FU5BzPOG7cXShH0Pl1xWWKNii6TbVSuzA8fPadJPqRRhjPFQdVLxPc49Nt6hmtmAQRXYGWtYXmAq646ZbVDPL/I0avxh7R1bAOX8ZdK+rpltUL90OEOx1m25SvYiCTbeoZiiCpkMRNJ3/YQRJ0Cx0PAf77WE1p1HcXykE49UIrsD3teO/tMrw6x9WTRg6LDkeFvuKD3s1gnEY5r7vo8Z1uF9wkaEI7nrMcQ+Tsg97NYItnl/KYU0I/rH0WLIoniGYL3h3ZNPCr3+1i2oleH+Q0ikYBFBE8I6XbHAL2ny+VhNUa4R+grY9/1QSNDWCN0KJISpB2Zonpi56v/ILy/K4Imi7U5h3jSuCth0sKwWNjqBtO6CTmiDIQwdwu9P3ClKv+c44QZ6MxoD9afHZmTJp8nyYH0kNOAd5Ip8r+JPDQJJEyHe5ccaECA4Kd6TEh0AMYv5iaEIEiwXviZKCIX/LRtzsCN7/2BYMney8wnhBa8yhodvJHDa9i1qSbFBuZya/5kfQWl1hKlN2mEEgaA1hJkw2UwRBFxVTsnkmtRVDBIVUGDt4LpWiEIxhymvwnNpj6KJi1nnmJEQRQesd3JPy6HEIRwQ38FIYttJDOCLYgqMMe4wyOAQteLv2bA4SQZiX7b2nR3Ccg9YM7P143m8jieAajDL8LT2CJIInKDhIjyCJ4AhuT2KpBhLBPRxG5+ntNpIuGsOFCyed8yKJYCuBgmnqORJBYRt5mK7gI+mifTifKBE0MoIkmBFUa4TBgjgi6KRJekgiKIyi6K6DA/U7GSMFx/BOJkz/B4ngCEx4uZseQXIOTsCizPNJPZIICvtYHxuRkUQQbvOMHukySCLYg4tOj7V7JBGEgygbpkdwRFBc+H3kO+EQFJfuHw8IcQgKD1/44xCOc1B4fPbMs0AhKD4AXT+OCYJHtW3mWgn+hmNMth7HMi/I39RKFeskuLrAJIQk8x+z/PnJ7VbxJ2XQSVAoqJI7zz7BAMROSo3QSRCcZaAxa9B/I5j0LEcjwUlpKpc1hM9lEqVqHfoIdoVMrvyVYA8zwIP3oo/Koo/gVqjMmM+IXQll1UKV3araCE48mE3JB/k+CMdYpbt3bQRhO25Eh/yfzITE7qinsIylh2C8gyfgrQeCfctwlLkRHCsvhnoIngaiXy7f944vKd4Y7doVkwodBP2ZrLa0I1zIZfVTObusS6PY/L6J/SyUlV6W1L2TV8DlwZwfz8tZyvv7V/aH/NEIbiaA4facePLK0o5YOcAvegEDd93ogeflXqjxo5uz4Ks9Alb40ghPdiN2UKmyDYoYa7r7DF4D/yDuPDBWsKAZX/IyxuYJCtsjv+mrlLo3QNB9K1qOOEmuheYJlk3WtwrV7nUX5G5ZbZlldTl4zQXd8tLL3U7lQKO3YLSrqA3UPVS9NERnQR4qzIDWoXhrboigx9YqHxwfnbIg6irIvXCpttZ5mxtewsI3g+kpyF1mL6sqc2VYDXucFThqJsj5vSiXfd3+x4Jn3Xjd23kscjkkBII5ahX88KpxXTu5zoavlXNrjRaz3iX5/p2+cfOC4Pes8/0Gq8lIgfFfV1vu9n3fb6XE8Ti3itEHIKt9TBAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQejJv81KgMyVn+YnAAAAAElFTkSuQmCC"
              alt=""
              width="180"
              height="150"
            />
            <p>
              The Digital Career Institute was born as an initiative to
              integrate refugees into digital jobs. Today it is committed to
              train anyone who wants to pursue a tech career. DCI measures
              success by impact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
