SELECT COUNT("c"."name") AS "cities",
          "co"."name" AS "countries"
          FROM "cities" AS "c"
          JOIN "countries" AS "co" USING ("countryId")
          GROUP BY "countryId"
          ORDER BY "countries";
