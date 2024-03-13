# nestmates

## Spin Up
`docker compose up --build`

Make all the changes in the backend folder.

## Prisma

### Prisma Migration

When a change is made to the model.
`npx prisma migrate dev --name <migration_name>`

### Prisma Client Generate
After a migration, refresh the client:
`npx prisma generate`