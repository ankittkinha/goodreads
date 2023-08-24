import Navbar from "../../components/Navbar";

const AboutPage = () => {

    return(
        <>
            <Navbar />
            <div className="jumbotron text-center">
                <div className="display-4">About Us</div>
                <div className="lead">This is simple about us page.</div>
            </div>

            <div className="container">
                <section>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias numquam soluta vero quasi maiores itaque eius non, minima a voluptatibus assumenda. Repellat quod quis odio excepturi beatae. Odit, vero dolore!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias numquam soluta vero quasi maiores itaque eius non, minima a voluptatibus assumenda. Repellat quod quis odio excepturi beatae. Odit, vero dolore!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias numquam soluta vero quasi maiores itaque eius non, minima a voluptatibus assumenda. Repellat quod quis odio excepturi beatae. Odit, vero dolore!
                    </p>
                </section>
            </div>
        </>
    )
}

export default AboutPage;