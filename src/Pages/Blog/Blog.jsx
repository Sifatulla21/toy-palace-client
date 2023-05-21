import React from 'react';

const Blog = () => {
    return (
        <div>
                <h1 className="text-3xl font-bold my-4 text-center">Welcome to the Blog</h1>
            <div className="container mx-auto p-4">

                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-2">What is an access token and refresh token?</h2>
                    <p>
                        An access token is a credential used to access protected resources on an API server. It is typically a string that contains information about the user and their authorization. Access tokens are short-lived and expire after a certain period.
                    </p>
                    <p>
                        A refresh token is a credential used to obtain a new access token when the current one expires. Refresh tokens are long-lived and are used to maintain a user's session without requiring them to log in again.
                    </p>
                    <p>
                        On the client-side, access tokens are usually stored in memory or local storage. Refresh tokens, on the other hand, should be securely stored as an HTTP-only cookie to prevent them from being accessed by JavaScript.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-2">Compare SQL and NoSQL databases</h2>
                    <p>
                        SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of databases.
                    </p>
                    <p>
                        SQL databases are relational databases that store data in tables with predefined schemas. They use SQL for querying and manipulating data and provide ACID properties. SQL databases are suitable for complex relationships and transactions. Examples of SQL databases include MySQL, PostgreSQL, and Oracle.
                    </p>
                    <p>
                        NoSQL databases, on the other hand, are non-relational databases that store data in flexible formats like key-value pairs, documents, or graphs. They use various query languages and can handle large amounts of unstructured or semi-structured data. NoSQL databases offer high scalability, availability, and performance. Examples of NoSQL databases include MongoDB, Cassandra, and Redis.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-2">What is Express.js and Nest.js?</h2>
                    <p>
                        Express.js is a popular web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js focuses on being minimalistic and unopinionated, allowing developers to have more control over the application's structure and logic.
                    </p>
                    <p>
                        Nest.js, on the other hand, is a progressive Node.js framework for building efficient and scalable server-side applications. It leverages TypeScript and follows a modular architecture inspired by Angular. Nest.js combines elements of object-oriented programming, functional programming, and reactive programming to create robust and maintainable applications.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-2">What is MongoDB aggregate and how does it work?</h2>
                    <p>
                        In MongoDB, the aggregate method is used for advanced data aggregation operations. It allows you to perform calculations, transformations, and analysis on data stored in MongoDB collections.
                    </p>
                    <p>
                        The aggregate method takes an array of pipeline stages as its parameter. Each stage represents a step in the aggregation process, such as filtering, grouping, sorting, or projecting fields. MongoDB processes these stages in sequence to produce the desired result.
                    </p>
                    <p>
                        Aggregation pipelines in MongoDB can include various stages like $match, $group, $sort, $project, $limit, and many more. These stages allow you to perform complex operations on the data and obtain aggregated results based on your requirements.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Blog;