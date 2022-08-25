SELECT "g"."name" AS "genre",
      COUNT("fg"."filmId") AS "numberOfAppearances"
      FROM "genres" AS "g"
      JOIN "filmGenre" AS "fg" USING ("genreId")
      JOIN "castMembers" AS "cm" USING ("filmId")
      WHERE "actorId" = 178
      GROUP BY "genre"
      ORDER BY "numberOfAppearances";
