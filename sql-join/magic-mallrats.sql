SELECT "c"."firstName",
       "c"."lastName",
       "f"."title" AS "film"
  FROM "rentals" AS "r"
  JOIN "customers" AS "c" USING ("customerId")
  JOIN "inventory" USING ("inventoryId")
  JOIN "films" AS "f" USING ("filmId")
  WHERE "f"."title" = 'Magic Mallrats';
