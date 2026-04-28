#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
QUALITY="${WEBP_QUALITY:-90}"

if ! command -v cwebp >/dev/null 2>&1; then
  echo "cwebp is required. Install it with: brew install webp" >&2
  exit 1
fi

if ! command -v oxipng >/dev/null 2>&1; then
  echo "oxipng is required. Install it with: brew install oxipng" >&2
  exit 1
fi

oxipng -o 4 --strip safe --recursive "$ROOT_DIR/assets"

find "$ROOT_DIR/assets" -maxdepth 1 -type f -name "*.png" -print0 |
  while IFS= read -r -d '' image; do
    output="${image%.png}.webp"
    cwebp -quiet -q "$QUALITY" -m 6 -metadata none "$image" -o "$output"
    printf "%s -> %s\n" "${image#$ROOT_DIR/}" "${output#$ROOT_DIR/}"
  done
