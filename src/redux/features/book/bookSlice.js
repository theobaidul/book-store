import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [
        {
            id: 1,
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            topics: 'story',
            price: 250,
            coverImage:
                'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=912&q=80',
        },
        {
            id: 2,
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            topics: 'programming',
            price: 250,
            coverImage:
                'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=912&q=80',
        },
        {
            id: 3,
            title: 'Animal Farm',
            author: 'George Orwell',
            topics: 'nobel',
            price: 250,
            coverImage:
                'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=912&q=80',
        },
        {
            id: 4,
            title: 'Anna Karenina',
            author: 'Leo Tolstoy',
            topics: 'story',
            price: 250,
            coverImage:
                'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=912&q=80',
        },
    ],
    writer: [
        {
            id: 1,
            name: 'Harper Lee',
        },
        {
            id: 2,
            name: 'F. Scott Fitzgerald',
        },
        {
            id: 3,
            name: 'George Orwell',
        },
        {
            id: 4,
            name: 'Leo Tolstoy',
        },
    ],
    topics: [
        {
            id: 1,
            name: 'story',
        },
        {
            id: 2,
            name: 'nobel',
        },
        {
            id: 3,
            name: 'programming',
        },
    ],
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {},
});

export default bookSlice.reducer;
