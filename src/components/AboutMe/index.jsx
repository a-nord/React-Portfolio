import headshot from '../../assets/headshot.png';
import heart from '../../assets/items-container.png';
import book from '../../assets/interests/the-fine-print.jpg'
// import show from '../../assets/interests/the-odyssey.jpg'
// import song from '../../assets/interests/Bakar_-_Hell_n_Back.png'
// import { Link } from "react-router-dom";
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
                <div className='hearts'>
                    <img src={ heart } alt="ashley nord's about me background" className="heart" />                                                                             
                    <p className='myParagraph'>Welcome, Everyone! I'm Ashley Nord and I am from Boca Raton, Florida.  I am of Haitian descent and I am proficient in both English and Creole.  In my leisure time, I find solace in the realms of literature, physical exercise, and travel.  I love animals, my particular affection extends to cats and elephants.
                        <br></br>      
                        <br></br>                    
                    Below, you'll discover which book has currently captured my attention, and any recent destinations I've traveled to.
                    </p>
                </div>                                                                               
            </section>
        </div>

        <section className="aboutMeSection">        
        <div className="aboutMeItems" >
            <img src={ heart } alt="ashley nord's about me background" className="mini-heart" />
            <div className='interest'>
                <h2>Book of the Month</h2>
                <img src={book} alt="cover of the fine print by lauren asher" className='book'/>
            </div>
        </div>

        {/* <div className="aboutMeItems" >
            <img src={ heart } alt="ashley nord's about me background" className="mini-heart" />
            <div className='interest'> 
                <h2 className='showTitle'>Show of the Month</h2>
                <img src={show} alt="cover of the greek mythology" className='show'/>
            </div>

        </div> */}

        {/* <div className="aboutMeItems" >
            <img src={ heart } alt="ashley nord's about me background" className="mini-heart" />
            <div className='interest'>
                <h2>Song of the Month</h2>
                <img src={song} alt="cover of the greek mythology" className='song'/>
            </div>
        </div>         */}
        </section>

{/* Update after tavel dates */}
        {/* <div className='travels'>
            <h2>
                Recent Travels
            </h2>
            
            <div>
            <Carousel />
            </div>
        </div> */}
        </div>
        </>
    )
}


