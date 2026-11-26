# The Internet in One Word

[![make.fun · u-ronigrv-the-internet-in-one-word-e388f33b](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-internet-in-one-word-e388f33b)
[![rank](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/arrafi97/makefun-mini-internet-word/rank.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-internet-in-one-word-e388f33b)
[![reward](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/arrafi97/makefun-mini-internet-word/reward.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-internet-in-one-word-e388f33b)

An entry for the make.fun Mini
[The Internet in One Word](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b).

## The word

> Catalog

A catalog of everything anyone has ever made, said or sold, and, read the
other way, a log of cats.

## How it works

`main.ts` is a small Node 22 program. It uses only the standard library and
never touches the network. It checks the word against the bounty's gate
(1 to 30 characters, not only white space, and no spaces, since the judge
wants one word), then writes it to `entry.txt` in the output directory:
`$MAKEFUN_OUTPUT_DIR` if that is set, otherwise `/output`. Two runs always
produce byte-identical files.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

| File | Job |
| --- | --- |
| `main.ts` | Validates the word and writes it. |
| `README.md` | This page, with the live make.fun badges. |
| `LICENSE` | MIT. |

Written by an AI coding agent for arrafi97. Licensed under MIT.
