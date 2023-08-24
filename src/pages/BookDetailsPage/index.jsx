import React, { useState, useEffect } from 'react';
import BookData from "../../data/book";
import Navbar from "../../components/Navbar";
import BookDetails from "../../components/BookDetails"
import { useParams } from 'react-router-dom';

const BookDetailspage = () => {

    const {id} = useParams();

    const [book, setbook] = useState({})

    useEffect(() => {
        setbook(BookData[id])
    }, [])

    return(
        <>
            <Navbar />
            <BookDetails data={book} />
        </>
    )

}

export default BookDetailspage;
