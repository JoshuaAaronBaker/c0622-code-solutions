SELECT COUNT(*) AS "numberOfAppearances",
      "genres"."name" AS "g"
      FROM "genres"
      JOIN "filmGenre" USING ("genreId")
      JOIN "films" USING ("filmId")
      JOIN "castMembers" USING ("filmId")
      JOIN "actors" USING ("actorId")
      WHERE "firstName" = 'Lisa' AND "lastName" = 'Monroe'
      GROUP BY "g"
      ORDER BY "numberOfAppearances";
