#!/usr/bin/env bash
echo "┏━━━ 📶 SORT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
sort-package-json && 
lerna run --scope @microwelpe/* --parallel sort