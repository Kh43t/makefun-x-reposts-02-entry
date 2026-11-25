# Get the most reposts and likes on make.fun's newest X posts — entry

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/Kh43t/makefun-x-reposts-02-entry/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/Kh43t/makefun-x-reposts-02-entry/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Competition: `makefun-x-reposts-02`
("Get the most reposts and likes on make.fun's newest X posts", $500, top 50)

## The entry

Posts on X by @Serdadu_erf, each one a quote of, or a direct reply to, a
different post of @makefunai from the pool (posts with id at or above
2125053632605196760). Every post's own words carry make.fun and one of our
play codes. The list of their addresses lives in POSTS.json at the root.

## How it works

`main.ts` (Node 22, standard library only) copies POSTS.json from the
repository into /output. That is all it does — the house reads each post and
its counts (reposts x2, quotes x2, likes x1) straight from X.

## Adding a post

1. On X, open a pool post from @makefunai and Quote it (Repost, then Quote)
   or Reply to it directly, from @Serdadu_erf, with make.fun and a play code
   in the post's own words.
2. Copy the post's address (Share, then Copy link).
3. Add the address to the `posts` array in POSTS.json and submit the whole
   list again. One post of ours per pool post, at most 15 in total.
