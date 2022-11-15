import "./loader-styles/loader.css";
import "./loader-styles/loader-responsive.css";
import { Link } from "react-router-dom";
import cloud from "../../images/clouds/cloud.webp"
import icarus from "../../images/greek/icarus.png"
import dedal from "../../images/greek/dedal.png"

const clouds = [
    {
        src: cloud,
        class: "cloud_img",
        alt: "cloud1"
    },
    {
        src: cloud,
        class: "cloud_img",
        alt: "cloud2"
    },
    {
        src: cloud,
        class: "cloud_img",
        alt: "cloud3"
    },

]
const Loader = () =>{
    return(
        <section className="loader texture">
            <div className="clouds">
                    {clouds.map((image, index)=>
                        <img src={image.src} className={image.class} alt={image.alt} key={index} />
                    )}
            </div>
            <Link to="/gamejam" className="start-link">Start</Link>
            <div className="dedal-icarus">
                    <img src={icarus} className="dedal-icarus_img" alt="icarus"/>
                    <img src={dedal} className="dedal-icarus_img" alt="dedal"/>
            </div>
        </section>
        
    )
}
export default Loader