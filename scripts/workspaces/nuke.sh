#!/usr/bin/env bash
echo "┏━━━ 💣 NUKE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
lerna run --scope @microwelpe/* --parallel nuke && rimraf node_modules