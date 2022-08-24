SELECT "f"."title" AS "film",
       "f"."releaseYear",
       "g"."name" AS "genre"
  FROM "filmGenre" AS "fg"
  JOIN "films" AS "f" USING ("filmId")
  JOIN "genres" AS "g" USING ("genreId")
  WHERE "f"."title" = 'Boogie Amelie';
