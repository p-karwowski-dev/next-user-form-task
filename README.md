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

- Form validation on both FE and BE to ensure correct data manipulation (zod.js).
- Shared schema and types between FE and BE to avoid misalignments and duplications. It would be good to derive types and schemas from each other and keep them tightly coupled to avoid maintaining them separately.
- Form error handling.
- Form state preservation after validation for a better user experience.
- Using semantic form attributes such as `htmlFor` and `id` for accessibility.
- Sharing styles between components to avoid duplication.
- Folder structure that decouples logic and can be scaled up. The app folder is left to serve routing purposes only, with everything else grouped in separate folders.
- Simplicity.

## Notes

- The Dropdown component requires style improvements and additional structure for the multiple choice type. I stopped here as this is an exercise, but I see more improvements needed in this area.
- Visual aspects were kept to a minimum to focus on architecture.
- Few uni tests added to show mindset about testing.
