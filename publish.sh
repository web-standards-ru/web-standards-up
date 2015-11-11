#!/bin/bash

echo "set git environment"
git config user.email ${GITHUB_EMAIL}
git config user.name ${GITHUB_NAME}
git remote rm origin
git remote add origin https://wsd-bot:${GITHUB_TOKEN}@github.com/web-standards-ru/web-standards-up.git
git checkout engine

echo "run update"
npm run update

echo "generate md"
npm run generate

echo "save dump"
git fetch --depth=5 https://wsd-bot:${GITHUB_TOKEN}@github.com/web-standards-ru/web-standards-up.git master:refs/remotes/origin/master
git checkout master
git add dump
git commit -m $'Save dump\n\n[ci skip]'

echo "save event data"
git add .
ADDED_MD=`git status -s | sed 's/^A  //g'`
git commit -m 'Save '${ADDED_MD}$'\n\n[ci skip]'
git push origin master &>/dev/null
