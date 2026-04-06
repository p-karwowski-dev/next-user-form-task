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

Reasoning after reading task description:

- Form validation on both FE and BE to assure correct data manipulation (zod.js).
- Shared schema and types between FE and BE to avoid misalignments and duplications. Would be good to derived types and schema from each other and keep it tide to not have to maintain them separately.
- Form error handling.
- Form state preservation after validation for better user experience.
- Using basic form tags in form elements htmlFor, id for accessibility.
- Sharing style between components to avoid duplications
- Folder structure which decouples logic and can be scaled up. App folder is left to serve routing purpose only and everything else is grouped in separate folders.
- Simplicity

## Notes

Thought after coding.

- Dropdown component requires style improvement and additional structure for multiple choice type. I stopped here as it is exercise but I see more improvement needed in this area.
- Nav visual aspect was kept to minimum to focus on architecture.
