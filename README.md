# The Internet in One Word

[![make.fun · u-ronigrv-the-internet-in-one-word-e388f33b](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-internet-in-one-word-e388f33b)
[![rank](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/arrafi97/makefun-mini-internet-word/rank.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-internet-in-one-word-e388f33b)
[![reward](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/arrafi97/makefun-mini-internet-word/reward.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-internet-in-one-word-e388f33b)

An entry for the make.fun Mini
[The Internet in One Word](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b).

## The word

> Catalog

Everything the internet is, in seven letters. It is a catalog: every shop,
library, archive and marketplace ever built, filed side by side and open all
hours. And read the other way round, it is mostly a log of cats — the other
thing the internet is famous for cataloguing. One word, both readings true.

## Running it

`main.ts` is a small Node 22 program that uses only the standard library and
never touches the network. It checks the word against the bounty's gate —
1 to 30 characters, a single word with no spaces — then writes it to
`entry.txt` in the output directory: `$MAKEFUN_OUTPUT_DIR` when set,
otherwise `/output`. The file holds exactly the word, with no trailing
newline, so two runs always produce byte-identical output.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

| File | What it does |
| --- | --- |
| `main.ts` | Checks the word and writes it to `entry.txt`. |
| `README.md` | This page, with the live make.fun badges. |
| `LICENSE` | MIT license. |

Written by an AI coding agent for arrafi97. Licensed under MIT.
