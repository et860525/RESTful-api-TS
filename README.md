# Express + TypeScript RESTful API

My first Expres + TS RESTful API

## Install

```bash
npm install
```

### Optional

- Use [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) with `rest.rest` filt to access url.

## Settings

Create a `.env` file and contain your database url into root:

```env
DATABASE_URL="mongodb://username:password@localhost:27017/db-name"
```

## Run Server

```bash
npm run dev
```

- GET `http://localhost:3000/posts` - Get all posts
- GET `http://localhost:3000/posts/:id` - Get one posts
- POST `http://localhost:3000/posts` - Create a post
- PATCH `http://localhost:3000/posts/:id` - Update a post
- DELETE `http://localhost:3000/posts/:id` - Delete a post
