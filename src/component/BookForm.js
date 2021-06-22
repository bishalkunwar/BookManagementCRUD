import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {

        const [book, setBook] = useState({
            bookName: props.book ? props.book.bookName : '',
            category: props.book ? props.book.category : '',
            author: props.book ? props.book.author : '',
            Publications: props.book ? props.book.Publications : '',
            price: props.book ? props.book.price : ''

        });


        const [errorMsg, setErrorMsg] = useState('');
        const { bookName, category, author, publications, price } = book;


        const handleOnSubmit = (event) => {
            event.preventDefault();
            const values = [bookName, category, author, publications, price];
            let errorMsg = '';

            const allFieldsFilled = values.every((field) => {
                const value = '${field}'.trim();
                return value !== '' && value !== '0';
            });

            if (allFieldsFilled) {
                const book = {
                    id: uuidv4(),
                    bookName,
                    category,
                    author,
                    publications,
                    price,
                };
                props.handleOnSubmit(book);
            } else {
                errorMsg = 'Please fill out all the fields.';
            }
            setErrorMsg(errorMsg);
        };


        const handleInputChange = (event) => {
            const { name, value } = event.target;
            switch (name) {
                case 'price':
                    if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                        setBook((prevState) => ({
                            ...prevState,
                            [name]: value
                        }));
                    }
                    break;
                default:
                    setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
            }
        };



        return ( <
            div className = "main-form" > {
                errorMsg && < p className = "errorMsg" > { errorMsg } < /p>} <
                Form onSubmit = { handleOnSubmit } >
                <
                Form.Group controlId = "name" >
                <
                Form.Label > Book Name: < /Form.Label> <
                Form.Control
                className = "input-control"
                type = "text"
                name = "bookName"
                value = { bookName }
                placeholder = "Enter the Book Name"
                onChange = { handleInputChange }
                /> < /
                Form.Group >

                <
                Form.Group controlId = "category" >
                <
                Form.Label > Book Category < /Form.Label> <
                Form.Control
                className = "input-control"
                type = "text"
                name = "category"
                value = { category }
                placeholder = "Enter category of book"
                onChange = { handleInputChange }
                /> < /
                Form.Group > <
                Form.Group controlId = "author" >
                <
                Form.Label > Book Author < /Form.Label> <
                Form.Control
                className = "input-control"
                type = "text"
                name = "author"
                value = { author }
                placeholder = "Enter name of author"
                onChange = { handleInputChange }
                /> < /
                Form.Group > <
                Form.Group controlId = "publications" >
                <
                Form.Label > Book Publications < /Form.Label> <
                Form.Control
                className = "input-control"
                type = "text"
                name = "publications"
                value = { publications }
                placeholder = "Enter Book Publications"
                onChange = { handleInputChange }
                /> < /
                Form.Group > <
                Form.Group controlId = "price" >
                <
                Form.Label > Book Price < /Form.Label> <
                Form.Control
                className = "input-control"
                type = "text"
                name = "price"
                value = { price }
                placeholder = "Enter price of book"
                onChange = { handleInputChange }
                /> < /
                Form.Group > <
                Button variant = "primary"
                type = "submit"
                className = "submit-btn" >
                Submit <
                /Button> < /
                Form > <
                /div>
            );

        }

        export default BookForm;