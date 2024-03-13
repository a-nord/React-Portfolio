import headshot from '../../assets/headshot.png';
import { Link } from "react-router-dom";
import Carousel from '../../components/Carousel'

export default function AboutMe(){  
    return (
        <>
        <div className='aboutMe'>        
        <div className='about'>
            <h1>
                About Me
            </h1>

            <section className='aboutSection'>
                <img src={ headshot } alt="ashley nord's recent headshot" className="headshot" />                                                             
                <p className='myParagraph'>Welcome, Everyone! I'm Ashley Nord and I am from Boca Raton, Florida.  I am of Haitian descent and I am proficient in both English and Creole.  In my leisure time, I find solace in the realms of literature, physical exercise, and travel.  I love animals, my particular affection extends to cats and elephants.
                    <br></br>
                    <br></br>
                    Below, you'll discover which book has captured my attention, which show has become my latest obsession, the song I can't stop playing on repeat, and any recent destinations I've traveled to.
                </p>                                                                               
            </section>
        </div>
        <section>
        <div className="aboutMeSection">
        <Link className="aboutMeItems" to="/aboutme/book-of-month">
            <h2>
                Book of the Month
            </h2>
        </Link>

        <Link className="aboutMeItems" to="/aboutme/show-of-month">
            <h2>
                Show of the Month
            </h2>
        </Link>

        <Link className="aboutMeItems" to="/aboutme/song-of-month">
            <h2>
                Song of the Month
            </h2>
        </Link>
        </div>
        </section>

        <div className='travels'>
            <h2>
                Recent Travels
            </h2>
            <div>
            <Carousel />
            </div>
        </div>
        </div>
        </>
    )
}


