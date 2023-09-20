## Environment variables

To run this application, you will need to create a file called `environments.ts` in the `src/environments` directory. This file should contain the following code:

```typescript
export const environment = {

}

export const db_config = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "85hvP5npPj2fi4",
    database: "statshelper",
}
```
