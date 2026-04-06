## Installation:

This project is using node v24.10.0 and npm 11.6.1.

```bash
npm install
```

## Running

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

```bash
npm run test
```

## Engineering notes - objectives

Reasoning after reading task description:

- Form validation on both FE and BE to assure correct data manipulation (zod.js).
- Shared schema and types between FE and BE to avoid misalignments and duplications. Would be good to derived types and schema from each other and keep it tide to not have to maintain them separately.
- Form error handling.
- Form state preservation of error for nice user experience.
- Basic form tags htmlFor, id for accessibility.
- Sharing style between components to avoid duplications
- Folder structure which decouple logic and can be scaled up. App folder left to serve routing purpose only and everything else grouped in separate folders.
- Simplicity
