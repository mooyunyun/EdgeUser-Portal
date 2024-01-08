#!/usr/bin/env zsh

# MUST BE zsh on macOS

function assert() {
	RESULT=$?
	if [ "${RESULT}" != "0" ]; then
		exit
	fi
}

ROOT=$(dirname "$0")

rm -rf "${ROOT}/dist/portal"
assert

npm run build
assert

TARGET="$(realpath "${ROOT}/../EdgeUser/build")"
if [ -d "$TARGET" ]; then
	rm -rf "${TARGET}/portal/"*
	cp -R "${ROOT}/dist/portal" "${TARGET}"
fi