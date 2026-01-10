# CI determinism and lockfile governance

Deterministic builds require a lockfile so CI can install exact dependency
versions. Without a lockfile, `npm install` can resolve different versions over
time, making CI results non-reproducible.

## How to refresh the lockfile

1. Go to **Actions** → **Lockfile Refresh**.
2. Click **Run workflow** and confirm.
3. A pull request will be opened with the lockfile update.

## Review checklist for the PR

- The diff includes **only** `package-lock.json`.
- The PR title and commit message match the standard lockfile refresh format.
- Dependency changes are expected for the current `package.json` state.

## Next step after merge

Once the lockfile is merged, update CI to use `npm ci` for deterministic
installs.
