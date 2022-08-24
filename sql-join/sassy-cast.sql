SELECT "a"."firstName",
       "a"."lastName",
       "f"."title" AS "film"
    FROM "castMembers"
    JOIN "actors" AS "a" USING ("actorId")
    JOIN "films" AS "f" USING ("filmId")
    WHERE "f"."title" = 'Jersey Sassy';
