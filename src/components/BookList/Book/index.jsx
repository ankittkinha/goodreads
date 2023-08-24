import { Link } from "react-router-dom";

const Book = (props) => {

    const { title, image, id } = props.data;

    return (
        <div className="col-sm-3">
            <div className="card">
                <img src={image} alt="" className="card-top-image" />
                <div className="card-body">
                    <div className="title text-center">{title}</div>
                    <Link to={"/books/detail/" + id} className="btn btn-dark btn-block">Show Details</Link>
                </div>

            </div>
        </div>
    )

}

export default Book;