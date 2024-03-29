import React ,{useEffect,useState}from 'react'
import Header from './Header'
import Footer from './Footer'
import logo from '../assests/back.jpeg';
import logo1 from '../assests/uu.jpeg';
import logo2 from '../assests/bg1.jpeg';
export default function Homesection() {
  const [bookings, setbookings] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      try {
        // setloading(true)
        const data = await (await axios.get("/api/teacher/getallteacher")).data;
        setbookings(data);
       
      } catch (err) {
       
        console.log(err);
        
      }
    }

    fetchMyAPI();
  }, []);
  return (
    <>
    
    <Header/>
 
    <div className="flex row  text-center">
      
    <section class="text-gray-600 body-font px-40 py-10 bg-cover bg-center" style={{backgroundImage: `url(${logo1})`}}>
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Tute Me!
  <br class="hidden lg:inline-block"/>Platform
</h1>
<p class="mb-8 leading-relaxed bg-black bg-opacity-0 text-black">Education is the key to success. At Tute Me, we strive to provide top-notch educational resources and support to help you achieve your learning goals.</p>

      <div class="flex justify-center">
      <a href="/login" class="inline-flex text-white bg-customBlue border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">join AS student</a>

      <a href="/loginteacher" class="inline-flex text-white bg-customBlue border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">join AS teacher</a>

      </div>
    </div>
  </div>
</section>


                    
                    </div>
               
        
      
                    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">What is Tute me ?</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  
    <div className="flex row -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
      <div className="rounded-lg h-64  overflow-hidden">
        <a className="relative block   
                      bg-gray-900 group" href="##">
                    <div className="absolute  object-cover  bg-no-repeat object-center h-full w-full bg-[url(data:image/jpeg;base64,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)] inset-0 
                              group-hover:opacity-50">
                    </div>
                    <div className="relative p-10">
                        <div className="mt-2">
                            {/* Hidden content */}
                            <div>
                                <div className="p-2">
                                   
                                    <p className="text-xl text-white">
                                        Welcome to GeeksforGeeks.
                                    </p>
                                    <button className="px-4 py-2 text-sm 
                                            text-white bg-green-600">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                            {/* End of hidden content */}
                        </div>
                    </div>
                </a>
        </div>
        <div className="rounded-lg h-64 w-64 overflow-hidden">
        <a className="relative block   
                      bg-gray-900 group" href="##">
                    <div className="absolute  object-cover object-center  bg-no-repeat h-full bg-[url(data:image/jpeg;base64,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)] inset-0 
                            w-64  group-hover:opacity-50">
                    </div>
                    <div className="relative p-10">
                        <div className="mt-2">
                            {/* Hidden content */}
                            <div>
                                <div className="p-2">
                                   
                                    <p className="text-xl text-white">
                                        Welcome to GeeksforGeeks.
                                    </p>
                                    <button className="px-4 py-2 text-sm 
                                            text-white bg-green-600">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                            {/* End of hidden content */}
                        </div>
                    </div>
                </a>
        </div> 
        
      </div>
      {/* <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRUYGBgYHBoYGRgYGBgYGBgVGBgaGRgYGBocIS4lHB4rHxgYJjgmKy8xNTU2GiQ7QDs0Py40NTEBDAwMEA8QHxISHjYrJCs2NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NP/AABEIAIEBhQMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEEQAAIBAgMEBwUGAwgCAwAAAAECAAMRBBIhBTFBUQYiYXGBkaEyQlKxwRMzctHh8BYjYhQVJDSCkrLCU6IHc/H/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBAAX/xAAnEQACAgICAgICAgMBAAAAAAAAAQIRAxIhMUFREzIEImFxQlLBM//aAAwDAQACEQMRAD8AlxWJvhjlHC0SYBTkJlnGz3yFCNDrv48t0Bw+x3FxbTviHOL8hqMvRXtobwYTgQbRjidiuQOrr3zujst1U9X1mbx9m6y9CKqLPeTq2sPr7Le+i+sjbAONcs7aPs7V+hx0OBBcGWthKt0WuGa4tLTfSSTa2K4fUUlf8aPwH5xi0AY2xi/gPzEPPGBLoKPZJU9g/vhAdl+93wmtUsloFgGIBuDqZfiktURZYvZhJIzeEVVwM3j9ZOjtnO/dFz0nLjlf6wpStARTRNWtnA7JzjqAJXvE4rUDnBF90kxLnS/CBfDCDaVEBbDtneCpAC0gp1CRJ6IbwjY9i5Hb0xAdvbdXC0sx6zt1US+rtb0A3kwjF1sonkW2toticQz3OVRlQHcEHHsvvPfBmtuGHhbi7QNj8fXxFVmqnedy7u7SSIgW1z3Ab4RSw7XyIuZzvNvZHM9vZLZsXo6EGZ+sx1N4DkkNjFyKitBm3IQOZ0+n1ndOhzIHr6WHznow2WnKB4ro4rbhBU7DeMqlHZp35bjfdfy+ovLXsDZRcaMRbUMOztitdkVqTDIzCxuLXtftlq2biaqIWdV3a2Fg/b2GMiwJRaBquMdMbh0Nhc9cAdVmOge3aLXHMHnLTtLCqKL0hYC2dOy2tvK4lXwWF+0rrVf3g1hwC3C+l1MseIxWdUc/hcciLq3r84dgNFBZAGlz2DvHdK3icIVJ7CfQyybBOq901L9WKb/ZFnfcJCn1k1T2RIE+slfZWug7Cb53tN7Ie6cYXfONq3yaSnD0T5gDowhsx/qMscU7DpZU15xtGMXHoir+yZQMZhi1Rj2y/wBf2TKfWTrkd86rRjdMXNhZlRRa0ZijBfsLvadrR1jbYSZUAjSmYBgEyraGUjI3xKiyPMUxTtqkWInOy1sLQvaB1EBpVrNaXYvqRZfsGYgw/C1bKNZW8fijwmYPGuUhugI8FsTEjnIq+PQcZTGxlTMetF+MqOW1Y+cDgO2XatthAfaEyUV6YNpk7Z+gqFh23VHvekj/AL/q8x5H85y9Dsgr0eyQ/GvRRu/Yb/EVXmPWdDpBV7PWLBRki0eyb8a9Hby9jD+/ah5TT7Wc77QIUpIiaztF6O3l7H/RmsWdry0yrdHls5tylpUyWaSkU43cRZVX/Fp+A/SMLamA4n/NU/wmHjjAkFHsR7e2gaWWw3xUnSMj3YX0rW4XvlYNOU41cUIySak0Ph0jHwmdfxIOXyle+ynD04dIDZlg/iJL7jMqdI0O8ekrD04O6TKR2zLevSNOHyjDC7bRpQESO9mU9Lw4f2DNuug/pZtYDDvl9phlH+rQ+k8/oJkW/vtoO/n3D5ywdIaquURTcAlmtuuN0R7PU1cVTUbs3D4UBY+dvWFdmwVJWXrYeyxTRbjrEXY8Sx1OsbpXVWCnS+4nc3YDz7JpE0icY1C70am47r6X7jwYb4hcuyppLgsqLCKcTbHxDAmmzBwPZf3rcnHPt4x4kJIFhaUARcDUQbaZOQ9XTiLQ7CAzW1n6h7ozwL/yEGHrIyI6WH2Tlai31yOCt/PL5SfCVLu6Hc3X7j7/AP7J6ymYHHH7Sqqnqm6nz19L+csmxcSKjo4Ptpm8eI84SlwBJchu0K9IPY2udfMQzZpW65ZVukVO1VTzB9D+Vo+2EPZjI8xYiT5Ra3PVkSD5yRvZkafWSPsrXQbhjrONpYpUW7ETii9og6U4oFbX1lGJ/qyfN9kWjZtdWW67odPP9jbdWmoVjuhuI6Wr7oJjeK7FW/RbqzgA3Mq2IdM5Nxv5yv43pBVcEDQesR5nJvmPmYEpf6sOKX+SL0aqDjBMRtBFa95VgzfEfMyKpm4kwdpLybUfR6Ns7FB1DLC6R1iLosf5K90a02OaTbbT5KUqjwd4ymDvNoNTwqXveI+meLdFUoxXXhKiu2q3/kMqjKSVInko3yj0XFbPRvekNDZ6qLZ5QG27W+M+kxNsYk7nc9y/pCuQNR9F4q7KBNw8ExWx7655X6OJxbbs/jYQunh8a3G3ef0mVM64Ijr0iptmvMh9fo/UspZ7sRr3zJ2szdoCWoII4h1SCVIBxCBJVWcCSCacdKJwwkqyOpvmPo5Dvo97fhLKd0rXR49fwllYSHL9i3D9QDEL/iaX4TDiN8DxH+Ypdx+UOdt/fBkFHsr3SFbhe+V1qUsXSB7ARC9SU4pfqibN9mQlJwyTumxY2XUw5aKra/WO8neB2AfWbkyRj2ZCEpdCn7AncL904bAseFu+PDVB1O7kNAB2xNj9pXvkAVQbE8SeQiVkcnSQ14VFcs0mHRASxGm/WBbR2loETQcuffaAYvEEi7E9gveLHqEkkbzoOwH9AZRCN8sVJ1wgx3AXNe/M+OvyjDoHh74hmPuo3mzqPkIpq2yhRyjfoLXC4mx99GX/AFAhh6Awn9WbH7I9FRIr2psZKmptfnaOA8EqOGaxbLy13n98ImPBS+RfsfY5R+qfS14yx+2EouqEElja43A9pj7ZeFQIX4gfKJdsbHWuL7u0Rqj5F34C8HtdwQPsSwPFHXd2hrH5xf0228KeHci4YiwU6G5/fCdYbZj00OeqXUbr2BA7SNTPPOlO0hWchTdFOVe07i0JegZcckWxqpFKox9qxJJ7Re8sPQrFaovwvp+F/wBSZWMPojAc/TKfzh3RKsQQ19VqUx3qTMfTAXaLp0nXrq3Im/dew+QjDYeIHVEA6Srd2G665x+/3ui7YlUiouvGxENSqLFONyR6cfZmk3Tmm3UE7TdJvJSYToZR9t3Lm5l3I0lV2xhTmJjccW0xWVpUV9Uk6U40wOys2+OKWwl5R0cUnyTvIkVQ05zkluxWx1C6CVevTsxE6UHE5TTIbSGpDAk5aheZqdsWXov90I4orqYr6NpamBGybzJGqkWxdxQi6U7O+0UdhvKqNiWl/wBobolqprPSwwi4pnn55NSEVDY66XljwOzkAGggeWH4e4Ec4pdCYybfIyo4dBwhgy20EWI5hFK8FxDTJa1cG0yQGmZkygrPPqjQGtVAO+EVToDzivEU7nNJox55Gtk39oXnJlqjdeJn33tJbE9a+6HryDtwN6lUKLkwDE7SUWsYi2rjGtlvGHRDZgr1QH1AF7TJRo1MtXRLFl6vhLu26JsJsUUqgdRYWtHB3Tz/AMhVMuwO4gOIH86j4/KGONT3wXEj+bR8flDKg1PfFS6GR7K50iGg75WqjA6DUnQDtj7pdiciKe2B7MoCyuR1mF1FvZB949pG6MTUcezEyi5ZaRmHwoRdfaO/8prPe/Z+snrGAs1mI5i8l2cnbK1FRVIi2hWISw8+2V7EOALcAPXnGe06vUUa6nwsBrK9jXJvK8MeBOV8gVatma/ASOncm/Ob+z1tJwmXXylVpcImq+WaraMLbgJmGxBp1FdN6kMO228HvFx5yVluubsgVU5SORP5Tkd0er0632tJXRiMwupHA9vjwnNHFXuKgykbmsSpPaN4lc6LbSNJcj9ZDqDxUnf4Hf5y1LjsMbHOCeAAJ8NBFqPNFKnGrZYMJWQoAtQNmGtiOWotvmCoqDUxbiaeSg2JsAFy5RbVi7BR3C7CKlxTthqtWpa7dRABu4adu+FkuC5QEJRlerBekO2TVBSmepfKzD3tLkL2dsptHBh3yg2yqzHT4RcDxt6w564XKDuBufrGWxMFlBZxZnp1ajDkpWyj0i9muTWrZXl0LDut/tHpO+jJIaou6wV7dqv+RPlOMeMtVx2fQaQro+ly5PwMN1919I1/USvsX7pBhy1RLbshU9zAqPnFOxsI2dWPO0s2PS5TThb9+khw6AEEDjGQipRYibcZFlonqCTJukFE9WTpuki7KzSmKdqId9o1WA4+oLWMfim4p0hOeKdHOzagAjlHvKFtXGNTGZDG3R7a5dRmlmN7RI5KmWLHN1TKNiyuc3PGWfamNshnm+JxDtUY8LzMvETV2PGxSDjNJjVJtO9nNSYDMRDMThULAoPSSLJlv6OjpOKXDTY92H7EPpnrGB7LFltC6J6xiJO5cl+N3BMg2lwg4wGYXud0Nx9O4EiqV8qT08P1RBnrZ2JHWzWhWHfhMwdiWJ3mE4PCi/jHSdCYpmP1dTJqFcSTauFOS6xHhmbUGA5DYxY4/tYm4hqKb75kHcPQqWMpslJATexIgYxeRRcXvHe09m1HY5QLZrjfui6t0drMd4t4xCy4+7GfFk9C9q6spNrQdaobqg6kywL0XsB1tfTykD9E3Dh1bTjpBl+RBdMKOCT7QgxeyiTePOgDBa7qeAjapsVmFrjynOxNgPRqs5b2hbdFx/Jj5Yx4JeEWMbSZ6oQjTWNDuiDC4JhVDk6R+JFmyKcrspxQ1jVAWI+8o95hlQ74Lih16R/qklZwuYsbC8yT4Cj2IukeBFXIrezfMRzA4d0HxFrWEnxuKzMT+7cBBxqsRKTlS8IdGCTb8sHdrj96wLHHKM/Iwunut+7xRtitam3YQLdt7TYq5UdJ0hfjqpYIOwnzN/laKqiXa0b4lOtbkFH5wBFuSe30Gktg6iTSVsC+z65kNZu22vpCXHtNFtSp1v3xjoq3YmTpB1RuqAOXoN3rNVsLmTNya3yH0M5V8yseW7wP6R7Qw4am1uIDD/S9j6MJvQKVkGyusmU7xu8Re3nfzhCoxZcl76EG5sLQTZ+l/Py1+sZO9lVE9t/QGKyTa6HQgn2Wra/SGm+zmRWBqFqaZdxL5wSwHFeqTKrjNug01onqZGdnDaEsSbC3Zr5zrYmAFfFKg1Slx4FuJ8T8oz6R4RGrGyKSNL218ec6efZpSR2PDqm4iro7s44isrOLIvW1421EbUGzpiKvugCmg7rDxGhhux8NlR3Y2Co7ED+lDvMV/a5MNTTcT1yOzQD/AIkxO20hutRKzj2vWew0LW8Bqfl6x1sihl6o3lXv/tJi1ED1Wb3QSfr+kebHUtUsB7Qdf9oP1aUN8UIS5suWKfRD/SL+UGw+IXMBfjH9HBKyrf4R6rNrsdAb2EOOVRQqWJyYRRPVhCbpEqWFpLT3SZO2PfRwhijpDSbISL3twjVd8yqMwsRG4cmrtg5YbKjzZkd1CkN5GWvo1gAo1jhcAnwyZKdtwlXz3donWGuiTaODR0taK6HR2kym6iNGvaaRyJizJM6WBsQ0NgojGy8YxqYVVFwIUT2THNxabL8q1QtfiV0RYQ6SSgeuZumk4p+2ZA5NytlsIax1JMfXCprK/Wx2YWsfIyxVaQbfNLgk5S7Hn1jVE2TBtK7FWy6YaMqCWa0ISiF3SRVG+b87fZnwpdE2KT+We6VOhmueqfKWwtcWkIorynfKjvjZVape/snymS1/ZLymTfm/gz4f5KdebDwdiec2iGeIewEBp2Gg6UzJlQzuDjovMFSa+zmxTmWjqJaT6iHfaiA001hL2mxSYLIsdUtkaxIBvpvsJWtqbSqM5JUqvAdn5w7a211WyD3d/fBlxOdCRY24dk2bd/wZGJlF1qJcb5DTJVsrbjug2CHWfLudTYf1Wk+CxK1EUk9Zd/hAaoajVXqv2H5xHtgfzVXg7DzTrfIekfYtgy3BvqD5GJMa4bEIvwKW8W6o9LxmPuwJdEGNW7Eju/WAonV8PnHVSlF9WjY28u7hHRnxQqUebEuNFhFCC7eZjzaS7gO0+H7MW0KQJJHL/wDZXB1GyWauRzRcg24EnT1/OW3Y9QZRfjcf7hb52PhKjhva14G/79ZYdlPYr+Iemt/pNkdE4SwzEbutbxsPzhlMFKTVT7b9ROwW1PlB0pF6gQbrjy4fn4xjtVc9RKa7kAH5yab5SKIrix90Hwop0XqneeMhKZ6jE842qJ9nh1RdLiC4ClxkrlbbHpUqCnphcPUuNGQqe5uqfnKljsRmJAAsLDT0EtXSKsEwzjmVA8729JSKV9CeGp7zu8OPhHYVxYvI/Bwtl0G+9r9u9vkBLB0aw5L3HBVX/VUYn5WlewlPOUHMsx7id/pPQuiWHzOrAaM5YfgpjKD4sB6ShvwI/ktjUGViBu4eQmwjQ6+h5gkjuOsDfGKJ2q7BU2RVKZAM6onqmdNUzC4nFP2TFrsPwCLUN4SrQI7zN5mi4SdsOSSQbmmZjADVflOTiX5RuwvgZBzMJis4t+U5OLfkZmyOGhacM0VNin5GQ1sW4G6ZYXA4araLnx1nA5xbs/abO7KRunb/AHwi5SdhxSass+Ga++Hqgib7UqLiC/3u/wAJjoTVcipx5LOKQnQpCVldr1PhM7G06p92NWSIrV+yxFBNZYhXHVTw9ZIleoZ3yJ9HajnLMio1X7Jk7Y4rBwj33yRMM4G+NFWd5JGx+z9itcK/OSjCtzjDLNhJlG7MAGFbnOGwzDjGgSQ11m0dsxaqkMNZm2caKVItxOi95mPUs4EV7RxyPVCgGoy+yq7gx3sx3DsvygyrihkHw7FWF2ezdd/aOuXkO3tkqo1JweB0IhDYsglWoMLb8rqT5BrnymmxNFkzXZRezHfkYfGN6+MB2xqBsVTNN86+y1mEmwGDJrtkIyuhex57mC+JhVKiHp5M6sR7LDlwmtl11ouj1BpTJBvwV+qT52MLG05JS/oyVqLa7E+zq5s6sCCGIsdCDfcRE2GxGfEVXG7MFXuUW+d5e+l+z81GriMP1nReuF1zqNPtO0qN/MAGed7HTKo7dfOUyxaX/PQiOXeixI14PigPzmkacPhnc2JAXmL3t2coiKpjW+Bc6Zwz8L2H4V4+d4rwq5WZDvF/raW2nhwBlA0AtEeM2cwcMmvAjdcfnKIZE7QmcGqYmdcra8R9TG2DplACxF76AG/nykeP2TUbKVRrAa6g2JPZDKNJyozWzAbucY5prsWoNMZbISxZyO6+sM2Xhc1TMd5P1m8FT6gNrQ/ZujFuUjlLllUY9Bm0alyVHCw8Oc3hyQBb1MhR73Y77yN65scu8AntsOUBK+A2/Il6WY1wozuLXuFUWAsOJO862lf/ALScg5kX8TuhPSBmcZrXRQA3O7nQjuIEEwVAsQOAtp+/3rLIRqKJpSuTHmzcMbXHtGyL2aa/Tznp/RXCqq3XcoCL2ke0fP5Sh4HKhC/ADmO4Anhrx+Wolj2T0qo0yFLrl3e0OO8wXKnyZo3F0XSq1muIm2yltRubUfUSP+KsOT94h7mF/KHVytfDs1I5rdZRxuN6+I+k6MrbSYuUXFJtHGFPUklP2TB8A90v2SakdDMTGAi7/GGKNIAxtcyr7Y6VtSfJYmZiTbaR2XhJsu5E4ZRPN26dP8JmDpq/wxzxy9CdonopQTkoJ5u/TR/hkbdM6nKZ8Ujt4npZQQLGIMpnn/8AF9U8IPX6UVWFpjwyN+SJaNmaVX74a7fzllX6JYtndi0slRv5qyfJHWVMpxu42WRbWnIReYgeMZ8hyAk20ABJ9JS3baZJthqtvwNujsWNyXAnNJJnoXV5ibVl5ieWYzaOPpi9Sm6Ddd0ZRfvItFzdJMR8fpG/DITuj2cVE5idiunxCeJt0ixHx+k4G38R/wCQzfikduj21sUnxCbnin99VzvqH0mTfjZ2yLx/ET/CPP8ASRt0mce6PP8ASJyZA7i8z44+jtn7HLdKKvwjzMibpTV5DzMSs4kLVBM+OPo3Z+x8Ok1Y8vWR1+kNU8R6xOjidUKeeoiXtmIHhxm6RXLR2z8MfYKq7oXqE2bRQLgkcfyjXAYNUF+qg32UcebH3jMw+FAtpoBZV7t0hrXJ62ijhPNnLaTLoKlQ1pUs+7rDm2o8LyPGbLR7Zs1xoroLMvYGXh2G4i+njWvZLfkIdRxDjVntA5QwQ7R2Y+HYVKXs+8trC/xAcL8RMx2IWrh3NrHKL+BB+ktS4y413do1PhwmZadUGmKYKnRmyrkHMXO/wvGwbk1S5Bk0kVvobtaqWsiO6IMpspZcoGhJ5gaEcQeYgfSrYQw1QVKYtQq3Kj4G3tTPK28dndPRMBhRh0C00ARdcq9u89sk2hSp4qk1J/ZYaMLXVh7LDtB/Kem47Qp9kKes9l0eRUmh9BtLRxiug1dFzJUWofhAKsw/pvoT2XiNUZCVdSrDerAqR3gyLJCUe0VwmpdBYWaNASJak7FYc4nkMkZeqYLh6IJm6uIHOQLirGEkwW0M3cAWkX9qCraDYWnWrtakhbm25R3sdI6TodX3t9k54oXqC/YGW1vWGsMpLoF5YryKKWIZ2yoLn0A5k8BI66MHAz6jkCe/WW/AbGohSFpsjXs6l3zKw7b6jW475HWwjUHXMxek5y3JuyMd2vEGLctXwjV+y5KbUwrkEEXDf0mF7L2BUbrDKpvoCRcdoB0J7yJd8RgGHWQ+EgGLqJo69Xna4mvPLo5Y14F2F6N07gOhY3Ju+dWLNvPwnvvGCdF6KnRD3X/6tcGNMJjwdQbdkaLUDDUA/PwM5ft5BlJx8FcGwUOgbIfwgeBX2T5CEYTDYmh7IR039S6E+BuCfGO/sc3aPUd/OSYdWVrWJXt4Q4423/1ASy8f8YDh2VlzKLBr3Xdlb3habpHQw6vh11tYZjc68bWvIKeFsNWHhcx6wzvoV8sa7FVTjKDtrZLVq2k9RGBTizG/cJGmzKCnNkJPax+kZiwyjK2BlzKUaR4dtPZxotYwamhbRQWPJQSfIT3z+xYckMcPTJ4FkViPFgYbTqhdFVVHJQB8pVqT7HglHYOKfVcNWI5mm6r/ALmAEPwvQzGvqtA25l0H/aehdI9s3qCjvOlx7qg7jb3m08I2wWI6gAvb8p1IzY85p9AsURYoiHm7rb/1uYfhv/jN9DVxKL2IjN6sR8p6AHJ5+UkSm590zaR1sr+xehuGwxJD1HY78xAHko+ssFHAUQcwprccSMx9Z0mEfiPWFU6BtY3HdB0jd0FtKqsXO1VjcWROG4adsGr7Zo0vvMQvcLt/xvDtoogH8ytkHIZQfMgmJ6vSjZ6dVsSvi1zGf0gBR0g6a7PqUnouKlTMpAslrNbQgsRY3nkLPPdqPSbBOcqK9QnTq0XYHvYrb1le6VbXwDrUoNhWDjMocU0Rkb4g17/nMlFrtGxlF8JnlBeaV4wpbPDOFF7E2F99u20t1PoWmQGxvbtiXNIaoNlHVpks2J6MupsqMR2Kx+kyZsbqwhoHX3zJk4EDqQdpkyajiWnDNk/f0/xCbmQcn1Ch2i+n2oNtHeJkyeKuz00BYH2jCanu/iEyZCZoS3HujTZn3SfgEyZKfxexOUcUN4g2J9tu6ZMnpEq7Dqn3a/iX6yn9PvbpfhPzm5kV+R9GHi+xUmkZmTJ55WDvIH3TJkOItnq3Rz7lPwiOqPGZMnow6Ipdi6v9/U/DT/7wLpB9w3h/yEyZPLzfdl2PpBmC9jwHyg+I9hu4zJkS/Aa7Yowu898seA4TJkPH2Zk6G9KQNvMyZPYxfU8zJ9jlZtpkyNFHJmjNTJxpyZ3TmTJxx5sP87V/+w/WegbN3CZMgrsBdjulJxMmQgzchrb175qZOOPEP/lT7xpVOiftTJkp/H+wj83/AM2e2bA+58JrG/fv4fITJkD8nyJ/D6QzwfCN6c3MkJ6fgkmTJkM4/9k="/>
        </div> */}
      
      {/* </div> */}
    </div>
  </div>
</section>


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </div>
  
</section>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
           {/* {bookings.length &&
                bookings.map((booking) => {
                  return (
                    <>
                      <tr>
                        <td>{booking._id}</td>
                        <td>{booking.userid}</td>
                        <td>{booking.room}</td>
                        <td>{booking.fromdate}</td>
                        <td>{booking.todate}</td>
                        <td>{booking.status}</td>
                      </tr>
                    </>
                  );
                })} */}
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
      
    
   

    <Footer/>
    </>
  )
}
