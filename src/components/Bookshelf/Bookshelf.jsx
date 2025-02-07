import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
    })

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
        
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('We no longer navigate away from this page')
        setBooks([formData, ...books]);

        setFormData({ title: '', author: '' })
    }

    const BookListItem = ({book}) => {
        return (
            <li>
                <img src={book.img}/>
                <p style={{ fontWeight: 'bold' }}>{book.title}</p>
                <p>by {book.author}</p>

            </li>
        )
    }

    // const bookStyle = {
    //     backgroundColor: '#b974b6',
    //     borderRadius: '8px',
    //     color: 'white',
    //     fontSize: '24pt',
    //     padding: '15px 50px',
    //     width: '300px',
    // }

    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>

                    {<form onSubmit={handleSubmit}>
                        <label htmlFor='title'>Title: </label>
                        <input id='title' name='title' value={FormData.title} onChange={handleInputChange} />
                        <label htmlFor='author'>Author: </label>
                        <input id='author' name='author' value={FormData.author} onChange={handleInputChange} />
                        <button type='submit'>Submit Book</button>
                    </form>
                    }
                </div>
                <div className="bookCardDiv">
                    <ul>
                        <div>
                        {books.map((book) => (
                            <BookListItem style={books.bookStyle}
                            key={book.id} 
                            book={book} 
                            />
                        ))}
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default Bookshelf;