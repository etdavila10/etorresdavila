#!/bin/bash

git_last_commit_date="$(git log -1 --date=format:'%B %d, %Y' --pretty=format:'%ad')"
echo "Git last commit date: $git_last_commit_date"

file="src/components/Footer.astro"

echo "Inserting date into: $file"
echo

sed -i "" "s|<span id=\"git-last-commit-date\">[^<]*</span>|<span id=\"git-last-commit-date\">$git_last_commit_date</span>|g" "$file"
