#!/usr/bin/env python3
"""Upload the year-one deck to Google Drive, converting it to native Google Slides.

Requires an ADC login that includes the drive.file scope:

  gcloud auth application-default login \
    --scopes=https://www.googleapis.com/auth/drive.file,https://www.googleapis.com/auth/cloud-platform

Then:  uv run --python 3.10 --with requests --with google-auth python upload-deck.py
"""

import json
import subprocess
import sys
from pathlib import Path

import requests

DECK = Path(__file__).parent / "nr2f1-year-one.pptx"
TITLE = "NR2F1 — One year of nr2f1.org"
PPTX = "application/vnd.openxmlformats-officedocument.presentationml.presentation"


def access_token() -> str:
    """Ask gcloud for a short-lived token rather than reading the ADC file."""
    out = subprocess.run(
        ["gcloud", "auth", "application-default", "print-access-token"],
        capture_output=True,
        text=True,
    )
    if out.returncode != 0:
        sys.exit(f"gcloud could not mint a token:\n{out.stderr.strip()}")
    return out.stdout.strip()


def main() -> None:
    if not DECK.exists():
        sys.exit(f"{DECK} not found — run build-deck.py first")

    metadata = {"name": TITLE, "mimeType": "application/vnd.google-apps.presentation"}
    with DECK.open("rb") as fh:
        response = requests.post(
            "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
            headers={"Authorization": f"Bearer {access_token()}"},
            files={
                "metadata": (None, json.dumps(metadata), "application/json"),
                "file": (DECK.name, fh, PPTX),
            },
            timeout=120,
        )

    if response.status_code >= 300:
        sys.exit(f"Drive refused the upload ({response.status_code}):\n{response.text[:800]}")

    file_id = response.json()["id"]
    print(f"https://docs.google.com/presentation/d/{file_id}/edit")


if __name__ == "__main__":
    main()
