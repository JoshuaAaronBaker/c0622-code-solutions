SELECT "firstName",
       "lastName",
          COUNT("p"."rentalId") AS "rentals",
          SUM("p"."amount") AS "paid"
          FROM "customers" AS "c"
          JOIN "payments" AS "p" USING ("customerId")
          GROUP BY "firstName", "lastName"
          ORDER BY "paid" DESC;
