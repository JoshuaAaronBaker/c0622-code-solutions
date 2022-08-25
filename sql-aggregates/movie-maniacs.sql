SELECT "firstName" || "c"."lastName" AS "customerName",
          COUNT("p"."rentalId") AS "rentals",
          SUM("p"."amount") AS "paid"
          FROM "customers" AS "c"
          JOIN "payments" AS "p" USING ("customerId")
          GROUP BY "customerName"
          ORDER BY "paid" DESC;
