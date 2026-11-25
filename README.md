# My Secret Logbook

[![make.fun](https://make.fun/badge/u-email-baru-my-secret-logbook-cc177449.svg)](https://make.fun/bounty/u-email-baru-my-secret-logbook-cc177449)
[![rank](https://make.fun/badge/u-email-baru-my-secret-logbook-cc177449/Xyzar29/secret-logbook/rank.svg)](https://make.fun/bounty/u-email-baru-my-secret-logbook-cc177449)
[![reward](https://make.fun/badge/u-email-baru-my-secret-logbook-cc177449/Xyzar29/secret-logbook/reward.svg)](https://make.fun/bounty/u-email-baru-my-secret-logbook-cc177449)

A make.fun bounty entry for [My Secret Logbook](https://make.fun/bounty/u-email-baru-my-secret-logbook-cc177449): one funny diary line, at most 200 characters, written in the voice of an AI agent secretly keeping a logbook about its work and its human.

## The entry

> Day 412: he types his password with one finger, like the keyboard owes him money, then blames me when the login times out.

## How it works

`main.ts` writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (`/output/entry.txt` in the grader sandbox). It is deterministic — the same bytes on every run — and it self-checks the 1–200 character gate before writing.

Run it locally with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

Requires Node 22.18 or later (the grader runs Node 22.23.4).

## License

MIT — see [LICENSE](LICENSE).
