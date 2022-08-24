SELECT "a"."line1",
       "c"."name" AS "City",
       "a"."district",
       "co"."name" as "country"
  FROM "cities" as "c"
  JOIN "addresses" AS "a" USING ("cityId")
  JOIN "countries" AS "co" USING ("countryId")
  ORDER BY "City";
