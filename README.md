## How to use with docker

Build the image:

```bash
docker build -t next-user-form-task .
```

Run the container:

```bash
docker run -p 3000:3000 next-user-form-task
```

## How to use with npm

#### Installation:

This project is using node v24.10.0 and npm 11.6.1.

```bash
npm install
```

#### Running

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Testing

```bash
npm run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Objectives

- Modularity and simplicity.
- Architecture that decouples logic and is suitable for scaling up.
- Shared schemas and types between the front end and back end to avoid misalignments and duplication, with types and schemas derived from each other to prevent defects.
- Form validation on both the front end and back end to ensure correct data handling (zod.js).
- Form error handling.
- Form state preservation after validation for a nicer user experience.
- Use of semantic form attributes such as `htmlFor` and `id` for accessibility.
- Shared styles between components to avoid duplication.

## Notes

- Visual aspects were kept to a minimum to focus on architecture.
- A few unit tests were added to demonstrate a testing mindset, focusing on the module level rather than complex integration tests.
