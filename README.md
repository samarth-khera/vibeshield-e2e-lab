# vibeshield-e2e-lab

**Disposable VibeShield security-testing repository. Not a real application — never deploy, run or
reuse it.** It exists only for end-to-end tests of
[VibeShield AI](https://github.com/samarth-khera/VibeShieldAi) and may be deleted at any time.

## Intentionally planted findings

| Finding | Where | Expected scanner | Notes |
|---|---|---|---|
| `proxy-addr` 2.0.7 — GHSA-jqcg-44mw-7w3h (CVE-2026-90711), fixed in 2.0.8 | `package-lock.json` (through `express` 5.2.1, which declares `^2.0.7`) | OSV-Scanner | Transitive; a lockfile-only patch update fixes it |
| `brace-expansion` 1.1.17 — GHSA-rgw5-rvv9-x895 (fixed 1.1.18), GHSA-6j4f-fj2g-mc7p (1.1.19), GHSA-qhr7-859c-m2p7 (1.1.20), GHSA-q2hr-2g5m-vwhr (1.1.21) | `package-lock.json` (through `minimatch` 3.1.5, which declares `^1.1.7`) | OSV-Scanner | Transitive; one lockfile-only patch update (1.1.21) fixes all four |
| `eval()` on input | `fixtures/insecure/eval-example.js` | Semgrep (`js-code-execution-eval`) | Never imported or executed |
| Fake API key canary | `fixtures/secrets/fake-canary.env` | Gitleaks | Random synthetic value; not a credential for any service |

The lockfile was produced by npm 10.9.3 (`npm install --package-lock-only --ignore-scripts`); the
two vulnerable versions are ordinary in-range resolutions that `npm ci` installs as recorded.

There are no real credentials, API keys or personal data in this repository.
